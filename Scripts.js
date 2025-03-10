document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="color"]');
    const otherTextBox = document.getElementById("OtherText");
    const otherRadio = document.getElementById("Other");
    
    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            if (otherRadio.checked) {
                otherTextBox.style.display = "inline-block";
            } else {
                otherTextBox.style.display = "none";
                otherTextBox.value = ""; // Clear the textbox if another option is selected
            }
        });
    });
});