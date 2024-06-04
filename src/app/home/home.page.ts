import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  showPassword: boolean = false;
  constructor(
    private router:Router,
    private toastController:ToastController,
  ) {}
  async irSec() {
    let input1: HTMLInputElement = document.getElementById('input1') as HTMLInputElement;
    let input2: HTMLInputElement = document.getElementById('input2') as HTMLInputElement;

    if (input1.value == "admin" && input2.value == "admin") {
      await this.router.navigate(['secundaria'])
      // @ts-ignore
    } else {
      const toast = await this.toastController.create({
        message: "Senha e/ou ID incorreto(s)!",
        duration: 2000,
        position: 'top',
        mode: 'ios',
        animated: true,
      });
      await toast.present();
    }

  }

}

