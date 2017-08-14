import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private _base:string = 'https://api.adorable.io/avatars/500/';
  private _faceNumber:number;
  image:string;

  constructor(){
    setInterval(() => this.getRandomFace(),2000);
  }

  getRandomFace(){
    this._faceNumber = Math.random();
    this.image = `${this._base}${this._faceNumber}@adorable.png`;
  }

}
