import { Component } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  resposta: string = '';
  respostaDisplay: string = '';
  showSpinner: boolean = false;

  showResposta() {
    this.showSpinner = true;

    setTimeout(() => {
      this.respostaDisplay = this.resposta;
      this.showSpinner = false;
    }, 200)
  }

}
