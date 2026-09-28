-- Create storage bucket
insert into storage.buckets (id, name, public)
values ('attendance-images', 'attendance-images', false)
on conflict (id) do nothing;

create policy "Allow authenticated upload to attendance bucket"
on storage.objects for insert
with check (bucket_id = 'attendance-images' and auth.role() = 'authenticated');

create policy "Allow authenticated read from attendance bucket"
on storage.objects for select
using (bucket_id = 'attendance-images' and auth.role() = 'authenticated');

create policy "Allow authenticated update of attendance bucket"
on storage.objects for update
using (bucket_id = 'attendance-images' and auth.role() = 'authenticated');
