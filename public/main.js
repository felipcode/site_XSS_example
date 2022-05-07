
let bod = document.getElementById("div1")
let button = document.getElementById("button")
let inp = document.getElementById("first_comment")



// FUNÇÂO ENCODE

function htmlEncode(str){
    return String(str).replace(/[^\w. ]/gi, function(c){
        return '&#'+c.charCodeAt(0)+';';
    });
}


// ENCODE DE CARACTERES CARACTERÌSTICOS DE INJEÇÂO DE SCRIPT

button.onclick = () => {
    bod.innerHTML = htmlEncode(inp.value)
}


// ++++ VULNERAVEL

// button.onclick = () => {
//     bod.innerHTML = (inp.value)
// }
