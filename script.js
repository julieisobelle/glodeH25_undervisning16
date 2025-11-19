const submitForm = document.querySelector("#submitForm");

function collectData() {
    event.preventDefault(); // Må være med når vi jobber med HTML-form for at siden ikke skal oppdatere seg

    const textInput = document.querySelector("#textInput").value; // .value gjør at vi henter innholdet til elementet
    console.log(textInput);

    const numberInput = document.querySelector("#numberInput");
    console.log(numberInput);
    const numberInputValue = numberInput.value;
    console.log(numberInputValue);

    const displayFormData = document.querySelector("#displayFormData");
    displayFormData.textContent = textInput + " " + numberInputValue;
}

submitForm.addEventListener("click", collectData);