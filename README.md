# Empty GraphQL Service

This project uses

- SQL
- Docker
- TypeOrm
- Type-Graphql
- express

## Scripts

- `npm run start` - Starts the application **without** compiling it to JS.
- `npm run start:dev`- Starts application for development. Refreshes the server when any changes is made.
- `npm run build`- Compiles and build the application. Produces a dist folder which can be run directly by NodeJS without TypeScript.
- `npm run migrate` - TypeOrm migration helper function mainly used by other scripts. You probably will not need to use this one!
- `npm run migrate:run`- Runs all the migrations in the migration folder and hence sets up the connected database. [Click here for more information](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md#running-and-reverting-migrations).
- `npm run migrate:generate`- Generates all the changes from the ORM model. [Click here for more information](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md#generating-migrations).
- `npm run migrate:create` - Creates an empty migration. Needs to get an --name(-n) argument. [Click here for more information](https://github.com/typeorm/typeorm/blob/master/docs/migrations.md#creating-a-new-migration).
- `npm run docker:dev` - Starts a local docker container for both the service and a SQL databases. Runs all the migration in a seperate container and then listens to the changes to the in the src/ folder.
- `npm run docker:reset` - Creates a hard reset on the docker container.
- `npm run test` - Runs all the test files declared
- `npm run test:integration` - Runs all the integration test files declared
- `npm run test:lint` - Makes sure that no linting warning appear in the project.
- `npm run lint:fix` - Fixes all the automatic linting issues in the src folder.
- - `npm run git:pre-push` - This is a helper function which can help you to always make sure that you push code that is valid.
-

## Testing

Testing is done using jest. It has two types of tests normal (ends with _\*.test.ts_) and integration tests(ends with _\*.i.test.ts_). The normal test should be used as simple unit tests and integration test can be used to when more complex testing enviroment is required.
