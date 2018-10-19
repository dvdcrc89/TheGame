demo.state8 = function(){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#000000";
        console.log("state8");
        enableStateChange();
    },
    update: function(){}
};