var template = '<div class="span3 tab-border-left tab-border-right"><div class="head-top-space"><h4 style="display:inline">Topic Name : {tp_name}</h4></div><table class="table table-condensed"><thead><tr><th>Sr. No</th><th>message</th></tr></thead><tbody id="{tbody}"><tr><td>1</td><td><code>{"value" : "key"}</code></td></tr></tbody></table></div>';
var multi_topic_page = {
    "tab_counter": 0,
    "tab_limit": 5,
    "topic_list":[]
};

function loadConsumerData(tbodyId, topicName){

}
var addTopicTab = function(topicName){
    multi_topic_page.topic_list.push(topicName);
    if(topicName && topicName.trim().length>0){
        if(multi_topic_page.tab_counter<=multi_topic_page.tab_limit){
            var tbodyId =  "tp_message_"+multi_topic_page.tab_counter;
            if(multi_topic_page.tab_counter==0){
                $("#tab_container").append(template.replace("{tp_name}", topicName)).replace("{tbody}", tbodyId);
            }
            else{
                $("#tab_container").append(template.replace("{tp_name}", topicName).replace("tab-border-left","")).replace("{tbody}", tbodyId);
            }
            
            multi_topic_page.tab_counter++;
        }
        else{
            alert("Topic Monitor tab limit reached : "+multi_topic_page.tab_limit);
        }

        $('#add_topic_modal').modal('hide')
    }
    else{
        alert("Provide valid topic name")
    }
}

var addTabValidate = function(isPresent, topicName){
    if(isPresent){
        if(!multi_topic_page.topic_list.includes(topicName) ){
            addTopicTab(topicName);
        }
        else{
            alert("Topic tab already added");
        }

    }
    else{
        alert("This topic doesn't exist");
    }
}

$("#add_tab").click(function(){
    var topicName = $("#topic_name_input").val();
    isTopicExist(topicName, addTabValidate);  
});

$("#open_topic_modal").click(function(){
    $("#add_topic_modal").modal("show");
})



