import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as path from 'path';

//Seguir os passos do link tutorial

const options: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'data/rocketseat.db',
  logging: true,
  entities: [path.resolve(__dirname, '..', 'db', 'models', '*')],
  migrations: [path.resolve(__dirname, '..', 'db', 'migrations', '*')],
};

module.exports = options;
