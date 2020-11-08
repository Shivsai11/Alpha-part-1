class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
           gameState = data.val();
        })
      }
      update(state){
        database.ref('/').update({
          gameState: state
        });
      }
      start(){
          if(gameState===0){
              player = new Player();
              player.getCount();
              form = new Form();
              form.display();
          }
      }
      plr1 = createSprite(displayWidth/3 - 400, 600, 20, 20);
     // plr1.addImage(p1img);
      plr2 = createSprite(displayWidth/2 + 450, 600, 20, 20);

}