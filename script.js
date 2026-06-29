function handleOptionChange() {
    var psychometric = document.getElementById("psychometricGrade");
    var mechina = document.getElementById("mechinaGrade");

    if (document.getElementById("optionPsycho").checked) {
        mechina.disabled = true;
        mechina.style.backgroundColor = "#d3d3d3";
        mechina.value = "";
        psychometric.disabled = false;
        psychometric.style.backgroundColor = "";
    } else if (document.getElementById("optionMechina").checked) {
        psychometric.disabled = true;
        psychometric.style.backgroundColor = "#d3d3d3";
        psychometric.value = "";
        mechina.disabled = false;
        mechina.style.backgroundColor = "";
    }
}

function validate() {
    var bagrut = document.getElementById("bagrutGrade").value.trim();
    var age = parseInt(document.getElementById("age").value.trim());
    var resultDiv = document.getElementById("result");

    resultDiv.textContent = "";
    resultDiv.className = "";

    if (bagrut === "") {
        alert("You should enter a bagrut grade");
        return;
    }

    if (!isNaN(age) && age > 30) {
        resultDiv.textContent = "You are eligible for admission to any faculty you choose";
        resultDiv.className = "green";
    }
}
