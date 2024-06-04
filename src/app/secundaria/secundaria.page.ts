import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-secundaria',
  templateUrl: './secundaria.page.html',
  styleUrls: ['./secundaria.page.scss'],
})

export class SecundariaPage implements OnInit{
  retornoapi?: any
  valorSelecionado: string = ""
  constructor(private http: HttpClient, private toastController: ToastController) { }
  ngOnInit(){
    const firstTime = localStorage.getItem('key')
    if(!firstTime){
      localStorage.setItem('key','loaded')
      location.reload()
    }else {
      localStorage.removeItem('key')
    }
  }

  async pedidoApi() {
    // @ts-ignore
    let valorapi1 = this.valorSelecionado;
    // @ts-ignore
    let valorapi2 = (document.getElementById("dados-api2").value) as HTMLElement;

    this.http.get(`https://swapi.dev/api/${valorapi1}/${valorapi2}/`).subscribe((item) => {
      this.retornoapi = item;
      console.log(item);
    })
    // @ts-ignore
    if (document.querySelector("#dados-api2").value == "") {
      const toast = await this.toastController.create({
        message: "Prrencha o campo Número!",
        duration: 2000,
        position: 'top',
        mode: 'ios'
      })
      await toast.present();
    }

  }
}
