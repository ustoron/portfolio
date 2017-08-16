var xmlhttp = new XMLHttpRequest();
var url = "http://lambo-project.com/events.php";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    for(var i = 0; i < arr.length; i++) {
        out +='<tr><td class="firstColumn">'+ arr[i].name+ '</td><td class="secondColumn">'+ arr[i].date+'</td></tr>';
    }
    document.getElementById("superTable").innerHTML = out;
}

//$(document).ready(function () {
//                $("#insured_list").tablesorter();
//            });
//
//$(document).ready(function() { 
//    $("table") 
//    .tablesorter({widthFixed: true, widgets: ['zebra']}) 
//    .tablesorterPager({container: $("#pager")}); 
//}); 


