import {Type} from '@angular/core';

class ComponentClass {
  constructor(component: Type<any>) {
  }
}

export class ChartDataComponent {
  constructor(public component: Type<any>, public data: any, public  setting: any, public key: any) {
  }

  // constructor(component: Type<any>, public data: any) {}

}
