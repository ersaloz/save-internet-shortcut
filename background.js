browser.commands.onCommand.addListener((command) => {
   
  saveCurrentTabUrl();

});


function saveCurrentTabUrl(){

  browser.tabs.query({active:true,currentWindow:true}).then(function(tabs){

    var currentTabUrl = tabs[0].url;
    var urlfiledata = "[InternetShortcut]\r\nURL="+currentTabUrl+"\r\n";
    var blob = new Blob([urlfiledata],{type:"text/plain;charset=utf-8"})
    var urlwin = (window.webkitURL || window.URL || window.mozURL);
    var urlblob = urlwin.createObjectURL(blob); 
    var currenturl = new urlwin(currentTabUrl);
    var fname = currenturl.hostname+'.url';

    browser.downloads.download({
      url: urlblob,
      saveAs: true,
      filename: 'df2url/'+fname
    }) 

  });

};

