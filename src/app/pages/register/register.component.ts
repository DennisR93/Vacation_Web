import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {FormGroup, NonNullableFormBuilder} from '@angular/forms';
import {RegistrationFirstStep, RegistrationForm, RegistrationSecondStep} from './models/registration-form-model';
import {RegisterFirstStepComponent} from './components/register-first-step/register-first-step.component';
import {RegisterSecondStepComponent} from './components/register-second-step/register-second-step.component';
import {VpWizardComponent} from '../../shared/components/vp-wizard/vp-wizard.component';
import {RegisterFormConst} from '../../core/consts/registration-consts';

@Component({
  selector: 'app-register',
  imports: [RegisterFirstStepComponent, RegisterSecondStepComponent, VpWizardComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent {

  get firstStepFormGroup(): FormGroup<RegistrationFirstStep> {
    return this.registrationForm.get('firstStep') as FormGroup<RegistrationFirstStep>;
  }

  get secondStepFormGroup(): FormGroup<RegistrationSecondStep> {
    return this.registrationForm.get('secondStep') as FormGroup<RegistrationSecondStep>;
  }

  private fb = inject(NonNullableFormBuilder);

  registrationForm = this.fb.group<RegistrationForm>({
      firstStep: this.fb.group<RegistrationFirstStep>({
        id: this.fb.control('', RegisterFormConst.validators.id),
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
    });

  steps = [
    { component: RegisterFirstStepComponent, data: { formStep: this.firstStepFormGroup } },
    { component: RegisterSecondStepComponent, data: { formStep: this.secondStepFormGroup } },
  ];
}
