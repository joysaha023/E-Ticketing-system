function setInnerTxtByvalue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getInnerTxtByvalue(elementId){
    const element = document.getElementById(elementId)
    elementValue = parseInt(element.innerText)
    return elementValue
}