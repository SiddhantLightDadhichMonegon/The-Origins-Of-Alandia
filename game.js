class Game{
    constructor(){
        this.name = createInput("Name:");
        this.radio = createRadio('h3');
        this.radio.option = "Shekolot";
        this.radio.option = "Kooki";
        this.submit = createButton("Submit");
        this.name.position(displayWidth/2,displayHeight/2);
        
        this.submit.position(displayWidth/2+100,displayHeight/2+100);
    }

    serve(){
        if(gameState === 0){
            player.sprite.velocityX = 0;
            this.radio.position(displayWidth/2+250,displayHeight/2+250);
           
            this.submit.mousePressed(()=>{
                gameState = 1;
                player.sprite.velocityX = 5;
                player.playerName = this.name.value();
                player.playerCharacter = this.radio.value();

            })
        }
    }

    // play(){
    //     this.name.hide();
    //     this.radio.hide();
    //     this.submit.hide();
    //     drawSprites();
    // }
}