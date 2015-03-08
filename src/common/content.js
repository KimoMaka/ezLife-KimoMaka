/*!
 * ezLife AutoIn - The most easiest Anime i.ntere.st bot ever made
 * https://github.com/KazeFlame/ezLife-AutoIn/
 *
 * Copyright 2015 by KazeFlame and contributors
 * Released under the MIT license
 * https://github.com/KazeFlame/ezLife-AutoIn/blob/master/LICENSE
 *
 */

// ==UserScript==
// @include http://*.ntere.st/
// @require jquery.js
// ==/UserScript==

// Get the action passed by the foreground scripts
kango.invokeAsync('kango.storage.getItem', 'action', function(d_action){
    kango.invokeAsync('kango.storage.getItem', 'urlForAction', function(d_urlForAction){
        // Match the current url with the url for action
        if(d_urlForAction == document.URL) {
            switch(d_action) {
                case 'autoInAlbum':
                    $('body').html(d_urlForAction);
            }
        }
    });
    
    // Reset the action
    kango.invokeAsync('kango.storage.setItem', 'action', 'idle');
});