import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  protected scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
