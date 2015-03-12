/*!
 * ezLife AutoIn - The most easiest Anime i.ntere.st bot ever made
 * https://github.com/KazeFlame/ezLife-AutoIn/
 *
 * Copyright 2015 by KazeFlame and contributors
 * Released under the MIT license
 * https://github.com/KazeFlame/ezLife-AutoIn/blob/master/LICENSE
 *
 */

function Modal(){}

Modal.init = function(){
    kango.invokeAsync('kango.io.getExtensionFileContents', 'ui/css/modal.css', function(content){
        $('head').append(
            '<link href="https://cdnjs.cloudflare.com/ajax/libs/pure/0.6.0/buttons-min.css" type="text/css" rel="stylesheet" /><link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" type="text/css" rel="stylesheet" /><link href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700" type="text/css" rel="stylesheet" /><style type="text/css">' + content + '</style>'
        );
    });
}

Modal.newModal = function(settings){
    var thisModal = {};
    var modalId = Math.random().toString(36).substring(7);
    var modalClass = settings.class;
    var modalHeader = settings.header;
    var modalBody = settings.body;
    var modalButtons = settings.buttons;
    
    thisModal.id = '#' + modalId;
    thisModal.class = '.' + modalClass;
    thisModal.buttons = new Array();
    
    if($('#ezLifeAutoIn-modal').is(':visible') == false) {
        $('body').append('<div id="ezLifeAutoIn-modal"></div>');
    }
    
    $('#ezLifeAutoIn-modal').append(
        '<div id="' + modalId + '" class="' + modalClass + '"><h1>' + modalHeader + '</h1>' + modalBody + '<div class="buttons"></div></div>'
    );
    
    for(i = 0; i < modalButtons.length; i++) {
        var buttonId = Math.random().toString(36).substring(7);
        var buttonClass = modalButtons[i][0].class;
        var buttonText = modalButtons[i][0].text;
        
        $('#' + modalId + ' > .buttons').append('<button type="button" id="' + buttonId + '" class="' + buttonClass + '">' + buttonText + '</button>');
        
        thisModal.buttons.push({'id': '#' + buttonId});
    }
    
    return thisModal;
}

Modal.error = function(message){
    var modal = Modal.newModal({
        'class': 'error',
        'header': 'An error occured',
        'body': '<p>' + message + '</p>',
        'buttons': [
            [
                {
                    'class': 'pure-button pure-button-primary',
                    'text': '<span class="fa fa-close"></span> Close'
                }
            ]
        ]
    });
    
    $(modal.buttons[0].id).click(function(){
        $(modal.id).hide();
        $('#ezLifeAutoIn-modal').hide();
    });
    
    return modal;
}

Modal.input = function(message, defaultValue, hidden){
    var inputId = Math.random().toString(36).substring(7);
    var modal = Modal.newModal({
        'class': 'input',
        'header': 'Input Modal',
        'body': '<p>' + message + '</p><input type="text" id="' + inputId + '" value="' + defaultValue + '" />',
        'buttons': [
            [
                {
                    'class': 'pure-button',
                    'text': '<span class="fa fa-close"></span> Close'
                }
            ],
            [
                {
                    'class': 'pure-button pure-button-primary',
                    'text': '<span class="fa fa-arrow-circle-right"></span> Submit'
                }
            ]
        ]
    });
    
    if(hidden) {
        $(modal.id).hide();
    }
    
    $(modal.buttons[0].id).click(function(){
        $(modal.id).hide();
        $('#ezLifeAutoIn-modal').hide();
    });
    
    $(modal.buttons[1].id).click(function(){
        $(modal.id).hide();
    });
    
    modal.input = {'id': '#' + inputId};
    
    return modal;
}