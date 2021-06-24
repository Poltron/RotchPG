    /*:
     * @author Etienne Champagne
     * @plugindesc Plugin for various scripts needed in BubbleWorkshop zone
     * 
     * @help
     * BubbleWorkshop zone scripts
     * 
    */

    var params = PluginManager.parameters("eti_bubbleworkshop");

    _alias_eti_bubbleworkshop = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        _alias_eti_bubbleworkshop.call(this, command, args);

        if (command === "BubbleWorkshop_InitialChoices") this.BubbleWorkshop_InitialChoices();
    }

    Game_Interpreter.prototype.BubbleWorkshop_InitialChoices = function () {
        ev = $gameMap.event(this.eventId());
        if (ev == null)
        {
            $gameMessage.add("ERROR BubbleWorkshop_InitialChoices : Event could not be found.");
            return;
        }

        choices = []; params = [];
        $gameMessage.setChoices(choices, 0)
        $choices.push("I love you1");
        $choices.push("I love you2");
        $choices.push("I love you3");
        $choices.push("I love you4");
        $params.push();
    }