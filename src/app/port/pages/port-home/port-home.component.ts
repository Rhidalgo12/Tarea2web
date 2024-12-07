import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from '../../components/image/image.component';
import { HabComponent } from '../../components/hab/hab.component';

@Component({
  selector: 'app-port-home',
  imports: [CommonModule, ImageComponent, HabComponent],
  templateUrl: './port-home.component.html',
  styleUrl: './port-home.component.css'
})
export class PortHomeComponent {

}
