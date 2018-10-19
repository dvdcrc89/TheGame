demo.state5 = function(){};
demo.state5.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = "#ffff80";
        console.log("state5");
        enableStateChange();
    },
    update: function(){}
};