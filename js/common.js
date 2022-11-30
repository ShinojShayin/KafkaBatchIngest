var server_json = {
    "host" : "http://localhost:8082",
    "clusterid":"dMJYexa7QhmlQIMPeG4z-g",
    "clusters" : "/v3/clusters",
    "topic_url" : "/topics/{tp_name}",
    "request_topic" : "crm_process_request",
    "topic_details_url" : "/v3/clusters/{clusterid}/topics/{tp_name}",
    
}

function getClusterDetailsUrl(){
    return server_json.host + server_json.clusters;
}

$.ajax( getClusterDetailsUrl(), 
    {
        dataType: 'json', // type of response data
        timeout: 500,     // timeout milliseconds
        type: "GET",
        headers: {
            "access-control-allow-credentials":"first value",
            "My-Second-Header":"second value"
        },
        success: function (response,status,xhr) {   // success callback function

            server_json.clusterid = response.data[0].cluster_id;

        },
        error: function (jqXhr, textStatus, errorMessage) { // error callback 
           console.log('Error: ' + errorMessage);
        }
    });


function getTopicUrl(tp_name){
    return getHostUrl() + server_json.topic_url.replace("{tp_name}",tp_name);
}

function getHostUrl(){
    return server_json.host;
}

function getTopicDetailsUrl(tp_name){
    return getHostUrl() + server_json.topic_details_url.replace("{tp_name}",tp_name).replace("{clusterid}",server_json.clusterid);
}

function getRequestTopicName(){
    return server_json.request_topic;
}






