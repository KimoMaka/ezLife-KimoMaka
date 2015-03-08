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