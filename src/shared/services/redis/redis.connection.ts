import Logger from 'bunyan';
import { config } from '@root/config';
import { BaseCache } from './base.cache';

const log: Logger = config.createLogger('redishConnection');

class RedisConnection extends BaseCache {
  constructor() {
    super('redisConnection');
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect();
    } catch (error) {
      log.error(error);
    }
  }
}

export const redisConnection: RedisConnection = new RedisConnection();
