import {ChangeDetectionStrategy, Component, Input, input} from '@angular/core';
import {VpWizardStepComponent} from './vp-wizard-step/vp-wizard-step.component';

@Component({
  selector: 'app-vp-wizard',
  imports: [VpWizardStepComponent],
  templateUrl: './vp-wizard.component.html',
  styleUrl: './vp-wizard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VpWizardComponent {
  steps = input<any>([]);
  containerTitle = input<string>('');

  protected currentStep:number = 0;


  //TODO - Refactor to handle from inner component
  goNext() {
    console.log(this.steps().length);
    console.log('Next button clicked. Current step before:', this.currentStep);
    if (this.currentStep < this.steps().length - 1) {
      this.currentStep++;
      console.log('Moved to next step. Current step after:', this.currentStep);
    }
  }


  goBack() {
    console.log('Back button clicked. Current step before:', this.currentStep);
    if (this.currentStep > 0) {
      this.currentStep--;
      console.log('Moved to previous step. Current step after:', this.currentStep);
    }
  }

  isLastStep() {
    return this.currentStep === this.steps.length - 1;
  }

  finish() {
    console.log('Wizard Completed!');
  }

}
