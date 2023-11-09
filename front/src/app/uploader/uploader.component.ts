import { Component, Input, OnDestroy } from '@angular/core';
import { UploaderService } from './uploader.service';
import { Subscription, finalize } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-uploader',
  styleUrls: ['./uploader.component.scss'],
  templateUrl: './uploader.component.html',
  standalone: true,
  imports: [
    MatProgressBarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,]

})
export class UploaderComponent implements OnDestroy {
  message?: string;
  fileName = '';
  uploadSub?: Subscription | null;

  @Input()
  requiredFileType?: string;

  constructor(private uploaderService: UploaderService) { }

  public onFileSelected(input: HTMLInputElement): void {
    const file = input.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("multimedia", file);
      this.uploadSub = this.uploaderService.upload(file, formData).pipe(
        finalize(() => this.reset())).subscribe(res => this.fileName = res)
    }
  }

  public ngOnDestroy(): void {
    this.uploadSub?.unsubscribe();
    this.reset();
  }
  private reset(): void {
    this.uploadSub = null;
  }

}
