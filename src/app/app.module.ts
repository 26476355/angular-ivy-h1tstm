import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { TempComponent } from './templist.component';


@NgModule({
    imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: TempComponent },
    ])
  ] ,
  declarations: [
    AppComponent,
    TempComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}