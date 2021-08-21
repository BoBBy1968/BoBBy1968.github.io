import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';
import { ProfileComponent } from './users/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './users/user.service';
import { HomeComponent } from './core/home/home.component';
import { AllComponent } from './clients/all/all.component';
import { NewComponent } from './clients/new/new.component';
import { ClientService } from './clients/client.service';
import { EditComponent } from './clients/edit/edit.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ClaimComponent } from './clients/actions/claim/claim.component';
import { ExecutionComponent } from './clients/actions/execution/execution.component';
import { AppealComponent } from './clients/actions/appeal/appeal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    HomeComponent,
    AllComponent,
    NewComponent,
    EditComponent,
    NotFoundComponent,
    ClaimComponent,
    ExecutionComponent,
    AppealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: UserService
      // useClass: UserService
    },
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
