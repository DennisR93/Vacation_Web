import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-wizard-step',
  imports: [],
  templateUrl: './wizard-step.component.html',
  styleUrl: './wizard-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardStepComponent {
  @Input() isActive = false;
  @Input() index?: number
}
