# Donation app backend

Its a back-end server of app. follow the instructions to run the server

# Prerequisites

    - node v16.0.0
    - mysql (you can configure the database & schema name in .env just make sure both exist in your system)

# Setting up project

    database can be configured using `.env`
    typeorm can be configured using `src/db/typeorm.ts`
        install node modules
            - `npm install`
        run migrations
            - `npm run migration:run`

# Run directly

    run server local
        - `npm run local`

# Build and run

    build project
        `npm run build`
    run built project as local
        `npm start`

# Seeder

    Please execute the seed command
        `yarn seed`
