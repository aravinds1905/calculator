sum = 0;
string = "";
function by_add() {
    a = parseInt(document.getElementById("n1").value);
    sum += a;
    if (string.length == 0) {
        string += a;
    }
    else {
        string += ("+" + a);
    }
    document.getElementById("res").value = string;
}
function by_sub() {
    a = parseInt(document.getElementById("n1").value);
    sum -= a;
    if (string.length == 0) {
        string += a;
    }
    else {
        string += ("-" + a);
    }
    document.getElementById("res").value = string;
}
function by_mul() {
    a = parseInt(document.getElementById("n1").value);
    sum *= a;
    if (string.length == 0) {
        string += a;
    }
    else {
        string += ("*" + a);
    }
    document.getElementById("res").value = string;
}
function by_div() {
    a = parseInt(document.getElementById("n1").value);
    sum /= a;
    if (string.length == 0) {
        string += a;
    }
    else {
        string += ("/" + a);
    }
    document.getElementById("res").value = string;
}
function by_equals() {
    const res = string + " = " + sum;
    document.getElementById("res").value = res;
}