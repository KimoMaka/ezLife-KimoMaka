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

Modal.init();

if($('body').hasClass('guest')) {
    kango.storage.setItem('isLoggedIn', false);
} else {
    kango.storage.setItem('username', $('#navbar > div > div > ul.nav.pull-right > li.dropdown.dropdown-user > a > span.text').text());
    kango.storage.setItem('isLoggedIn', true);
}

var action = kango.storage.getItem('action');
var urlForAction = kango.storage.getItem('urlForAction');
var username = kango.storage.getItem('username');

if(document.URL == urlForAction) {
    switch(action) {
        case 'AutoIn Album':
            if(document.URL.match(/(http|https):\/\/i.ntere.st\/c\/.*/gi) != null && $('#errordoc404').length == 0) {
                var albumOwnerUsername = $('#book-header > h1 > small > a').attr('href').replace('/u/', '');
                
                if(albumOwnerUsername == username) {
                    Modal.error('You cannot autoin your own album. Please try again.');
                } else {
                    var totalImages = Modal.input('Enter the total number of images:', '500');
                    var doAutoDump = Modal.input('Do you want to autodump first', 'yes', true);
                    
                    $(totalImages.buttons[1].id).click(function(){
                        $(doAutoDump.id).show();
                    });
                    
                    $(doAutoDump.buttons[1].id).click(function(){
                        $('#ezLifeAutoIn-modal').hide();
                    });
                }
            } else {
                Modal.error('This is not an album. Please try again.');
            }
            break;
        case 'AutoIn New Arrivals':
            break;
        case 'Auto Create Album':
            break;
        case 'Dump Images':
            break;
    }
}

kango.storage.setItem('action', 'idle');