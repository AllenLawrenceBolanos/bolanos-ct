function add() {
    const sum = parseInt(document.getElementById("input1").value) + parseInt(document.getElementById("input2").value);
    const value = "Sum: " + sum;
    document.getElementById("output").innerText = value;
}