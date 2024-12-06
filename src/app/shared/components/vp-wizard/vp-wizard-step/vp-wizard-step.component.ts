import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {NgComponentOutlet} from '@angular/common';

@Component({
  selector: 'app-vp-wizard-step',
  imports: [NgComponentOutlet],
  templateUrl: './vp-wizard-step.component.html',
  styleUrl: './vp-wizard-step.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VpWizardStepComponent {
  @Input() stepComponent!: any;

  ngOnInit(): void {
    console.log(this.stepComponent);
  }

}
