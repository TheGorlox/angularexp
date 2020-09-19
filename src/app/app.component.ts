import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = `https://api.openweathermap.org/data/2.5/weather?lat=38.9239&lon=-92.306&units=imperial&appid=4cc55dc72657fa3d70484c45e88bc13f`;
  weatherItems:string;
  weatherimg:string;
  desc:string;
  time:string;
  jsonstuff:any;
  constructor(private http: HttpClient){
    // angular httprequest code from:
    // https://www.youtube.com/watch?v=SYBzE68Ee-g
    this.http.get(this.url).toPromise().then(data=>{
      console.log(data);
      this.jsonstuff = data

      this.weatherItems=this.jsonstuff.main.temp;
      this.weatherimg="https://openweathermap.org/img/w/" + this.jsonstuff.weather[0].icon + ".png";
      this.desc=this.jsonstuff.weather[0].main;
      let d = new Date();
      this.time =d.toLocaleTimeString();
    });
  }
}
