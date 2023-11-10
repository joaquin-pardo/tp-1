import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [HeaderComponent,FooterComponent,MenuComponent],
  exports:[HeaderComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
