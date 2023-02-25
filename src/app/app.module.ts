import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PostitComponent } from './components/postit/postit.component';
import { PostitsComponent } from './components/postits/postits.component';

@NgModule({
  declarations: [
    AppComponent,
    PostitComponent,
    PostitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
