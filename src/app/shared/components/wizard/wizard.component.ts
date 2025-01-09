import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  QueryList,
  ViewChildren
} from '@angular/core';
import {WizardStepComponent} from './wizard-step/wizard-step.component';

@Component({
  selector: 'app-wizard',
  imports: [WizardStepComponent],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WizardComponent implements AfterViewInit {
  cdr = inject(ChangeDetectorRef);
  @ViewChildren(WizardStepComponent) steps!: QueryList<WizardStepComponent>;
  currentStepIndex = 0;


  ngAfterViewInit() {
    console.log(this.steps);
    if (this.steps.length > 0) {
      this.initializeSteps();
    } else {
      console.error('No steps found in WizardComponent!');
    }
  }

  initializeSteps() {
    this.updateActiveSteps();
    this.cdr.detectChanges(); // Force view update for OnPush
  }

  updateActiveSteps() {
    this.steps.forEach((step, index) => {
      step.isActive = index === this.currentStepIndex;
    });
    this.cdr.detectChanges(); // Ensure UI reflects changes
  }

  goNext() {
    if (this.currentStepIndex < this.steps.length - 1) {
      this.currentStepIndex++;
      this.updateActiveSteps();
    }
  }

  goBack() {
    if (this.currentStepIndex > 0) {
      this.currentStepIndex--;
      this.updateActiveSteps();
    }
  }
}
