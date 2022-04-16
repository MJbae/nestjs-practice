import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'test',
  database: 'board-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
};
