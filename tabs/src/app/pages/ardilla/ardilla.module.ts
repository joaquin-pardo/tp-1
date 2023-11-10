import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArdillaPageRoutingModule } from './ardilla-routing.module';

import { ArdillaPage } from './ardilla.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArdillaPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [ArdillaPage]
})
export class ArdillaPageModule {}
