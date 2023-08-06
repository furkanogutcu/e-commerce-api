import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { config as dotenvConfig } from 'dotenv';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';

dotenvConfig();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: `${process.env.DATABASE_HOST}`,
  port: Number(`${process.env.DATABASE_PORT}`),
  username: `${process.env.DATABASE_USERNAME}`,
  password: `${process.env.DATABASE_PASSWORD}`,
  database: `${process.env.DATABASE_NAME}`,
  entities: [join(__dirname, '../modules/**/*.entity.ts')],
  migrations: [join(__dirname, '../database/migrations/*.ts')],
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs('databaseConfiguration', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
