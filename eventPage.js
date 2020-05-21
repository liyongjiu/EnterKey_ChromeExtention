
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.todo == "showPageAction") {
        chrome.pageAction.show(sender.tab.id);
    }
});


// chrome.runtime.onInstalled.addListener(function(){
// 	chrome.declarativeContent.onPageChanged.removeRules(undefined, function(){
// 		chrome.declarativeContent.onPageChanged.addRules([
// 			{
// 				conditions: [
// 					// 只有打开百度才显示pageAction
// 					new chrome.declarativeContent.PageStateMatcher({pageUrl: {urlContains: 'baidu.com'}})
// 				],
// 				actions: [new chrome.declarativeContent.ShowPageAction()]
// 			}
// 		]);
// 	});
// });



