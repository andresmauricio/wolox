import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
