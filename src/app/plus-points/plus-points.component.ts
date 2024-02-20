import { Component } from '@angular/core';
import { EachPointComponent } from './each-point/each-point.component';

@Component({
  selector: 'app-plus-points',
  standalone: true,
  imports: [EachPointComponent],
  templateUrl: './plus-points.component.html',
  styleUrl: './plus-points.component.scss'
})
export class PlusPointsComponent {

}
