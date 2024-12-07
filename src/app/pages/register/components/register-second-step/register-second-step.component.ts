import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RegistrationSecondStep} from '../../models/registration-form-model';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-register-second-step',
  imports: [ReactiveFormsModule],
  templateUrl: './register-second-step.component.html',
  styleUrl: './register-second-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterSecondStepComponent {
  @Input() formStep!: FormGroup<RegistrationSecondStep>

}
