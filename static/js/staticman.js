function changeValue(elementName, newValue){
    document.getElementsByName(elementName)[0].value=newValue;
};

function enableBtn(){
    document.getElementById("submit_button").disabled = false;
};

document.getElementById("submit_button").disabled = true;
