import {Component, OnInit} from '@angular/core';
import {ApiswService} from "../services/apisw.service";
@Component({
  selector: 'app-terciaria',
  templateUrl: './terciaria.page.html',
  styleUrls: ['./terciaria.page.scss'],
})
export class TerciariaPage implements OnInit {

  constructor() {}

  ngOnInit(){
    const firstTime = localStorage.getItem('key')
    if(!firstTime){
      localStorage.setItem('key','loaded')
      location.reload()
    }else {
      localStorage.removeItem('key')
    }
  }
  public alertButtons = ['OK']



}
