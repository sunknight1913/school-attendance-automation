create extension if not exists "uuid-ossp";

create table if not exists schools (
  id uuid primary key default uuid_generate_v4(),
  school_name text not null,
  school_id text not null unique,
  principal_name text,
  district text,
  mandal text,
  village text,
  pincode text,
  email text,
  phone text,
  address text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  school_id uuid not null references schools(id) on delete cascade,
  name text not null,
  email text,
  phone text,
  role text not null check (role in ('super_admin','school_admin','principal','teacher','parent')),
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists teachers (
  id uuid primary key default uuid_generate_v4(),
  school_id uuid not null references schools(id) on delete cascade,
  teacher_id text not null unique,
  name text not null,
  subject text,
  class_assigned text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists students (
  id uuid primary key default uuid_generate_v4(),
  school_id uuid not null references schools(id) on delete cascade,
  student_id text not null unique,
  name text not null,
  roll_no text,
  class_name text,
  section text,
  gender text,
  parent_name text,
  parent_phone text,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists attendance (
  id uuid primary key default uuid_generate_v4(),
  school_id uuid not null references schools(id) on delete cascade,
  student_id uuid not null references students(id) on delete cascade,
  attendance_date date not null,
  status text not null check (status in ('present','absent','approved','medical_leave','sports_leave','sick_leave','other_approved')),
  marked_by uuid references users(id),
  source text not null default 'manual',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists attendance_images (
  id uuid primary key default uuid_generate_v4(),
  school_id uuid not null references schools(id) on delete cascade,
  class_name text,
  section text,
  attendance_date date,
  storage_path text not null,
  uploaded_by uuid references users(id),
  processing_status text not null default 'queued' check (processing_status in ('queued','processing','validating','completed','failed')),
  error_message text,
  created_at timestamptz not null default now()
);

create table if not exists processing_jobs (
  id uuid primary key default uuid_generate_v4(),
  school_id uuid not null references schools(id) on delete cascade,
  attendance_image_id uuid references attendance_images(id),
  status text not null default 'queued' check (status in ('queued','processing','validating','completed','failed')),
  attempt_count integer not null default 0,
  ai_provider text,
  ai_model text,
  result jsonb,
  error_message text,
  completed_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists audit_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references users(id),
  school_id uuid references schools(id),
  action text not null,
  entity_type text,
  entity_id uuid,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_users_school_id on users(school_id);
create index if not exists idx_students_school_id on students(school_id);
create index if not exists idx_teachers_school_id on teachers(school_id);
create index if not exists idx_attendance_school_date on attendance(school_id, attendance_date);
create index if not exists idx_processing_jobs_school on processing_jobs(school_id);
