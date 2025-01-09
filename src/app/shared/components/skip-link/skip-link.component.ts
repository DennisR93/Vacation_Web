import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  imports: [],
  templateUrl: './skip-link.component.html',
  styleUrl: './skip-link.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkipLinkComponent {

  skipToContent() {
    let h1Element = document.querySelector('h1');
    if(!!h1Element){
      h1Element.setAttribute('tabindex','-1');
      h1Element.focus();
    }
  }

}
