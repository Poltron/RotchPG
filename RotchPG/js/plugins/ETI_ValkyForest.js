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
       if (command === "ValkyForest_Intro_Begin") this.ValkyForest_Intro_Begin();
       if (command === "ValkyForest_Intro_Bomb") this.ValkyForest_Intro_Bomb();
       if (command === "ValkyForest_Intro_End") this.ValkyForest_Intro_End();
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
   
   Game_Interpreter.prototype.ValkyForest_Intro_Begin = function () {
       console.log("ValkyForest_Intro_Begin");
   }
   
   Game_Interpreter.prototype.ValkyForest_Intro_Bomb = function () {
       Ritter.spawnEvent(13, 2, 135, 15, true);
       Ritter.spawnEvent(13, 2, 138, 15, true);

       Ritter.spawnEvent(13, 2, 136, 16, true);
       Ritter.spawnEvent(13, 2, 137, 16, true);
       Ritter.spawnEvent(13, 2, 139, 16, true);
   
       Ritter.spawnEvent(13, 2, 135, 17, true);
       Ritter.spawnEvent(13, 2, 136, 17, true);
       Ritter.spawnEvent(13, 2, 138, 17, true);

       Ritter.spawnEvent(13, 2, 134, 18, true);
       Ritter.spawnEvent(13, 2, 136, 18, true);
       Ritter.spawnEvent(13, 2, 137, 18, true);
       Ritter.spawnEvent(13, 2, 138, 18, true);
       Ritter.spawnEvent(13, 2, 139, 18, true);

       Ritter.spawnEvent(13, 2, 135, 19, true);

       var key = [$gameMap.mapId(), 57, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 58, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 59, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 60, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 61, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 62, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 63, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 64, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 65, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 66, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 67, 'A'];
       $gameSelfSwitches.setValue(key, true);
       key = [$gameMap.mapId(), 52, 'A'];
       $gameSelfSwitches.setValue(key, true);
   }
   
   Game_Interpreter.prototype.ValkyForest_Intro_End = function () {
       // Alex
       var key = [$gameMap.mapId(), 53, 'A'];
       $gameSelfSwitches.setValue(key, true);
       // Dekro
       key = [$gameMap.mapId(), 54, 'A'];
       $gameSelfSwitches.setValue(key, true);
   }

   Game_Interpreter.prototype.ValkyForest_RotchPicture = function (eventId) {
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