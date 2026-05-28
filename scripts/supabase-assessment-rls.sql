-- Run this in Supabase SQL Editor.
-- The app uses the anon key, so RLS must explicitly allow assessment inserts.
-- SELECT is needed because the frontend requests the generated ref_id after insert.

grant insert, select on table public.assessment_submissions to anon;

create policy "Allow anon assessment inserts"
on public.assessment_submissions
for insert
to anon
with check (true);

create policy "Allow anon assessment ref lookup"
on public.assessment_submissions
for select
to anon
using (true);
