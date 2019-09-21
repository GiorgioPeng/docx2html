function handleFileSelect(event) {
     this.readFileInputEventAsArrayBuffer(event,  function temp(arrayBuffer){
         mammoth.convertToHtml({arrayBuffer: arrayBuffer})
             .then(this.displayResult)
             .done();
     });
 };

 function displayResult(result) {
     document.getElementById("output").innerHTML = result.value;
 };

 function readFileInputEventAsArrayBuffer(event, callback) {
     var file = event.target.files[0];
     // var file = event;

     var reader = new FileReader();

     reader.onload = function(loadEvent) {
         var arrayBuffer = loadEvent.target.result;
         callback(arrayBuffer);
     };

     reader.readAsArrayBuffer(file);
 };

 function escapeHtml(value) {
     return value
         .replace(/&/g, '&amp;')
         .replace(/"/g, '&quot;')
         .replace(/</g, '&lt;')
         .replace(/>/g, '&gt;');
 };
