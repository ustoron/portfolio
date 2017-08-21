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

var arrName = [];
function myFunction(arr) {
    var out = "";
    for(var i = 0; i < arr.length; i++) {
        arrName[i] = arr[i].name;
        out +='<tr><td class="firstColumn">'+ arr[i].name+ '</td><td class="secondColumn">'+ arr[i].date+'</td></tr>';
    }
    document.getElementById("superTable").innerHTML = out;
}

