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
                this.Collision_PlayerThisEvent(0.8);
                break;
            case 2:
                ev.setMoveSpeed(4);
                this.Collision_PlayerThisEvent(0.8);
                break;
            case 3:
                ev.setMoveSpeed(3);
                this.Collision_PlayerThisEvent(0.8);
                break;
            case 4:
                this._index = this._list.length;
                Ritter.unspawnEvent(this.eventId(), true);
                break;
        }
    }

    Game_Interpreter.prototype.MartyMountain_Yolo = function () {
        ev = $gameMap.event(this.eventId());
        if (ev == null)
        {
            $gameMessage.add("ERROR MartyMountain_CheckBoulderSpeed : Event could not be found.");
            return;
        }
    }