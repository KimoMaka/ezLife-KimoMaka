/*!
 * ezLife AutoIn - The most easiest Anime i.ntere.st bot ever made
 * https://github.com/KazeFlame/ezLife-AutoIn/
 *
 * Copyright 2015 by KazeFlame and contributors
 * Released under the MIT license
 * https://github.com/KazeFlame/ezLife-AutoIn/blob/master/LICENSE
 *
 */

// @class Modal
// @uses jQuery, Kango
function Modal(){}

// Creates an error modal
// @param message
Modal.error = function(message){
    $('body').append('<div id="ezLifeAutoIn-modal" style="display: hidden;"><div class="ezLifeAutoIn-modal-error">' + message + '</div></div>');
    
    return this;
}

// Show all the modals
Modal.show = function(){
    // Append the modal.css to the web page
    kango.invokeAsync('kango.io.getExtensionFileContents', 'ui/css/modal.css', function(content){
        $('body').append('<style type="text/css">' + content + '</style>');
    });
    
    $('#ezLifeAutoIn-modal').css('display', 'block');
}