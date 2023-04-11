function addNum(input, n) {
    if (input.value == null || input.value == "0")
        input.value = n
    else
        input.value += n
}

function sin(form) {
    form.display.value = Math.sin(form.display.value)
}
function cos(form) {
    form.display.value = Math.cos(form.display.value)
}
function tan(form) {
    form.display.value = Math.tan(form.display.value)
}
function exp(form) {
    form.display.value = Math.exp(form.display.value)
}
function log(form) {
    form.display.value = Math.log10(form.display.value)
}
function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value)
}
function square(form) {
    form.display.value = Math.pow(form.display.value, 2)
}
function backSpace(input) {
    input.value = input.value.substring(0, input.value.length - 1)
}

function compute(form) {
    form.display.value = eval(form.display.value)
    // console.log(form)
}

function checkNum(str) {
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch < "0" || ch > "9") {
            if (ch != "*" && ch != "/" && ch != "+" && ch != "-" && ch != "." && ch != "(" && ch != ")" && ch != "%") {
                window.alert("Invalid entry!!!");
                return false
            }
        }
    }
    return true;
} 