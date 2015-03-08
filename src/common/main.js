/*!
 * ezLife AutoIn - The most easiest Anime i.ntere.st bot ever made
 * https://github.com/KimoMaka/ezLife-KimoMaka/
 *
 * Copyright 2015 by KimoMaka
 *
 */

// @class ezLifeAutoIn
// @uses Kango
function ezLifeAutoIn(){
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

ezLifeAutoIn.prototype = {
    _onCommand: function(){}
};

var extension = new ezLifeAutoIn();