/* Author: Mark Malin 03/2014
	* drowqubes@gmail.com  */

/* This program is free software. It comes without any warranty, to
   * the extent permitted by applicable law. You can redistribute it
   * and/or modify it under the terms of the Do What The Fuck You Want
   * To Public License (WTFPL), Version 2, as published by Sam Hocevar. See
   * http://sam.zoy.org/wtfpl/COPYING for more details. */
   
chrome.browserAction.onClicked.addListener(function(activeTab)
{
    var newURL = "http://www.youtube.com/";
    chrome.tabs.create({ url: newURL });
});