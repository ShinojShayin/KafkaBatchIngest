$("#request_topic").val(getRequestTopicName());

var batch_ingestion = {
    "not_file":true,
    "data": []
};

$("#batch_submit").click(function(){
    var lines = $('#batch_message').val().split('\n');
    var batch_data = [];

    if(batch_ingestion.not_file){
        for(var i = 0;i < lines.length;i++){
            //code here using lines[i] which will give you each line
    
            try{
                var valObj = JSON.parse(lines[i]);
                batch_data.push({"value" : valObj, "key":"partition-0"});
                
            }
            catch(e){
                alert("invalid json encountered")
                batch_data=[];
                break;
            }
        }

        if(batch_data.length > 0){
            var reqTopic = $("#request_topic").val();
            postToTopic(reqTopic, batch_data)
        }
    }
    else{
        var reqTopic = $("#request_topic").val();
        postToTopic(reqTopic,  batch_ingestion.data);
    }



   
})

function sleep(seconds) 
{
  var e = new Date().getTime() + (seconds * 1000);
  while (new Date().getTime() <= e) {}
}

document.getElementById('inputfile').addEventListener('change', function() {
    batch_ingestion.not_file = false;
    $('#batch_message').prop("disabled", true);
    var fr=new FileReader();
   
    fr.onload=function(){ 
        var counter = 1;
        var batchObjList = [];
        var lines = this.result.split('\n');
        for(var line = 0; line < lines.length; line++,counter++){
            batch_ingestion.data.push({"value" : lines[line].trim(), "key":"partition-0"})
        }
    };
    
    fr.readAsText(this.files[0]);
    // fr=null
});