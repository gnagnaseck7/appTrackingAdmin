import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/components/navbar/navbar.component';
import { NavbarGenericComponent } from './layout/components/navbar/navbar-generic/navbar-generic.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [NavbarComponent,
    NavbarGenericComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports: [CommonModule,
    NavbarComponent,
    NavbarGenericComponent
   ],
 entryComponents: [NavbarGenericComponent],
})
export class SharedModule { }
