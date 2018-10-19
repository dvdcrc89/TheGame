demo.state7 = function(){};
demo.state7.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#606020";
        console.log("state7");
        enableStateChange();
    },
    update: function(){}
};