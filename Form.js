class Form{
    constructor(){
        this.input = createInput("Your name");
        this.button = createButton("Let's fight");
        this.greeting = createElement("H3");
    }
    display(){
      this.input.position(displayWidth/2 - 160, displayHeight/2 - 100);
      this.button.position(displayWidth/2 - 100, displayHeight/2 + 150);

      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 140, displayHeight/4);
      });
    }
}