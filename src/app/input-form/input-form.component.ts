import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  imports: [],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  carForm: FormGroup = new FormGroup({
    make: new FormControl(),
    images: new FormControl([]),
  });

  fileChange(e: any) {
    const files = e.target.files;
  }

  constructor() {}
}
