
function calculateSelection(info,tab){
    var calcResult="";
    var str = info.selectionText;
    try{
        calcResult=eval(str);
    }catch(e){
        console.log('error:',e);
    }
    chrome.tabs.query({ active: true, currentWindow: true }, 
                      function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,{
                code:"document.execCommand('insertText',false,'"+calcResult+"');"
            }
        );
    });
}

chrome.contextMenus.create({
    "title": "calculate", 
    "contexts":["editable"],
    "onclick": calculateSelection
});
