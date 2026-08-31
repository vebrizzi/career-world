create table public.progress (
  user_id    uuid primary key references auth.users(id) on delete cascade,
  state      jsonb not null default '{
    "gs": {"SKILL":0,"VOICE":0,"CLARITY":0,"NETWORK":0,"ENERGY":12,"RADAR":0},
    "worldHistory": [],
    "world": {"id": null, "visited": [], "choices": [], "patterns": []},
    "char": null
  }'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

create policy "select own progress" on public.progress for select using (auth.uid() = user_id);
create policy "insert own progress" on public.progress for insert with check (auth.uid() = user_id);
create policy "update own progress" on public.progress for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

create or replace function public.set_updated_at()
returns trigger language plpgsql
set search_path = ''
as $$ begin new.updated_at = now(); return new; end; $$;

create trigger progress_set_updated_at before update on public.progress
  for each row execute function public.set_updated_at();
