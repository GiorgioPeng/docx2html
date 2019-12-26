function remoteRangeWord(url){
    let xhr;
    if (window.XMLHttpRequest)
    {
        xhr=new XMLHttpRequest();
    }
    else
    {
        xhr=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhr.open('GET', url, true);
    // console.log(this.props.src);
    xhr.send(null)
    xhr.responseType = 'blob';
    xhr.onreadystatechange = function(){
      if(xhr.readyState ===4 && xhr.status === 200){
        l_handleFileSelect(xhr.response);

      }
    }
}

function l_handleFileSelect(event) {
     this.l_readFileInputEventAsArrayBuffer(event,  function temp(arrayBuffer){
         mammoth.convertToHtml({arrayBuffer: arrayBuffer})
             .then(this.l_displayResult)
             .done();
     });
 };

 function l_displayResult(result) {
     document.getElementById("output").innerHTML = result.value;
 };

 function l_readFileInputEventAsArrayBuffer(event, callback) {
     var file = event;
     // var file = event;

     var reader = new FileReader();

     reader.onload = function(loadEvent) {
         var arrayBuffer = loadEvent.target.result;
         callback(arrayBuffer);
     };

     reader.readAsArrayBuffer(file);
 };

 function l_escapeHtml(value) {
     return value
         .replace(/&/g, '&amp;')
         .replace(/"/g, '&quot;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;');
 };
