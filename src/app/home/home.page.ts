import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  prod1: number = 0;
  prod2: number = 0;
  desconto: string = '0%';
  peso: string = '';
  distancia: string = '';
  ent: string = '';
  entrega: string = ''
  tipo: string = '';
  rapido: string ='1.15';
  demorado: string ='0.15';
  prazo: string ='';
  mensagem: number = 0;
  constructor(public alertController: AlertController) {}

  async exibirpreco() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Título',
      subHeader: 'Prazo de entrega:' + this.prazo,
      message: 'Total = ' + this.mensagem + ' reais',
      buttons: ['OK'],
    });
    await alert.present();
  }

  verificaSelecionado() {
    if(this.prod1 >= 5 && this.prod1 <= 9){
      this.prod2 = this.prod1 - this.prod1 * 0.15
      this.desconto = '15%'
    } else if(this.prod1 >= 10){
      this.prod2 = this.prod1 - this.prod1 * 0.20
      this.desconto = '20%'
    }
    else{
      this.prod2 = this.prod1
    }

    
if (this.entrega==='demorado'){
    this.mensagem = (parseFloat(this.peso) + parseFloat(this.distancia) *  this.prod2) - (parseFloat(this.peso) + parseFloat(this.distancia) *  this.prod2) * parseFloat(this.tipo)
    this.exibirpreco();
}else{
  this.mensagem = (parseFloat(this.peso) + parseFloat(this.distancia) *  this.prod2) * parseFloat(this.tipo)
    this.exibirpreco();
}
  }

  verpeso(valorp: any) {
    this.peso = valorp.detail.value;
  }

  verdis(valord: any) {
    this.distancia = valord.detail.value;
  }

  verent(valorent: any) {
    this.ent = valorent.detail.value;
  }

  modo(){
  if (this.entrega==='rapido'){
    this.tipo= this.rapido;
  }else{
    if(this.entrega==='demorado'){
      this.tipo= this.demorado;
    }
    else{
      this.tipo= '1' ;
    }
  }
}
}
