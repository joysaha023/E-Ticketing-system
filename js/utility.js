function setInnerTxtByvalue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getInnerTxtByvalue(elementId){
    const element = document.getElementById(elementId)
    elementValue = parseInt(element.innerText)
    return elementValue
}

function getInValueFromId(elementId) {
    const element = document.getElementById(elementId)
    elementValue = element.value
    return elementValue
}


function hideElementbyId(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}