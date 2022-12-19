import { Component, Input, OnInit } from '@angular/core';
import { Mascota } from 'src/app/modelos/mascota';

@Component({
  selector: 'app-detalle-mascota',
  templateUrl: './detalle-mascota.component.html',
  styleUrls: ['./detalle-mascota.component.css']
})
export class DetalleMascotaComponent implements OnInit {
  @Input() mascota?: Mascota;

  constructor() { }

  ngOnInit(): void {
  }

}
