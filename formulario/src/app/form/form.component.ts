import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormModule } from './form.module';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements OnInit {
  formGroup: FormGroup | undefined;
  margin_right: number = 1000;

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
      celular: new FormControl<string | null>(null),
      cep: new FormControl<string | null>(null),
    });
  }
}
