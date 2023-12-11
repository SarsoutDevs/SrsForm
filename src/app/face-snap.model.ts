export class FaceSnap{
    constructor(public title: String,
        public description : String,
        public imageUrl: String,
        public createDate: Date,
        public snaps: number,
        public buttonText:String) {
  
        }
  
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