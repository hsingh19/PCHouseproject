import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NewsComponent } from './news/news.component';
import { NewsbarComponent } from './news/newsbar/newsbar.component';
import { NewscontentComponent } from './news/newscontent/newscontent.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    NewsComponent,
    NewsbarComponent,
    NewscontentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        component : LoginComponent
      },
      {
        path : 'register',
        component : RegistrationComponent
      },
      {
        path: 'news',
        component: NewsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
