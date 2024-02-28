import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './z-root/app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MarketplaceComponent } from './components/marketplace/marketplace.component';
import { ReportComponent } from './components/report/report.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { EventsComponent } from './components/events/events.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatbotComponent } from './components/shared/chatbot/chatbot.component';
import { Base64ToImagePipe } from './pipe/base64-to-image.pipe';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MarketplaceComponent,
    ReportComponent,
    FooterComponent,
    EventsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ChatbotComponent,
    Base64ToImagePipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
