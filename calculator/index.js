let result = 0;
let calcHistory = document.getElementById("calc-history");


function calcTotal(){
    let num1 = document.getElementById("num-1").value;
    let operationSelect = document.getElementById("operation");
    let operation = operationSelect.options[operationSelect.selectedIndex].value;
    let num2 = document.getElementById("num-2").value;

    if (num1 == "" || num2 == ""){
        result = "Please type both numbers."
        document.getElementById("result-btn").innerHTML = `${result}`;
        return;
    }

    else {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        // operation value 1: add
        // operation value 2: subtract
        // operation value 3: divide
        // operation value 4: multiply

        if (operation == 1){
            result = num1 + num2
            operation = "+";
        }
        else if (operation == 2){
            result = num1 - num2;
            operation = "-"
        }
        else if (operation == 3){
            result = num1 / num2;
            operation = "÷"
        }
        else if(operation == 4){
            result = num1 * num2;
            oepration = "*"
        }
        else {
            document.getElementById("result-btn").innerHTML = `Please select an operation.`;
            return;
        }
        
        document.getElementById("result-btn").innerHTML = `${result}`;
        calcHistory.innerHTML += `<tr><td>${num1}</td><td>${operation}</td><td>${num2}</td><td>${result}</td></tr>`
    }

};

function resetHistory() {
    calcHistory.innerHTML = ``
};
