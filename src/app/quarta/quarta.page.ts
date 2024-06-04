import { Component, OnInit } from '@angular/core';
import {ApiswService} from "../services/apisw.service";

@Component({
  selector: 'app-quarta',
  templateUrl: './quarta.page.html',
  styleUrls: ['./quarta.page.scss'],
})
export class QuartaPage implements OnInit {
  ANH?: any
  TESB?: any
  ROTJ?: any
  ROTS?: any
  TPM?: any
  AOTC?: any

  constructor(private apiSwService: ApiswService) { }

  ngOnInit(){
    const firstTime = localStorage.getItem('key')
    if(!firstTime){
      localStorage.setItem('key','loaded')
      location.reload()
    }else {
      localStorage.removeItem('key')
    }
    this.apiSwService.getmovie2().subscribe((item) => {
      this.ANH = item;
      console.log(item);
    })
    this.apiSwService.getmovie3().subscribe((item) => {
      this.TESB = item;
      console.log(item);
    })
    this.apiSwService.getmovie4().subscribe((item) => {
      this.ROTJ = item;
      console.log(item);
    })
    this.apiSwService.getTPM().subscribe((item) => {
      this.TPM = item;
      console.log(item);
    })
    this.apiSwService.getAOTC().subscribe((item) => {
      this.AOTC = item;
      console.log(item);
    })
    this.apiSwService.getROTS().subscribe((item) => {
      this.ROTS = item;
      console.log(item);
    })

  }
  public alertButtons = ['OK']

}
