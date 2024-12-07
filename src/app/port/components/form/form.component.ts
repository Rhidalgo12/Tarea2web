import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'port-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  mensajeCreado = "";
  ngOnInit(): void {
    this.OnSubmit();
  }

  async OnSubmit() {
    this.mensajeCreado = "Enviado!";
  }

}
