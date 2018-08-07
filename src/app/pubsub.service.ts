import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class PubsubService {
  private subject: Subject<any> = new Subject<any>();
  broadcast(payload: any) {
    this.subject.next(payload)
  }
  listen() {
    return this.subject.asObservable();
  }

}
