import {
  Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.component.html',
  styleUrls: ['./photo-grid.component.scss'],
})
export class PhotoGridComponent implements OnInit {
  @ViewChild('photoCardGrid', { static: false }) photoCardGrid?: ElementRef;

  photos: string[] = [];

  @Input()
    withAnimation: boolean = false;

  @Input()
    pagination: boolean = false;

  @Input()
    dataProvider$?: Observable<string[]>;

  @Input()
    fetchSubject$?: Subject<any>;

  @Output()
    clickFn: EventEmitter<string> = new EventEmitter<string>();

  private intersectionObserver?: IntersectionObserver;

  loading: boolean = false;

  lastElement?: Element;

  ngOnInit(): void {
    if (this.pagination) {
      this.fetchPhotosAndObserve();
    }

    this.dataProvider$?.subscribe((photos) => {
      this.photos = photos;

      if (this.pagination) {
        this.loading = false;
        // to be sure last element was changed
        setTimeout(() => {
          this.initIntersectionObserver();
        }, 0);
      }
    });
  }

  private fetchPhotosAndObserve() {
    this.loading = true;
    this.fetchSubject$?.next(null);

    if (this.lastElement) {
      this.intersectionObserver?.unobserve(this.lastElement);
    }
  }

  private initIntersectionObserver(): void {
    this.lastElement = this.photoCardGrid?.nativeElement.lastElementChild;
    this.intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        this.fetchPhotosAndObserve();
      }
    });

    if (this.lastElement) {
      this.intersectionObserver?.observe(this.lastElement);
    }
  }
}
