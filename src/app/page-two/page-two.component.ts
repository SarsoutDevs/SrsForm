import { Component,Input } from '@angular/core';
import { FaceSnap } from '../face-snap.model';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent {
  @Input() faceSnap!:FaceSnap ;
  
  faceSnaps !:FaceSnap[];
  
  constructor(){
  this.faceSnaps = [
    {
      title : "Archibald" ,
      description : "Mon meilleur ami depuis tout petit !" ,
      imageUrl:"https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg" ,
      createDate : new Date() ,
      snaps :0,
      buttonText : "Oh Snap !"  ,

      onSnap(){
        if(this.buttonText === "Oh Snap !"){
          this.snaps++ ;
          this.buttonText = "Oops, Un Snap !" ;
        }
        else{
          this.snaps-- ;
          this.buttonText = "Oh Snap !" ;
        }
      }
    }
    ,
    {
      title :"three rock montain " ,
      description : "endroit magnifique" ,
      imageUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/420px-Three_Rock_Mountain_Southern_Tor.jpg" ,
      createDate : new Date() ,
      snaps:0,
      buttonText : "Oh Snap !"  ,

      onSnap(){
        if(this.buttonText === "Oh Snap !"){
          this.snaps++ ;
          this.buttonText = "Oops, Un Snap !" ;
        }
        else{
          this.snaps-- ;
          this.buttonText = "Oh Snap !" ;
        }
      } 
    }
    ,
    {
      title:"un bon pays" ,
      description : "yumm c bon" ,
      imageUrl : "https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg" ,
      createDate : new Date() ,
      snaps:0,
      buttonText : "Oh Snap !"  ,
      
      onSnap(){
        if(this.buttonText === "Oh Snap !"){
          this.snaps++ ;
          this.buttonText = "Oops, Un Snap !" ;
        }
        else{
          this.snaps-- ;
          this.buttonText = "Oh Snap !" ;
        }
      } 

    }

  ];

}
}