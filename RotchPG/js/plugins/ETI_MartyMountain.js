    /*:
     * @author Etienne Champagne
     * @plugindesc Plugin for various scripts needed in MartyMountain zone
     * 
     * @help
     * MartyMountain zone scripts
     * 
    */

    var params = PluginManager.parameters("eti_martymountain");

    _alias_eti_martymountain = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _alias_eti_martymountain.call(this, command, args);

        if (command === "MartyMountain_CheckBoulderSpeed") this.MartyMountain_CheckBoulderSpeed();
        if (command === "MartyMountain_Yolo") this.MartyMountain_Yolo();
    }

    Game_Interpreter.prototype.MartyMountain_CheckBoulderSpeed = function () {
        ev = $gameMap.event(this.eventId());
        if (ev == null)
        {
            $gameMessage.add("ERROR MartyMountain_CheckBoulderSpeed : Event could not be found.");
            return;
        }

        switch (ev.regionId())
        {
            case 1:
                ev.setMoveSpeed(6);
                break;
            case 2:
                ev.setMoveSpeed(4);
                break;
            case 3:
                ev.setMoveSpeed(3);
                break;
            case 4:
                var key = [$gameMap.mapId(), this.eventId(), 'B'];
                $gameSelfSwitches.setValue(key, true);
                Ritter.unspawnEvent(this.eventId(), true);
                //Yanfly.DespawnEventID(this.eventId());
                break;
        }

        this.Collision_PlayerThisEvent(0.8);
    }

    Game_Interpreter.prototype.MartyMountain_Yolo = function () {
        Ritter.spawnEvent(13, 1, 24, 75, false);
    }