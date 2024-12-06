import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {RegisterComponent} from '../../../pages/register/register.component';
import {HomeComponent} from '../../../pages/home/home.component';
import {VpWizardStepComponent} from './vp-wizard-step/vp-wizard-step.component';

@Component({
  selector: 'app-vp-wizard',
  imports: [RegisterComponent, HomeComponent, VpWizardStepComponent],
  templateUrl: './vp-wizard.component.html',
  styleUrl: './vp-wizard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VpWizardComponent {
  @Input() steps:any[] = [];
  @Input() wizardTitle!: string;

  protected currentStep:number = 0;


  //TODO - Refactor to handle from inner component
  goNext() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
    }
  }

  goBack() {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }

  isLastStep() {
    return this.currentStep === this.steps.length - 1;
  }

  finish() {
    console.log('Wizard Completed!');
  }

}
