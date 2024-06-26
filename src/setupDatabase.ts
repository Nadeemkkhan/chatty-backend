import mongoose from 'mongoose';

import { config } from '@root/config';
import { redisConnection } from '@service/redis/redis.connection';

export default () => {
  const connect = () => {
    mongoose
      .connect(`${config.DATABASE_URL}`)
      .then(() => {
        console.log('successfully connected to database.');
        redisConnection.connect();
      })
      .catch((error) => {
        console.log('Error connecting to database', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
