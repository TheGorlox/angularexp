import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    CoursesService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
