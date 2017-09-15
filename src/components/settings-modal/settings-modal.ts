import { Component } from '@angular/core';

/**
 * Generated class for the SettingsModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'settings-modal',
  templateUrl: 'settings-modal.html'
})
export class SettingsModalComponent {

  text: string;

  constructor() {
    console.log('Hello SettingsModalComponent Component');
    this.text = 'Hello World';
  }

}
