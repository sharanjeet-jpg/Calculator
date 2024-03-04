

function Solve(val) {
   var v = document.getElementById('res');
   v.value += val;
}
function Result() {
   var num1 = document.getElementById('res').value;
   var num2 = eval(num1);
   document.getElementById('res').value = num2;
}
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
}















































//var Result = document.getElementById('Result');
//var one = document.getElementById('res');
//one.addEventListener('submit',function(event) {
//    var num = [];
//    var result = 0;
//    for( var index = 0;index < num.length; index++ ) {
//        if(num[index] == "*") {
//            num[index - 1] *= num[index];
//        }
//        else if(num[index] == "/") {
//            num[index - 1] /= num[index];
//        }
//        else if(num[index] == "%") {
//            num[index - 1] %= num[index];
//        }
//         if(num[index] == "+") {
//            num[index - 1] *= num[index];
//        }
//        else if(num[index] == "-") {
//            num[index - 1] /= num[index];
//        }
//        var result += num[index-1];
//    }
//    alert(result);
//    Result.innerText="result";
//    event.preventDefault();
//})
//




























//var numField1 = document.getElementById('numField1');
//var numField2 = document.getElementById('numField2');
//var resultField = document.getElementById('resultField');
//
//var form = document.getElementById('XIsWhatPercentOfY');
//
//form.addEventListener('submit', function(event) {
//    if(!numField1.value || !numField2.value) {
//        alert("Please enter values in the fields");
//    }
//    else {
//        var x = parseFloat(numField1.value);
//        var y = parseFloat(numField2.value);
//        var c = (x/y)*100;
//        alert(c);
//        resultField.innerText = "Answer: " + c +"%";
//        event.preventDefault();
//    }
////        alert("Result is = " + c);
//
//});
