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
        // Current url in the tab
        var currentUrl = tab.getUrl();
        
        // Check if the current tab is Anime i.ntere.st and if the user is logged in
        kango.invokeAsync('kango.storage.getItem', 'isLoggedIn', function(d_isLoggedIn){
            if(currentUrl.match(/(http|https):\/\/i.ntere.st/gi) == null || d_isLoggedIn == false) {
                $('#autoInAlbum').prop('disabled', true);
                $('#autoInNewArrivals').prop('disabled', true);
                $('#autoCreateAlbum').prop('disabled', true);
                $('#dumpImages').prop('disabled', true);
            }
        });
        
        $('#autoInAlbum').click(function(event){
            // Set the action to be AutoIn Album
            kango.invokeAsync('kango.storage.setItem', 'action', 'autoInAlbum');
            // Set the url for the action
            kango.invokeAsync('kango.storage.setItem', 'urlForAction', currentUrl);
            // Reload the current page to activate the action
            tab.navigate(currentUrl);
        });
    });
});