
-- 1. Fix applicants INSERT policy: remove WITH CHECK (true)
DROP POLICY IF EXISTS "Anyone can submit applications" ON public.applicants;

CREATE POLICY "Anyone can submit applications"
ON public.applicants
FOR INSERT
TO public
WITH CHECK (
  length(btrim(full_name)) BETWEEN 1 AND 200
  AND length(btrim(email)) BETWEEN 3 AND 320
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(btrim(phone)) BETWEEN 5 AND 32
  AND length(btrim(service_category)) BETWEEN 1 AND 100
  AND (message IS NULL OR length(message) <= 5000)
  AND (experience_years IS NULL OR (experience_years >= 0 AND experience_years <= 80))
  AND (
    cv_file_path IS NULL
    OR cv_file_path LIKE (email || '/%')
  )
);

-- 2. Remove the unreliable SELECT policy that trusted unverified JWT claims.
--    Client reads are not required by the app; admins use service_role.
DROP POLICY IF EXISTS "Users can view their own applications" ON public.applicants;

-- 3. Lock down the CVs storage bucket: remove the public-effective SELECT policy.
DROP POLICY IF EXISTS "Users can view their own CVs" ON storage.objects;

-- 4. Tighten the CV upload policy so a submission can only write files under
--    a folder whose name matches the uploaded email path used by the app.
DROP POLICY IF EXISTS "Anyone can upload their CV" ON storage.objects;

CREATE POLICY "Anyone can upload their CV"
ON storage.objects
FOR INSERT
TO public
WITH CHECK (
  bucket_id = 'cvs'
  AND name ~ '^[^/]+@[^/]+\.[^/]+/[^/]+$'
  AND octet_length(name) <= 512
);
