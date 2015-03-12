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
        var currentUrl = tab.getUrl();
        var isLoggedIn = kango.storage.getItem('isLoggedIn');
        
        if(currentUrl.match(/(http|https):\/\/i.ntere.st/gi) == null || isLoggedIn == false) {
            $('#autoInAlbum').prop('disabled', true);
            $('#autoInNewArrivals').prop('disabled', true);
            $('#autoCreateAlbum').prop('disabled', true);
            $('#dumpImages').prop('disabled', true);
        }
        
        $('#autoInAlbum').click(function(event){
            kango.storage.setItem('action', 'AutoIn Album');
            kango.storage.setItem('urlForAction', currentUrl);
            tab.navigate(currentUrl);
        });
    });
});