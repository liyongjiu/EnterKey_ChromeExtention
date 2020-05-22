chrome.runtime.sendMessage({todo: "showPageAction"});
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
//     if (request.todo == "changeColor"){
//         var addColor = '#' + request.clickedColor;               
//         $('.title').css('font-style','italic');
//          $('.title').css('color', addColor);
//     }
// });


function moniterKeyEvt(evt){
    //Enterkeyである　Ctr、Shift押してない　IMEに打ったものではない
    if(evt.code == 'Enter' && !evt.ctrlKey && !evt.shiftKey && !evt.isComposing ){
        //さらに、Target判断
        // console.log(evt.target.classList);
        evt.target.classList.forEach(element => {
            if(element.includes("chat_input")){
                // console.log(evt);
                evt.preventDefault();
                evt.stopPropagation();
                let txt = evt.target.value;
                evt.target.value = txt + "\n";
            }
        });
    }
}

document.addEventListener("keydown",moniterKeyEvt,true);
document.addEventListener("keypress",moniterKeyEvt,true);