import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

  currStep: number = 1;

  addStep(event: boolean): void {
    if(event) this.currStep = this.currStep + 1;
    else this.currStep = this.currStep - 1;
  }

  resetStep(event: boolean): void {
    this.currStep = 1;
  }
}
