function postToTopic(topicName, recordList){
    var reqBody = {
        "records": recordList
    }
    reqBody = JSON.stringify(reqBody);
    $.ajax( getTopicUrl(topicName), 
        {
            dataType: 'json', // type of response data
            type: "POST",
            processData: false,
            headers: {
                "Content-Type":"application/vnd.kafka.json.v2+json"
            },
            data: reqBody,
            success: function (response,status,xhr) {   // success callback function
                $("#output").append("<p> Sucess!! topic-name: "+topicName+" Record size: "+recordList.length+" Data-time: "+new Date())
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback 
                $("#output").append("<p> Failure topic-name: "+topicName+" Record size: "+recordList.length+" Data-time: "+new Date())
                
            }
        });
}