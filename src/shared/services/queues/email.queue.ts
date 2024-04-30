import { emailWorker } from '@worker/email.worker';
import { BaseQueue } from './base.queue';
import { IEmailJob } from '@user/interfaces/user.interface';

class EmailQueue extends BaseQueue {
  constructor() {
    super('email');
    this.processJob('forgotPasswordEmail', 5, emailWorker.addNotificationEmail);
  }


  public addEmailJob(name: string, data: IEmailJob): void {
    this.addJob(name, data);
  }
}


export const emailQueue: EmailQueue = new EmailQueue();
