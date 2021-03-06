import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from 'ionic-angular';
import {SettingsModalComponent} from '../../components/settings-modal/settings-modal';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  openModal(){
    let modal = this.modalCtrl.create( SettingsModalComponent )
    modal.present();
  }
}
