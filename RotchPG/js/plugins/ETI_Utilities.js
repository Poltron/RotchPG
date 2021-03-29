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
        if (command === "EtiUtility_ShowItemReceived")
        {
            var msg = args.slice(1).join(' ');
            this.EtiUtility_ShowItemReceived(Number(args[0]), msg);
        }
        if (command === "EtiUtility_ShowItemRemoved")
        {
            var msg = args.slice(1).join(' ');
            this.EtiUtility_ShowItemRemoved(Number(args[0]), msg);
        }
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

    Game_Interpreter.prototype.EtiUtility_ShowItemReceived = function (number, text) {
        this.clearGab();
        this.setGabText("\\C[24] +" + number + " \"" + text +"\"");
        this.showGab();
    }

    Game_Interpreter.prototype.EtiUtility_ShowItemRemoved = function (number, text) {
        this.clearGab();
        this.setGabText("\\C[2] -" + number + " \"" + text +"\"");
        this.showGab();
    }