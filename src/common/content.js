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
// @require core/modal.js
// ==/UserScript==

// Check if the user has logged in
if($('body').hasClass('guest')) {
    // Disable the AutoIn buttons
    kango.storage.setItem('isLoggedIn', false);
} else {
    // Enable the AutoIn buttons
    kango.storage.setItem('isLoggedIn', true);
    // Set the username
    kango.storage.setItem('username', $('#navbar > div > div > ul.nav.pull-right > li.dropdown.dropdown-user > a > span.text').text());
}

// Get the action
var action = kango.storage.getItem('action');
// Get the url for action
var urlForAction = kango.storage.getItem('urlForAction');
// Get the username
var username = kango.storage.getItem('username');

// Check if the url in the tab is the url to trigger the action
if(document.URL == urlForAction) {
    switch(action) {
        case 'AutoIn Album':
            // Check if it's really an album
            if(document.URL.match(/(http|https):\/\/i.ntere.st\/c\/.*/gi) != null && $('#errordoc404').length == 0) {
                // Get the username of the album's owner
                var albumOwnerUsername = $('#book-header > h1 > small > a').attr('href').replace('/u/', '');
                
                // Don't allow the user to autoin its own album
                if(albumOwnerUsername == username) {
                    Modal.error('You cannot autoin your own album. Please try again.').show();
                } else {
                    // TODO: continue the AutoIn Album
                }
            } else {
                Modal.error('This is not an album. Please try again.').show();
            }
            break;
    }
}

// Reset the action
kango.storage.setItem('action', 'idle');