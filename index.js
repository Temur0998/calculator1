function total(a, b) {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    document.getElementById("res1").innerHTML = (a * a) + (2 * a * b) + (b * b);
}
function solve(c, d) {
    c = document.getElementById("c").value;
    d = document.getElementById("d").value;
    document.getElementById("res2").innerHTML = (parseFloat(c) + parseFloat(d)) ** 2 + (parseFloat(c) - parseFloat(d)) ** 2;

}