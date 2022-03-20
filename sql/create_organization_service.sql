CREATE TABLE IF NOT EXISTS organizations (
  id         UUID PRIMARY KEY         DEFAULT gen_random_uuid(),
  name       varchar(100)                           NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE
);

COMMENT ON COLUMN organizations.id IS 'The identifier for the organization record';
COMMENT ON COLUMN organizations.name IS 'The name of the organization';
