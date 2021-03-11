    /*:
     * @author Etienne Champagne
     * @plugindesc Plugin for various scripts needed in ValkyForest zone
     * 
     * @help
     * ValkyForest zone scripts
     * 
    */

    var params = PluginManager.parameters("eti_valkyforest");

    _alias_eti_various = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _alias_eti_various.call(this, command, args);

        if (command === "ValkyForest_CrystalPlay") this.ValkyForest_CrystalPlay(Number(args[0]));
        if (command === "ValkyForest_CrystalSpriteSwitch") this.ValkyForest_CrystalSpriteSwitch(Number(args[0]), args[1]);
        if (command === "ValkyForest_CrystalCompletionCheck") this .ValkyForest_CrystalCompletionCheck(Number(args[0]));
    }

    Game_Interpreter.prototype.ValkyForest_CrystalSpriteSwitch = function (eventId, state) {
        ev = $gameMap.event(eventId);
        if (ev == null)
        {
            $gameMessage.add("ERROR ValkyForest_CrystalSpriteSwitch : Event " + eventId + " could not be found.");
            return;
        }

        itemId = this.getSelfVariableValue($gameMap.mapId(), eventId, 003);

        if (state == "false")
        {
            var key = [$gameMap.mapId(), eventId, 'B'];
            $gameSelfSwitches.setValue(key, false);

            var key = [$gameMap.mapId(), eventId, 'C'];
            $gameSelfSwitches.setValue(key, false);
        }
        else
        {
            if (itemId != 0)
            {
                var key = [$gameMap.mapId(), eventId, 'B'];
                $gameSelfSwitches.setValue(key, true);
            }
            else
            {
                var key = [$gameMap.mapId(), eventId, 'C'];
                $gameSelfSwitches.setValue(key, true);
            }

        }
    }
    
    Game_Interpreter.prototype.ValkyForest_CrystalPlay = function (eventId) {
        ev = $gameMap.event(eventId);
        if (ev == null)
        {
            $gameMessage.add("ERROR ValkyForest_CrystalPlay : Event " + eventId + " could not be found.");
            return;
        }

        itemId = this.getSelfVariableValue($gameMap.mapId(), eventId, 003);
        switch(itemId)
        {
            case 8:
                AudioManager.playSe( { name: "ETI_Jai", volume: 500, pitch: 100, pan: 0 } );
                if (eventId == 1 || eventId == 5)
                {
                    $gameVariables.setValue(4, $gameVariables.value(4) + 1);
                }
            break;
            case 9:
                AudioManager.playSe( { name: "ETI_Rai", volume: 500, pitch: 100, pan: 0 } );
                if (eventId == 2)
                {
                    $gameVariables.setValue(4, $gameVariables.value(4) + 1);
                }
            break;
            case 10:
                AudioManager.playSe( { name: "ETI_Mi", volume: 500, pitch: 100, pan: 0 } );
                if (eventId == 3)
                {
                    $gameVariables.setValue(4, $gameVariables.value(4) + 1);
                }
            break;
            case 11:
                AudioManager.playSe( { name: "ETI_Rau", volume: 500, pitch: 100, pan: 0 } );
                if (eventId == 4)
                {
                    $gameVariables.setValue(4, $gameVariables.value(4) + 1);
                }
            break;
            default:
                AudioManager.playSe( { name: "ETI_CrystalBlip", volume: 500, pitch: 100, pan: 0 } );
            break;
        }
    }
    
    Game_Interpreter.prototype.ValkyForest_CrystalCompletionCheck = function (eventId) {
        ev = $gameMap.event(eventId);
        if (ev == null)
        {
            $gameMessage.add("ERROR ValkyForest_CrystalCompletionCheck : Event " + eventId + " could not be found.");
            return;
        }

        if ($gameVariables.value(4) == 5)
        {
            var key = [$gameMap.mapId(), eventId, 'A'];
            $gameSelfSwitches.setValue(key, true);
        }
    }