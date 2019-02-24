// AJAX request

export function commonServiceCall(successFunction) {

var sCurrentEnvironment = "localhost";
var sRequestURL = "";

// uncomment when running on localhost
sRequestURL = "http://127.0.0.1:5000/";
    $.ajax({
        url: sRequestURL,
        type: "GET",
        async: false,
        contentType: "application/json; charset=utf-8",
        success: function(data){if(data){
            successFunction(data);
        }
    },
        failure: function (response) {
            alert(response.responseText);
        },
        error: function (response,status) {
            alert(status);
        }
    });
}