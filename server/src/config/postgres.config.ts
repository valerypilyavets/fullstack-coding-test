import { join } from 'path';
const pgConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'valerypilyavets',
    password: '',
    database: 'coding_test_db',
    // entities: ['src/**/entities/*.entity{.ts,.js}'],  for initial db seeding
    entities: [join(__dirname, '../**/*.entity.{ts,js}')],
    migrations: ['dist/db/migrations/*{.ts,.js}'],
    seeds: ['src/db/seeding/seeds/*{.ts,.js}'],
    factories: ['src/db/seeding/factories/*{.ts,.js}'],
    synchronize: true,
    cli: {
        entitiesDir: 'src/**/entities',
        migrationsDir:'src/db/migrations',
    },
};

module.exports = pgConfig;