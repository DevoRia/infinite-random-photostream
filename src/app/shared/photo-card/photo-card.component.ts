import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss'],
})
export class PhotoCardComponent {
  @Input()
    src?: string;

  @Input()
    withAnimation?: boolean;

  @Input()
    large: boolean = false;

  @Output()
    onClick: EventEmitter<string> = new EventEmitter<string>();

  animation: boolean = false;

  onClickHandler() {
    this.onClick.emit(this.src);
    this.animation = true;
  }
}
