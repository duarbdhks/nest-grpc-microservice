CREATE TABLE IF NOT EXISTS organizations (
  id   UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name varchar(100) NOT NULL
);

COMMENT ON COLUMN organizations.id IS 'The identifier for the organization record';
COMMENT ON COLUMN organizations.name IS 'The name of the organization';
