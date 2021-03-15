    /*:
     * @author Etienne Champagne
     * @plugindesc Various utility / QOL functions
     * 
     * @help
     * Global utility / QOL functions
     * 
    */

    var params = PluginManager.parameters("eti_utilities");

    _alias_eti_utilities = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _alias_eti_utilities.call(this, command, args);

        if (command === "EtiUtility_SetSelfSwitch") this.EtiUtility_SetSelfSwitch(Number(args[0]), args[1], args[2]);
    }

    Game_Interpreter.prototype.EtiUtility_SetSelfSwitch = function (eventId, character, state = false) {
        ev = $gameMap.event(eventId);
        if (ev == null)
        {
            $gameMessage.add("ERROR EtiUtility_SetSelfSwitch : Event could not be found.");
            return;
        }

        var key = [$gameMap.mapId(), eventId, character];
        $gameSelfSwitches.setValue(key, state);
    }