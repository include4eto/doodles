//Main renderer
Cc.renderer = (function () {
    var _state,
        _game,
        _states = {
            menu: "menu",
            
        };
    
    function _render () {
        
    };
    
    function _bind (game) {
        if (!game)
            throw "Invalid bind";
        
        _game = game;
    }
    
    return {
        states: {
            
        }
    }; 
});
