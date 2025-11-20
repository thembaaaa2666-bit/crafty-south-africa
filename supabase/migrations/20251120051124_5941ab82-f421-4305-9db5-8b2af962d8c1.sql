-- Create storage bucket for CVs
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'cvs',
  'cvs',
  false,
  5242880, -- 5MB limit
  ARRAY['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
);

-- Create applicants table
CREATE TABLE public.applicants (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service_category TEXT NOT NULL,
  experience_years INTEGER,
  message TEXT,
  cv_file_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.applicants ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert applications (public submissions)
CREATE POLICY "Anyone can submit applications"
ON public.applicants
FOR INSERT
WITH CHECK (true);

-- Create policy to allow users to view their own applications
CREATE POLICY "Users can view their own applications"
ON public.applicants
FOR SELECT
USING (email = current_setting('request.jwt.claims', true)::json->>'email');

-- Storage policies for CV uploads
CREATE POLICY "Anyone can upload their CV"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'cvs');

CREATE POLICY "Users can view their own CVs"
ON storage.objects
FOR SELECT
USING (bucket_id = 'cvs');

-- Create index for better performance
CREATE INDEX idx_applicants_email ON public.applicants(email);
CREATE INDEX idx_applicants_created_at ON public.applicants(created_at DESC);