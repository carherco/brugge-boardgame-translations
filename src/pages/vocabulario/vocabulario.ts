import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Definicion } from '../../app/modelo/Definicion';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { VOCABULARIO } from '../../app/datos/vocabulario';

/**
 * Generated class for the VocabularioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vocabulario',
  templateUrl: 'vocabulario.html',
})
export class VocabularioPage {

  definiciones: Definicion[];
  definicionesFiltradas: Definicion[];
  searchvalue: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.definiciones = VOCABULARIO;
    this.definicionesFiltradas = VOCABULARIO;
    this.ordenar('texto');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VocabularioPage');
  }

  limpiar() {
    this.searchvalue = '';
    this.definicionesFiltradas = this.definiciones;
  }

  ordenar(propiedad: string) {

    this.definiciones.sort(function(a, b) {
      const normalizedA = a[propiedad].toUpperCase();
      const normalizedB = b[propiedad].toUpperCase();

      if (normalizedA < normalizedB) {
        return -1;
      }
      if (normalizedA > normalizedB) {
        return 1;
      }

      return 0;
    });
  }

  filterItems(ev) {
    this.filtrar(ev.target.value);
  }

  filtrar(value: string) {
    if(value) {
      this.searchvalue = value;
      this.definicionesFiltradas = this.definiciones.filter(function (el) {
        console.log(el.texto,value);
        return el.texto.toUpperCase().search(value.toUpperCase()) >= 0;
      });
    }


  }

}
