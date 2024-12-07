import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from '../../components/image/image.component';

@Component({
  selector: 'app-port-home',
  imports: [CommonModule, ImageComponent],
  templateUrl: './port-home.component.html',
  styleUrl: './port-home.component.css'
})
export class PortHomeComponent {

}
