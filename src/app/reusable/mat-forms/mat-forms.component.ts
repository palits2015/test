import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mat-forms',
  templateUrl: './mat-forms.component.html',
  styleUrls: ['./mat-forms.component.scss']
})
export class MatFormsComponent implements OnInit {
@Input() parentForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}
