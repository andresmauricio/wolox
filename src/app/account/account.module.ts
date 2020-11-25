import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';


@NgModule({
  declarations: [RegisterComponent, TermsAndConditionsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
