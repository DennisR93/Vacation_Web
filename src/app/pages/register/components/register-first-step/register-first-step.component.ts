import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {RegistrationFirstStep} from '../../models/registration-form-model';
import {RegisterFormConst} from '../../../../core/consts/registration-consts';

@Component({
  selector: 'app-register-first-step',
  imports: [ReactiveFormsModule],
  templateUrl: './register-first-step.component.html',
  styleUrl: './register-first-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterFirstStepComponent {
  @Input() formStep!: FormGroup<RegistrationFirstStep>;
  formConst = RegisterFormConst;

}
