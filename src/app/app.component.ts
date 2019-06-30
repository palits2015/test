import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  baseUrl = 'https://jsonplaceholder.typicode.com';
  data;
  txtValue = 0;

  form: FormGroup;
  constructor( private httpClient: HttpClient,
               private fb: FormBuilder
    ) {
    this.getUsers();
    this.form = this.fb.group({
      lastname: null,
      middlename: null,
      firstname: null
    });
  }

  getUsers() {
    this.httpClient.get(this.baseUrl + '/posts').subscribe((res) => {
        this.data = res[0].title;
        console.log(this.data);
    });
  }

  save(){
    console.log(this.form.value);
  }

  valueChanged(e) {
    console.log('valueChanged:', e.target.value);
  }

  keyupChanged(e) {
    this.txtValue = e.target.value;
    console.log('keyupChanged:', e.target.value);
  }

}
