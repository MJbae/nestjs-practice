import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.db;

export const typeORMConfig: TypeOrmModuleOptions = {
  type: dbConfig.type,
  host: process.env.RDB_HOSTNAME || dbConfig.host,
  port: process.env.RDB_PORT || dbConfig.port,
  username: process.env.RDB_USERNAME || dbConfig.username,
  password: process.env.RDB_PASSWORD || dbConfig.password,
  database: process.env.RDB_DATABASE || dbConfig.database,
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: dbConfig.synchronize,
};
