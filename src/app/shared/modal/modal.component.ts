import {Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit, OnDestroy{

  @Output() dismiss = new EventEmitter();

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    document.body.append(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.el.nativeElement.remove();
  }

  onDismissClick() {
    this.dismiss.emit();
  }
}
