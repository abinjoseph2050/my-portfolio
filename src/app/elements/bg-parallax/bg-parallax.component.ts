import { Component, OnInit, HostListener } from '@angular/core';


@Component({
  selector: 'app-bg-parallax',
  standalone: true,
  imports: [],
  templateUrl: './bg-parallax.component.html',
  styleUrl: './bg-parallax.component.scss'
})
export class BgParallaxComponent {
  @HostListener("document:mousemove", ["$event"])
  parallax(event: MouseEvent) {
    document.querySelectorAll('.layer').forEach((layer: any) => {
      const speed = parseFloat(layer.getAttribute('data-speed') || '1');
      const x = (window.innerWidth - event.pageX * speed) / 100;
      const y = (window.innerHeight - event.pageY * speed) / 100;

      layer['style'].transform = `translateX(${x}px) translateY(${y}px)`;
    });
  }
}
