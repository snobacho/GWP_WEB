document.querySelectorAll('.topside-nav-item a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.topside-nav-item').forEach(item => {
            item.classList.remove('active');
        });

        this.parentElement.classList.add('active');

        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active', 'flex-container', 'grid-container');
            content.style.display = 'none';
        });

        const contentId = this.getAttribute('data-content');
        const layout = this.getAttribute('data-layout');
        const contentElement = document.getElementById(contentId);
        contentElement.classList.add('active', layout + '-container');
        contentElement.style.display = layout === 'grid' ? 'grid' : 'flex';
    });
});

document.getElementById("checkBtn").addEventListener("click", function () {
    document.getElementById("bankInfo").style.display = "flex";
    document.getElementById("payBtn").style.display = "grid";
    document.getElementById("checkBtn").style.display = "none";
    document.getElementById("abonentInfo").style.display = "flex";
});


