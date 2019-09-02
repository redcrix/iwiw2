import { Component } from '@angular/core';

/**
 * Generated class for the IconsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'icons',
  templateUrl: 'icons.html'
})
export class IconsComponent {

  text: string;

  constructor() {
    console.log('Hello IconsComponent Component');
    this.text = 'Hello World';
  }

}
