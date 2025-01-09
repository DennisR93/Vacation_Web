import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {SkipLinkComponent} from '../../../shared/components/skip-link/skip-link.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, SkipLinkComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

}
