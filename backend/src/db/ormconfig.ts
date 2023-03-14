import path from 'path';
import { ConnectionOptions } from 'typeorm';
import { APP_CONFIG } from '../config/app.config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default {
  host: APP_CONFIG.DB_HOST,
  type: APP_CONFIG.DB_TYPE,
  port: APP_CONFIG.DB_PORT,
  username: APP_CONFIG.DB_USERNAME,
  password: APP_CONFIG.DB_PASSWORD,
  database: APP_CONFIG.DB_NAME,
  schema: APP_CONFIG.DB_SCHEMA,
  synchronize: false,
  migrationsRun: true,
  dropSchema: false,
  namingStrategy: new SnakeNamingStrategy(), // Here you'r using the strategy!
  entities: [
    path.join(__dirname, '..', 'entities', '**', '*.*'),
    path.join(__dirname, '..', 'entities', '*.*')
  ],
  migrations: [path.join(__dirname, 'migrations', '*.*')]
} as ConnectionOptions;
