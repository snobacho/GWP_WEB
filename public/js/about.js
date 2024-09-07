// managment popup
let currentIndex = 0;


const managementItems = document.querySelectorAll('.managment-item');


function showPopup(index) {
    const item = managementItems[index];

    const name = item.getAttribute('data-name');
    const title = item.getAttribute('data-title');
    const text = item.getAttribute('data-text');
    const year = item.getAttribute('data-year');
    const imgSrc = item.querySelector('img').getAttribute('src');

    document.getElementById('managment-popup-name').textContent = name;
    document.getElementById('managment-popup-title').textContent = title;
    document.getElementById('managment-popup-text').textContent = text;
    document.getElementById('managment-popup-year').textContent = year;
    document.getElementById('managment-popup-image').setAttribute('src', imgSrc);


    document.getElementById('managment-popup').style.display = 'flex';
    currentIndex = index;
}


managementItems.forEach((item, index) => {
    item.addEventListener('click', function () {
        showPopup(index);
    });
});


document.querySelector('.close-btn').addEventListener('click', function () {
    document.getElementById('managment-popup').style.display = 'none';
});


window.addEventListener('click', function (e) {
    if (e.target === document.getElementById('managment-popup')) {
        document.getElementById('managment-popup').style.display = 'none';
    }
});

document.querySelector('.right-arrow').addEventListener('click', function () {
    if (currentIndex < managementItems.length - 1) {
        showPopup(currentIndex + 1);
    } else {
        showPopup(0);
    }
});


document.querySelector('.left-arrow').addEventListener('click', function () {
    if (currentIndex > 0) {
        showPopup(currentIndex - 1);
    } else {
        showPopup(managementItems.length - 1);
    }
});
