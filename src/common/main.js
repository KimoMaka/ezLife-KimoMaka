/*!
 * ezLife AutoIn - The most easiest Anime i.ntere.st bot ever made
 * https://github.com/KazeFlame/ezLife-AutoIn/
 *
 * Copyright 2015 by KazeFlame and contributors
 * Released under the MIT license
 * https://github.com/KazeFlame/ezLife-AutoIn/blob/master/LICENSE
 *
 */

function ezLifeAutoIn() {
    var self = this;
    
    // Setup the popup button
    kango.ui.browserButton.setPopup({
        url: 'ui/home.html',
        width: 262,
        height: 400
    });
    
    // Actions that will be done when the button is clicked
    kango.ui.browserButton.addEventListener(kango.ui.browserButton.event.COMMAND, function(){
        self._onCommand();
    });
}

// @class ezLifeAutoIn
ezLifeAutoIn.prototype = {
    _onCommand: function(){}
};

var extension = new ezLifeAutoIn();