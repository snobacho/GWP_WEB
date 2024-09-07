document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
        document.querySelectorAll('.content-item').forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        const contentId = this.id.replace('menu-', 'content-');
        document.getElementById(contentId).classList.add('active');
    });
});

// row popup

function openRowPopup() {
    document.getElementById('popup-row').style.display = 'flex';
}

const rowPopup = document.getElementById('popup-row');
const closeRowPopup = document.getElementById('closePopupRow');
const submitBtn = document.getElementById('submitBtn');
const abonentNumberInput = document.getElementById('abonentNumber');
const addressInput = document.getElementById('address');
const errorAbonentNumber = document.getElementById('errorAbonentNumber');

closeRowPopup.addEventListener('click', function () {
    rowPopup.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === rowPopup) {
        rowPopup.style.display = 'none';
    }
});

function checkFields() {
    const abonentNumberLength = abonentNumberInput.value.trim().length;
    const addressLength = addressInput.value.trim().length;
    submitBtn.disabled = !(abonentNumberLength > 0 && addressLength > 0);
}

function handleSubmit() {
    const abonentNumberLength = abonentNumberInput.value.trim().length;
    if (abonentNumberLength < 7) {
        errorAbonentNumber.style.display = 'block';
        document.getElementById('abonentNumber').style.borderColor = '#DE4040';
    }
}

abonentNumberInput.addEventListener('input', checkFields);
addressInput.addEventListener('input', checkFields);
submitBtn.addEventListener('click', handleSubmit);

// details popup

function openDetailsPopup() {
    document.getElementById('popup-details').style.display = 'flex';
}

const DetailsPopup = document.getElementById('popup-details');
const closeDetailsPopup = document.getElementById('closePopup-details');
closeDetailsPopup.addEventListener('click', function () {
    DetailsPopup.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === DetailsPopup) {
        DetailsPopup.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');
    const inputs = form.querySelectorAll('input[type="text"], input[type="tel"], input[type="email"], input[type="password"]');
    const checkboxes = form.querySelectorAll('input[type="checkbox"]');
    const submitButton = form.querySelector('button[type="button"]');

    function checkFormValidity() {
        const allInputsFilled = Array.from(inputs).every(input => input.value.trim() !== '');
        const allCheckboxesChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

        if (allInputsFilled && allCheckboxesChecked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    inputs.forEach(input => input.addEventListener('input', checkFormValidity));
    checkboxes.forEach(checkbox => checkbox.addEventListener('change', checkFormValidity));
    checkFormValidity();
});

// sms popup

function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    DetailsPopup.style.display = 'none';
}

const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopupSms');

closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});


// problem popup

document.getElementById('address-problem').addEventListener('input', function () {
    const addressInput = document.getElementById('address-problem');
    const submitBtn = document.getElementById('submitBtn-p');

    if (addressInput.value.trim() === '') {
        addressInput.style.borderColor = 'red';
        submitBtn.disabled = true;
        document.getElementById('errorRequired').style.display = 'block';
    } else {
        addressInput.style.borderColor = '';
        submitBtn.disabled = false;
        document.getElementById('errorRequired').style.display = 'none';
    }
});

document.getElementById('upload').addEventListener('click', function () {
    const newDivContainer = document.getElementById('photos-container');
    newDivContainer.style.display = 'flex';

});

const closePopupProblem = document.getElementById('closePopupProblem');
const popupProblem = document.getElementById('popup-problem');

closePopup.addEventListener('click', function () {
    popupProblem.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === popupProblem) {
        popupProblem.style.display = 'none';
    }
});

function openPopupProblem() {
    document.getElementById('popup-problem').style.display = 'flex';
    DetailsPopup.style.display = 'none';
}

function addNewRow() {
    document.getElementById('popup-problem').style.display = 'none';
    document.getElementById('added').style.display = 'table-row';
    document.getElementById('added-m').style.display = 'flex';
}

// message popup

const messages = [{
    id: 1,
    date: '25.11.2024',
    title: 'ინფორმაცია ინციდენტზე',
    details: 'გაცნობებთ, რომ ორშაბათს 5 ივნისის...',
    checked: false,
},
{
    id: 2,
    date: '25.10.2024',
    title: 'ინფორმაცია ინციდენტზე',
    details: 'გაცნობებთ, რომ სამშაბათს 6 ივნისის...',
    checked: false,
},
{
    id: 3,
    date: '25.11.2024',
    title: 'ინფორმაცია ინციდენტზე',
    details: 'გაცნობებთ, რომ ორშაბათს 5 ივნისის...',
    checked: false,
},
{
    id: 4,
    date: '25.10.2024',
    title: 'ინფორმაცია ინციდენტზე',
    details: 'გაცნობებთ, რომ სამშაბათს 6 ივნისის...',
    checked: false,
},
{
    id: 5,
    date: '25.11.2024',
    title: 'ინფორმაცია ინციდენტზე',
    details: 'გაცნობებთ, რომ ორშაბათს 5 ივნისის...',
    checked: false,
},
{
    id: 6,
    date: '25.10.2024',
    title: 'ინფორმაცია ინციდენტზე',
    details: 'გაცნობებთ, რომ სამშაბათს 6 ივნისის...',
    checked: false,
},

];


const messagesList = document.getElementById('messagesList');
const messageDetails = document.getElementById('messageDetails');
const selectAllCheckbox = document.getElementById('selectAll');
const deleteSelectedButton = document.getElementById('deleteSelected');
const closePopupButton = document.getElementById('closePopupMessage');

function renderMessages() {
    messagesList.innerHTML = '';
    messages.forEach((message, index) => {
        const li = document.createElement('div');
        li.className = 'little-info-wrap';
        li.innerHTML = `
            <input type="checkbox" class="message-checkbox" data-index="${index}" ${message.checked ? 'checked' : ''}>
            <div class='little-info'>
            <span class='text-link'>${message.date}</span>
            <p class='heading-secondary'>${message.title}</p>
            <p class='text-primary'>${message.details}</p>
            </div>
        `;
        li.addEventListener('click', () => showMessageDetails(index));
        messagesList.appendChild(li);
    });
}

function showMessageDetails(index) {
    const message = messages[index];
    messageDetails.innerHTML = `
        <h3>${message.date}</h3>
        <h4>${message.title}</h4>
        <p>${message.details}</p>
    `;

    const items = messagesList.querySelectorAll('li');
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

selectAllCheckbox.addEventListener('change', function () {
    const checkboxes = document.querySelectorAll('.message-checkbox');
    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = this.checked;
        messages[index].checked = this.checked;
    });
});

deleteSelectedButton.addEventListener('click', function () {
    const checkedIndexes = [];
    document.querySelectorAll('.message-checkbox:checked').forEach((checkbox) => {
        checkedIndexes.push(parseInt(checkbox.getAttribute('data-index')));
    });

    for (let i = checkedIndexes.length - 1; i >= 0; i--) {
        messages.splice(checkedIndexes[i], 1);
    }

    renderMessages();
    messageDetails.innerHTML = '';
});

closePopupButton.addEventListener('click', function () {
    document.getElementById('messages-popup').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('messages-popup')) {
        document.getElementById('messages-popup').style.display = 'none';
    }
});


function openPopupMessages() {
    document.getElementById('messages-popup').style.display = 'flex';
    renderMessages();
}
renderMessages();


// accordion
function toggleCollapse(button) {
    const row = button.parentElement;
    const expandedContent = row.nextElementSibling;
    if (expandedContent.style.display === "none" || !expandedContent.style.display) {
        expandedContent.style.display = "flex";
        button.style.transform = 'rotate(180deg) translateY(50%)';       
       
        if (window.innerWidth < 1025) {
            button.style.display = 'none';
        }
    } else {
        expandedContent.style.display = "none";
        button.style.transform = 'rotate(0deg) translateY(-50%)';
        
        button.style.display = 'block';
    }
}


// ჩვენების პოპპაპ
// ჩვენების პოპაპი

function openChvenebaPopup() {
    document.getElementById('popup-chveneba').style.display = 'flex';
}

const closePopupCh = document.getElementById('closePopupCh');

closePopup.addEventListener('click', function () {
    document.getElementById('popup-chveneba').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('popup-chveneba')) {
        document.getElementById('popup-chveneba').style.display = 'none';
    }
});