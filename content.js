chrome.runtime.sendMessage({todo: "showPageAction"});
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     if (request.todo == "changeColor"){
//         var addColor = '#' + request.clickedColor;               
//         $('.title').css('font-style','italic');
//          $('.title').css('color', addColor);
//     }
// });


function moniterKeyEvt(evt){
    console.log(document.URL);
    if(evt.code == 'Enter' && !evt.ctrlKey ){
        //さらに、Target判断
        // console.log(evt.target.classList);
        evt.target.classList.forEach(element => {
            if(element.includes("chat_input")){
                evt.preventDefault();
                evt.stopPropagation();
            }
        });
    }
}

document.addEventListener("keydown",moniterKeyEvt,true);
document.addEventListener("keypress",moniterKeyEvt,true);