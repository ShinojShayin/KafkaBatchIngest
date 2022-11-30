function isTopicExist(tp_name, resultFun){
    $.ajax(getTopicDetailsUrl(tp_name), 
        {
            dataType: 'json', // type of response data
            type: "GET",
            success: function(response,status){
                resultFun(true, tp_name);
            },
            error: function (jqXhr, textStatus, errorMessage) { // error callback 
               resultFun(false);
            }
    });
}

var createConsumerGroup = function(){

}

var createSubscription = function(){

}

function readRecords(){

}
