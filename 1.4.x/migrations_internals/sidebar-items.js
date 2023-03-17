initSidebarItems({"enum":[["MigrationError","Errors that occur while preparing to run migrations"],["RunMigrationsError","Errors that occur while running migrations"]],"fn":[["any_pending_migrations","See the module level documentation for information on how migrations should be structured, and where Diesel will look for them by default."],["file_name",""],["find_migrations_directory","Returns the directory containing migrations. Will look at for $PWD/migrations. If it is not found, it will search the parents of the current directory, until it reaches the root directory.  Returns `MigrationError::MigrationDirectoryNotFound` if no directory is found."],["mark_migrations_in_directory","Compares migrations found in `migrations_dir` to those that have been applied. Returns a list of pathbufs and whether they have been applied."],["migration_from",""],["name",""],["revert_latest_migration","Reverts the last migration that was run. Returns the version that was reverted. Returns an `Err` if no migrations have ever been run."],["revert_latest_migration_in_directory",""],["run_migrations","Run all pending migrations in the given list. Apps should likely be calling `run_pending_migrations` or `run_pending_migrations_in_directory` instead."],["run_pending_migrations","Runs all migrations that have not yet been run. This function will print all progress to stdout. This function will return an `Err` if some error occurs reading the migrations, or if any migration fails to run. Each migration is run in its own transaction, so some migrations may be committed, even if a later migration fails to run."],["search_for_migrations_directory","Searches for the migrations directory relative to the given path. See `find_migrations_directory` for more details."]],"mod":[["migration",""]],"static":[["TIMESTAMP_FORMAT",""]],"struct":[["MigrationFileName",""],["MigrationName",""]],"trait":[["Migration","Represents a migration that interacts with diesel"],["MigrationConnection","A connection which can be passed to the migration methods. This exists only to wrap up some constraints which are meant to hold for all connections. This trait will go away at some point in the future. Any Diesel connection should be useable where this trait is required."]]});