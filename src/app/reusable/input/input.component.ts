import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() type: string;
  @Input() placeholder: string;
  @Input() min: number;
  @Input() max: number;
  @Input() value: string;

  @Input() formControlName: string;

  @Output() valueEvent = new EventEmitter<{}>();
  @Output() keyupEvent = new EventEmitter<{}>();
  constructor() { }

  ngOnInit() {
  }

  valueChanged(e) {
    this.valueEvent.emit(e);
  }

  keyupChanged(e) {
    this.keyupEvent.emit(e);
  }
}
