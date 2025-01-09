import {Validators} from '@angular/forms';
import {patterns} from '../helpers/patterns.constants';

export const RegisterFormConst = {
  controls: {
    id:'id',
    firstName:'firstName',
    lastName:'lastName',
    mobileNumber:'mobileNumber',
    email:'email',
    city:'city',
    street:'street',
    houseNumber:'houseNumber',
    password:'password',
    confirmPassword:'confirmPassword'
  },
  validators: {
    id: [Validators.required, Validators.pattern(patterns.id)],
    firstName: [Validators.required, Validators.pattern(patterns.names)],
    lastName: [Validators.required, Validators.pattern(patterns.names)],
    mobileNumber: [Validators.required, Validators.pattern(patterns.phoneNumber)],
    email: [Validators.required, Validators.pattern(patterns.email)],
    city: [Validators.required, Validators.pattern(patterns.englishCharacters)],
    street: [Validators.required, Validators.pattern(patterns.englishCharacters)],
    houseNumber: [Validators.required, Validators.pattern(patterns.houseNumber)],
    password: [Validators.required, ],
    confirmPassword: [Validators.required]
  }
}
