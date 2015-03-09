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
    $('body').append('<div id="ezLifeAutoIn-modal" style="display: hidden;"><div class="ezLifeAutoIn-modal-error"><h1>An error has occured</h1><p>' + message + '</p><button type="button" onclick="$(\'#ezLifeAutoIn-modal\').hide();" class="pure-button pure-button-primary"><span class="fa fa-close"></span> Close</button></div></div>');
    
    return this;
}

// Shows all the modals
Modal.show = function(){
    // Append the modal.css and other css to the web page
    kango.invokeAsync('kango.io.getExtensionFileContents', 'ui/css/modal.css', function(content){
        $('head').append('<link href="https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/buttons-min.css" type="text/css" rel="stylesheet" /><link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" type="text/css" rel="stylesheet" /><link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700" type="text/css" rel="stylesheet" /><style type="text/css">' + content + '</style>');
    });
    
    $('#ezLifeAutoIn-modal').show();
}

// Hides all the modals
Modal.hide = function(){
    $('#ezLifeAutoIn-modal').hide();
}