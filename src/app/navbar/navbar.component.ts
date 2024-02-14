import { Component } from '@angular/core';
import { ToggleThemeComponent } from '../elements/toggle-theme/toggle-theme.component';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ToggleThemeComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
