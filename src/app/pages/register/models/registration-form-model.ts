import {FormControl, FormGroup} from '@angular/forms';

export interface RegistrationForm {
  firstStep: FormGroup<RegistrationFirstStep>;
  secondStep: FormGroup<RegistrationSecondStep>;
}

export interface RegistrationFirstStep {
  id: FormControl<string>;
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  mobilePrefix: FormControl<string>;
  mobileNumber: FormControl<string>;
  email: FormControl<string>;
}

export interface RegistrationSecondStep {
  city: FormControl<string>;
  street: FormControl<string>;
  houseNumber: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}
