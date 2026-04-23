import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  constructor(private alert: AlertController) { }
  async mostrarAlerta() {
    const alert = await this.alert.create({
      header: 'Alerta',
      message: "Nueva alerta detectada",
      buttons: ['OK']
    });
    await alert.present()
  }
}


