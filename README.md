#Database 

All the DB settings are stored in configuration file `postgres.config.ts`.

Tables will be created automatically using the instructions in entities files after applications starts, we don't need additional migrations for this.

Initial data will be generated after calling `npm run seed:run` in terminal. Important: config change for seeding database required (line is commented).

#Backend

Backend files are stored in server folder because we have both frontend and backend in one repository. Server runs on `3001` port

Server can be started by calling:

`cd server/`

`npm run start`

#Frontend

Frontend files are stored in client folder and frontend app runs at `3000` port.
Product list can be found and `/products` path. Every record has detailed view from which delivery status field can be changed.

Applciation can be started by calling:

`cd client/`

`npm run start`
