import { registerAs } from '@nestjs/config';

import { sqlConfig } from './sql.config';
export const dataBaseConfig = registerAs('database', () => ({
  sql: {
    ...sqlConfig(),
  },
}));
