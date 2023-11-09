import { Injectable } from '@angular/core';
import {
  HttpClient, HttpEvent, HttpEventType, HttpErrorResponse
} from '@angular/common/http';

import { Observable, catchError, last, map, of, tap } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class UploaderService {
  constructor(
    private http: HttpClient,
    private messenger: MessageService) { }

  public upload(file: File, formData: FormData): Observable<string> {
    const upload$ = this.http.post("http://localhost:3000/upload/file", formData, {
      reportProgress: true,
      observe: 'events'
    })
      .pipe(
        map(event => this.getEventMessage(event, file)),
        tap(message => this.showProgress(message)),
        last(),
        catchError(this.handleError(file)),

      );
    return upload$
  }

  private getEventMessage<T>(event: HttpEvent<T>, file: File): string {
    switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;

      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;

      default:
        return `File "${file.name}"  upload event: ${event.type}.`;
    }
  }

  private handleError(file: File): (error: HttpErrorResponse) => Observable<string> {
    const userMessage = `${file.name} upload failed.`;

    return (error: HttpErrorResponse) => {
      console.error(error);

      const message = (error.error instanceof Error) ?
        error.error.message :
        `server returned code ${error.status} with body "${error.error}"`;

      this.messenger.add(`${userMessage} ${message}`);

      return of(userMessage);
    };
  }

  private showProgress(message: string): void {
    console.log(message)
    this.messenger.add(message);
  }
}
