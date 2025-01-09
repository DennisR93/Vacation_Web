import {ChangeDetectionStrategy, Component, Injector, Input} from '@angular/core';
import {CommonModule, NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-vp-wizard-step',
  imports: [CommonModule],
  templateUrl: './vp-wizard-step.component.html',
  styleUrl: './vp-wizard-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VpWizardStepComponent {
  @Input() component!: any;
  @Input() data!:any;


}
