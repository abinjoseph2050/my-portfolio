import { Component } from '@angular/core';
import { CirclesComponent } from '../elements/circles/circles.component';
import { WaveComponent } from '../elements/wave/wave.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { PlusPointsComponent } from '../plus-points/plus-points.component';
import { BgParallaxComponent } from '../elements/bg-parallax/bg-parallax.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CirclesComponent, WaveComponent, NavbarComponent, PlusPointsComponent, BgParallaxComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss'
})
export class BodyComponent {

}
