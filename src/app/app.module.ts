import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { BodyComponent } from './layouts/body/body.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { StoreModule } from '@ngrx/store';
import { storeReducer } from './store/reducer/store.reducer';
import { SearchBarComponent } from './components/home/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/home/search-results/search-results.component';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from './components/search-results/user-info/user-info.component';
import { UserReposComponent } from './components/search-results/user-repos/user-repos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    AboutComponent,
    SearchBarComponent,
    SearchResultsComponent,
    UserInfoComponent,
    UserReposComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ store: storeReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
