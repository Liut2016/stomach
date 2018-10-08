import { Injectable } from '@angular/core';

import { Message } from '@app/feedback/message';
import { MESSAGES } from '@app/feedback/mock-messages';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  getMessages(): Promise<Message[]> {
    return Promise.resolve(MESSAGES);
  }
}
