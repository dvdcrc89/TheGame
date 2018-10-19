demo.state4 = function(){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#808080";
        console.log("state4");
        enableStateChange();
    },
    update: function(){}
};