demo.state3 = function(){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#32ff80";
        console.log("state3");
        enableStateChange();
    },
    update: function(){}
};