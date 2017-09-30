var xmlhttp = new XMLHttpRequest();
var url = "http://lambo-project.com/events.php";

var arrName = [];
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
   
};
xmlhttp.open("GET", url, true);
xmlhttp.send();


function myFunction(arr) {
    
    for(var i = 0; i < arr.length; i++) {
        var obj = {};
        obj.name = arr[i].name;
        obj.date = arr[i].date;
        arrName[i] = obj;
        
    }
}

alert(arrName[10].name);
