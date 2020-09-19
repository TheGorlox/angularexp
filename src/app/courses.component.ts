
import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // <courses> courses can extend html dictionary
    template: `<h2>{{ title }}<h2>
    <ul>
        <li *ngFor="let course of weather">
            {{course}}
        </li>
    </ul>
    
    `
})

export class CoursesComponent{
    title = "List of courses";
    weather;

    constructor(service: CoursesService){
        this.weather = service.getCourses();
    }
}