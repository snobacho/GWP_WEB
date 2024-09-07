document.querySelectorAll('.code-input').forEach((input, index, inputs) => {
    input.addEventListener('input', function () {
        if (this.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Backspace' && this.value.length === 0 && index > 0) {
            inputs[index - 1].focus();
        }
    });

    input.addEventListener('paste', function (e) {
        const pastedData = e.clipboardData.getData('text');
        const pastedDigits = pastedData.split('');
        pastedDigits.forEach((digit, i) => {
            if (index + i < inputs.length) {
                inputs[index + i].value = digit;
                if (index + i + 1 < inputs.length) {
                    inputs[index + i + 1].focus();
                }
            }
        });
        e.preventDefault();
    });
});

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');

closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});


