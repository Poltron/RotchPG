    /*:
     * @author Etienne Champagne
     * @plugindesc Handles collisions between moving events and Player with distance check
     * 
     * @help
     * 
     * 
    */

    var Imported = Imported || {};
    Imported.ETI_MovingEnemies = true;
   
    var Eti = Eti || {};
    Eti.MovingEnemies = Eti.MovingEnemies || {};
    Eti.MovingEnemies.version = 1.0;
    Eti.AlreadyDead = false;

    Eti.Params = PluginManager.parameters("eti_collision");

    _alias_eti_collision = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _alias_eti_collision.call(this, command, args);

        if (command === "Collision_PlayerEvent") this.Collision_PlayerEvent(Number(args[0]), Number(args[1]));
        if (command === "Collision_PlayerThisEvent") this.Collision_PlayerEvent(Number(args[0]), Number(args[1]));
        if (command === "Collision_PlayerIsAlive") this.Collision_PlayerIsAlive();
    }

    Game_Interpreter.prototype.Collision_PlayerIsAlive = function () {
        Eti.AlreadyDead = false;
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

                if (!Eti.AlreadyDead)
                {
                    $gameTemp.reserveCommonEvent(2);
                    Eti.AlreadyDead = true;
                }
            }
        }
        else
        {
            $gameMessage.add("ERROR Collision_PlayerEvent : Event " + eventId + " could not be found.");
        }
    }

    Game_Interpreter.prototype.Collision_PlayerThisEvent = function (distance) {
        ev = $gameMap.event(this.eventId());
        
        if (ev != null)
        {
            pX = $gamePlayer.realX; pY = $gamePlayer.realY;
            eX = ev.realX; eY = ev.realY;

            delta = Math.abs(pX - eX) + Math.abs(pY - eY);
            if (delta <= distance)
            {
                var key = [$gameMap.mapId(), this.eventId(), 'A'];
                $gameSelfSwitches.setValue(key, true);

                if (!Eti.AlreadyDead)
                {
	            Ritter.unspawnAll();
                    $gameTemp.reserveCommonEvent(2);
                    Eti.AlreadyDead = true;
                }
            }
        }
        else
        {
            $gameMessage.add("ERROR Collision_PlayerEvent : Event " + eventId + " could not be found.");
        }
    }