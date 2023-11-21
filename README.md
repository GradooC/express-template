# express-template

## How to start development

1. run the database by executing `docker-compose up -d` command in terminal
2. run the server by executing `yarn dev` command in terminal
3. run the prisma studio by executing `yarn db:gui` command in terminal. The database GUI will be available at <http://localhost:5555>

## How to update the database after updating schema

1. Update schema in [schema.prisma file](prisma/schema.prisma)
2. Update data in the database by executing `npx prisma db push` command in terminal
