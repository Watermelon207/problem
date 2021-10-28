class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionX = 0;
    this.positionY = 0;
  }
  addPlayer(){
    var playerIndex="players/player"+this.index
    if(this.index==1){
      this.positionX=width/2-100;
    }else{
      this.positionX=widht/2+100;
    }
    database.ref(playerIndex).set({

      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY,

    })
  }
  getDistance(){
    var playerDistanceRef = database.ref("players/players"+this.index);
    playerDistanceRef.on("value",data=>{
      var data=data.val()
      this.positionX=data.positionX
      this.positionY=data.positionY
      
    })
  }
  getCount(){
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", function(data) {
      playerCount = data.val();
    });
  }
  update(count) {
    database.ref("/").update({
      playerCount:count
    });
  }
 }

