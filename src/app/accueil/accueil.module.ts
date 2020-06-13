import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccueilComponent } from './components/accueil/accueil.component';
import { AccueilContainerComponent } from './containers/accueil-container/accueil-container.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthComponent } from '../authentification/components/auth/auth.component';


@NgModule({
  declarations: [AccueilComponent, AccueilContainerComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccueilModule { }
