/*!
 * ezLife AutoIn - The most easiest Anime i.ntere.st bot ever made
 * https://github.com/KazeFlame/ezLife-AutoIn/
 *
 * Copyright 2015 by KazeFlame and contributors
 * Released under the MIT license
 * https://github.com/KazeFlame/ezLife-AutoIn/blob/master/LICENSE
 *
 */

KangoAPI.onReady(function(){
    kango.browser.tabs.getCurrent(function(tab){
        // Get the url in the tab
        var currentUrl = tab.getUrl();
        // Tells if the user is logged in to Anime i.ntere.st
        var isLoggedIn = kango.storage.getItem('isLoggedIn');
        
        // Check if the current url is in Anime i.ntere.st or is the user logged in
        if(currentUrl.match(/(http|https):\/\/i.ntere.st/gi) == null || isLoggedIn == false) {
            $('#autoInAlbum').prop('disabled', true);
            $('#autoInNewArrivals').prop('disabled', true);
            $('#autoCreateAlbum').prop('disabled', true);
            $('#dumpImages').prop('disabled', true);
        }
        
        // Add functionality to AutoIn Album button
        $('#autoInAlbum').click(function(event){
            // Set the action to be AutoIn Album
            kango.storage.setItem('action', 'AutoIn Album');
            // Set the url for the action
            kango.storage.setItem('urlForAction', currentUrl);
            // Reload the current page to activate the action
            tab.navigate(currentUrl);
        });
    });
});