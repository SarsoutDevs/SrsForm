import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent {

  constructor(private router:Router){}

  confirmed(){
    document.getElementById("dconf")!.innerHTML = `<strong class="alert alert-success">Thanks for Sharing that With Us ! </strong> ` ;
    
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2500);
  }
}
