import { Component } from '@angular/core';
import { CirclesComponent } from '../elements/circles/circles.component';
import { WaveComponent } from '../elements/wave/wave.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CirclesComponent, WaveComponent, NavbarComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
