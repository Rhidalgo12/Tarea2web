import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ImageComponent } from '../../components/image/image.component';
import { HabComponent } from '../../components/hab/hab.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-port-home',
  imports: [CommonModule, ImageComponent, HabComponent, FormComponent],
  templateUrl: './port-home.component.html',
  styleUrl: './port-home.component.css'
})
export class PortHomeComponent {

}
