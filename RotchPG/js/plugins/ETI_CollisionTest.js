    /*:
     * @author Etienne Champagne
     * @plugindesc This plugin checks for collisions between moving events and Player by simple distance check.
     *  
     * @param Text Param
     * @type text
     * @default Some Text!
     * 
     * @param Number Param
     * @type number
     * @desc My Number
     * @min 0
     * @max 50
     * @decimals 5
     * 
     * @param File Param
     * @type file
     * @dir audio/bgm
     * @require 1
     * @desc Pick a song!
     * 
     * @help
     * This is
     * some help text!
    */

    var params = PluginManager.parameters("my_plugin");

    var text = params["Text Param"];
    var number = params["Number Param"];
    var file = params["File Param"];

    _alias_eti_collisiontest = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _alias_eti_collisiontest.call(this, command, args);

        if (command === "yolotest") this.yolotest(args[0], args[1], args[2]);
        if (command === "Collision_PlayerEvent") this.Collision_PlayerEvent(Number(args[0]), Number(args[1]));
    }

    Game_Interpreter.prototype.yolotest = function (arg0, arg1, arg2) {
        $gameMessage.setFaceImage('Actor1',0);
        $gameMessage.setBackground(1);
        $gameMessage.setPositionType(1);
        $gameMessage.add("Yolotest args : " + arg0 + "/" + arg1 + "/" + arg2);
    }

    Game_Interpreter.prototype.Collision_PlayerEvent = function (eventId, distance) {
        ev = $gameMap.event(eventId);
        
        if (ev != null)
        {
            pX = $gamePlayer.realX; pY = $gamePlayer.realY;
            eX = ev.realX; eY = ev.realY;

            delta = Math.abs(pX - eX) + Math.abs(pY - eY);
            if (delta <= distance)
            {
                var key = [$gameMap.mapId(), this.eventId(), 'A'];
                $gameSelfSwitches.setValue(key, true);
            }
        }
        else
        {
            $gameMessage.add("ERROR Collision_PlayerEvent : Event " + eventId + " could not be found.");
        }
    }