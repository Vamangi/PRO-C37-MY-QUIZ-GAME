class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
  
    play(){
      question.hide()
  
      background("yellow");
  
      var title = createElement('h1')
      title.html("result of the quiz");
      title.position(130, 0);
  
      Contestant.getPlayerInfo()
  
      if(allContestants!==undefined){
        var display_Answers = 160;
  
        
  
        for(var plr in allContestants){
          var correctAns = "1";
          if (correctAns === allContestants[plr].answer)
            fill("red")
          else
            fill("yellow");
  
          display_Answers+=100;
          textSize(80);
          text(allContestants[plr].name + " won " , 300,display_Answers)
        }
      }
   
      
    }
  
  }
  