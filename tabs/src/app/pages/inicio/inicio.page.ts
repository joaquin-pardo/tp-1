import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  items: Menu[]=[{icon:"happy-outline",titulo:"gato",path:"gato",},
    ];

  constructor() { }

  ngOnInit() {
  }

}
