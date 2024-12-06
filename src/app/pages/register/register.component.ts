import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {VpWizardComponent} from '../../shared/components/vp-wizard/vp-wizard.component';
import {FormGroup, NonNullableFormBuilder} from '@angular/forms';
import {RegistrationFirstStep, RegistrationForm, RegistrationSecondStep} from './models/registration-form-model';
import {RegisterFirstStepComponent} from './components/register-first-step/register-first-step.component';
import {RegisterSecondStepComponent} from './components/register-second-step/register-second-step.component';

@Component({
  selector: 'app-register',
  imports: [VpWizardComponent, RegisterFirstStepComponent, RegisterSecondStepComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {
  protected registrationSteps = [{component: RegisterFirstStepComponent}, {component: RegisterSecondStepComponent}];

  fb = inject(NonNullableFormBuilder);

  registrationForm: FormGroup = this.fb.group<RegistrationForm>({
    firstStep: this.fb.group<RegistrationFirstStep>({
      id: this.fb.control(''),
      firstName: this.fb.control(''),
      lastName: this.fb.control(''),
      mobilePrefix: this.fb.control(''),
      mobileNumber: this.fb.control(''),
      email: this.fb.control('')
    }),
    secondStep: this.fb.group<RegistrationSecondStep>({
      city:this.fb.control(''),
      street: this.fb.control(''),
      houseNumber:this.fb.control(''),
      password: this.fb.control(''),
      confirmPassword: this.fb.control('')
    })
  })
}
