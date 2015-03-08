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
// @include http://i.ntere.st/
// @require core/jquery.js
// ==/UserScript==

// Check if the user is logged in
if($('body').hasClass('guest')) {
    // Disable AutoIn buttons in popup.html
    kango.invokeAsync('kango.storage.setItem', 'isLoggedIn', false);
} else {
    // Enable AutoIn buttons in popup.html
    kango.invokeAsync('kango.storage.setItem', 'isLoggedIn', true);
    // Save the username
    kango.invokeAsync('kango.storage.setItem', 'username', $('#navbar > div > div > ul.nav.pull-right > li.dropdown.dropdown-user > a > span.text').text());
}

// Get the action passed by the foreground scripts
kango.invokeAsync('kango.storage.getItem', 'action', function(d_action){
    kango.invokeAsync('kango.storage.getItem', 'urlForAction', function(d_urlForAction){
        kango.invokeAsync('kango.storage.getItem', 'username', function(d_username){
            // Match the current url with the url for action
            if(d_urlForAction == document.URL) {
                switch(d_action) {
                    case 'autoInAlbum':
                        // Is it really an album?
                        if(document.URL.match(/(http|https):\/\/i.ntere.st\/c\/.*/gi) != null && $('#errordoc404').length == 0) {
                            // Don't allow user to autoin its own album
                            if($('#book-header > h1 > small > a').attr('href') == '/u/' + d_username) {
                                alert('You cannot autoin your own album!');
                            } else {
                                // TODO: Display AutoIn Album modal
                            }
                        } else {
                            alert('Not an album!');
                        }
                }
            }
        });
    });
    
    // Reset the action
    kango.invokeAsync('kango.storage.setItem', 'action', 'idle');
});