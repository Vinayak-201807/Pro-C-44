class Game {
  constructor() {}

  readgameState() {
    var ref = database.ref("gameState");
    ref.on("value", function (data) {
      gameState = data.val();
    });
  }

  writegameState(x) {
    database.ref("/").update({
      gameState: x,
    });
  }

  startTheGame() {
    player.readAllPlayers();
    form.greeting.hide();
    form.inputBox.hide();
    form.button.hide();
    form.heading.hide();

    var h = 200,i=0;
    image(tImg,0,-)
    for(var plr in allPlayers) {
       cArray[i].x = h;
       h = h + 300;
       cArray[i].y = displayHeight - allPlayers[plr].distance;
       i = i + 1;
    }
    drawSprites();
  }
}
