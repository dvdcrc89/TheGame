demo.state9= function(){};
demo.state9.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#801010";
        console.log("state9");
        enableStateChange();
    },
    update: function(){}
};