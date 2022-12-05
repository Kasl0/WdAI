import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trip } from '../../tripClass';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{

  modelForm : FormGroup;

  @Output() addTrip: EventEmitter<Trip> = new EventEmitter<Trip>();

  constructor(private formBuilder : FormBuilder) {

    this.modelForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(2)]],
      start: ['', [Validators.required, Validators.pattern("^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$")]],
      end: ['', [Validators.required, Validators.pattern("^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$")]],
      price: ['', [Validators.required, Validators.pattern("^[1-9][0-9]*$")]],
      currency: ['zł', Validators.required],
      max: ['', [Validators.required, Validators.pattern("^[1-9][0-9]*$")]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      link: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit(form: FormGroup) {

    let newTrip: Trip = new Trip(form.value.name, form.value.country, form.value.start, form.value.end,
      form.value.price, form.value.currency, form.value.max, form.value.description, form.value.link);

    this.addTrip.emit(newTrip);
  }
}
