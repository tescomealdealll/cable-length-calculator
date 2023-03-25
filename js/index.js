function coilLengthCalculator(dowelDiameter, coilLength, cableDiameter, allowance) {


    circumfrence = dowelDiameter * Math.PI
    length = coilLength / cableDiameter

    return parseFloat(((((dowelDiameter * Math.PI) * (coilLength / cableDiameter)) - 2.54) + (allowance * 2)).toFixed(2));

}

function calculator(event) {

    event.preventDefault(); // stops refresh

    const dowelDiameterElement = document.getElementById('dowel_diameter');
    const coilLengthElement = document.getElementById('coil_length');
    const cableDiameterElement = document.getElementById('cable_diameter');
    const cableAllowanceElement = document.getElementById('cable_allowance');

    if (!dowelDiameterElement.value) {
        return alert(`Input ${dowelDiameterElement.id} is None`);
    } 
    else if (!coilLengthElement.value) {
        return alert(`Input ${coilLengthElement.id} is None`);
    }
    else if (!cableDiameterElement.value) {
        return alert(`Input ${cableDiameterElement.id} is None`);
    } 
    else if (!cableAllowanceElement.value) {
        return alert(`Input ${cableAllowanceElement.id} is None`);
    } 

    const dowelDiameterVal = parseFloat(dowelDiameterElement.value);
    const coilLength = (parseFloat(coilLengthElement.value) * 2.54);
    const cableDiameter = parseFloat(cableDiameterElement.value / 10);
    const cableAllowance = parseFloat(cableAllowanceElement.value); 

    if (dowelDiameterVal == NaN || coilLength == NaN || cableDiameter == NaN || cableAllowance == NaN) {
        return alert('One or more values submitted are not an integer or float')
    }

    const dowelDiameter = (dowelDiameterVal + cableDiameter) / 10;
    const coilLengthValue = coilLengthCalculator(dowelDiameter, coilLength, cableDiameter, cableAllowance);

    const lengthResultText = document.getElementById('length_result_text');
    // lengthResultText.innerHTML = `You should use ${Math.round(coilLengthValue)}cm of ${cableDiameterElement.value}mm diameter cable for your ${coilLengthElement.value}inch coil. This includes ${cableAllowance}cm either end of the coil.`;
    lengthResultText.innerHTML = `You should use ${Math.round(coilLengthValue)}cm of cable to make your ${coilLengthElement.value}inch coil. This includes ${cableAllowance}cm allowance either end of the coil.`;
    

}

const submitButton = document.getElementById('submit_button');
submitButton.addEventListener('click', calculator);