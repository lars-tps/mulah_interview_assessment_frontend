// const countryCodes = document.getElementById("country-codes");

function convertJSONToDropdown(jsonData){
    const selectOptions = document.getElementById("country-codes");
    for(var entry in jsonData){
        var code = jsonData[entry];
        if (code[0] != '+'){
            code = '+'+jsonData[entry];
        } 
        
        const option = document.createElement("option");
        option.text = code;
        option.value = code;
        if (code == '+60'){
            option.selected = true;
        }
        selectOptions.appendChild(option);
    }
}


const path = './phone.json'

fetch(path)
    .then(response => response.json())
    .then(result => convertJSONToDropdown(result));