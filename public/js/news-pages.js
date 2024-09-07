document.addEventListener('DOMContentLoaded', () => {
    const totalPages = 20;   // Number of total pages                                  
    let currentPage = 1;

    const contentDiv = document.querySelector('.pagination-content');
    const pageNumbersDiv = document.getElementById('page-numbers');
    const prevArrow = document.getElementById('prev');
    const nextArrow = document.getElementById('next');

    function loadContent(page) {
        // Hide all content divs
        Array.from(contentDiv.children).forEach(child => {
            if (child.dataset.page === String(page)) {
                child.style.display = 'block';
            } else {
                child.style.display = 'none';
            }
        });
    }

    function updatePagination() {
        pageNumbersDiv.innerHTML = '';

        if(currentPage === 1) {
            prevArrow.style.backgroundColor = '#919EAB';
            prevArrow.style.color = 'white';
        } else {
            prevArrow.style.backgroundColor = 'white';
            prevArrow.style.color = '#c3a7a7';
        }

        if(currentPage === totalPages) { 
            nextArrow.style.backgroundColor = '#919EAB';
            nextArrow.style.color = 'white';
        }
        else {
            nextArrow.style.backgroundColor = 'white';
            nextArrow.style.color = '#c3a7a7';
        }
        // check first and last pages and add colors 


        const pageWindow = 1; 

        let startPage = Math.max(currentPage - pageWindow, 1);
        let endPage = Math.min(currentPage + pageWindow, totalPages);

        if (currentPage > pageWindow + 1) {
            pageNumbersDiv.innerHTML += `<span class="page" data-page="1">1</span>`;
            if (startPage > 2) pageNumbersDiv.innerHTML += `<span class="dots">...</span>`;
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbersDiv.innerHTML += `<span class="page" data-page="${i}">${i}</span>`;
        }

        if (currentPage < totalPages - pageWindow) {
            if (endPage < totalPages - 1) pageNumbersDiv.innerHTML += `<span class="dots">...</span>`;
            pageNumbersDiv.innerHTML += `<span class="page" data-page="${totalPages}">${totalPages}</span>`;
        }

        document.querySelectorAll('.page').forEach(pageNumber => {
            pageNumber.classList.remove('active');
            if (parseInt(pageNumber.dataset.page) === currentPage) {
                pageNumber.classList.add('active');
            }
        });
    }

    function handlePageChange(page) {
        if (page < 1 || page > totalPages) return;
        currentPage = page;
        loadContent(page);
        updatePagination();
    }

    prevArrow.addEventListener('click', () => {
        if (currentPage > 1) handlePageChange(currentPage - 1);
    });

    nextArrow.addEventListener('click', () => {
        if (currentPage < totalPages) handlePageChange(currentPage + 1);
    });

    pageNumbersDiv.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('page')) {
            handlePageChange(parseInt(target.dataset.page));
        }
    });

    loadContent(currentPage);
    updatePagination();
});

// end pagination 




// show city relevant content 
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle tab switching
    function setupTabs(container) {
        const buttons = container.querySelectorAll('.tab-button');
        const contents = container.querySelectorAll('[class^="new-content"], [class^="city-content"]');

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                const target = button.getAttribute('data-target');
                
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                // Hide all contents
                contents.forEach(content => {
                    content.style.display = 'none';
                });
                
                // Show the content that matches the clicked button's target
                contents.forEach(content => {
                    if (content.classList.contains(target)) {
                        content.style.display = 'block';
                    }
                });
            });
        });

        // Set default active tab
        const defaultActiveButton = container.querySelector('.tab-button.active');
        const defaultTarget = defaultActiveButton.getAttribute('data-target');
        contents.forEach(content => {
            if (content.classList.contains(defaultTarget)) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }

    // Initialize tabs for both content2 and content3
    const content2 = document.getElementById('content2');
    const content3 = document.getElementById('content3');

    if (content2) setupTabs(content2);
    if (content3) setupTabs(content3);
});





// region selection in city
document.addEventListener('DOMContentLoaded', function() {
    // Select all city-content divs
    const cityContentGroups = document.querySelectorAll('.city-content1, .city-content2, .city-content3');
    
    cityContentGroups.forEach(group => {
        const selectElement = group.querySelector('select');
        const regionDivs = group.querySelectorAll('[data-region]');

        // Function to show the selected region's content
        function showSelectedRegion() {
            const selectedValue = selectElement.value;
            
            // Loop through all region divs within the current group
            regionDivs.forEach(div => {
                if (div.getAttribute('data-region') === selectedValue) {
                    div.style.display = 'block'; // Show the relevant content
                } else {
                    div.style.display = 'none'; // Hide non-relevant content
                }
            });
        }

        // Event listener for change in dropdown selection
        selectElement.addEventListener('change', showSelectedRegion);

        // Initial call to set the correct visibility based on the default selected option
        showSelectedRegion();
    });
});








    // careers modal shows relevant content  **************************
    document.addEventListener('DOMContentLoaded', function () {
        var modal = document.getElementById("careerModal");
        var closeButton = document.querySelector(".close");
        var modalBody = document.getElementById("modal-body");

        document.querySelectorAll('.career-content').forEach(function (element) {
            element.addEventListener('click', function () {
                var careerId = this.getAttribute('data-career-id');
                showCareer(careerId);
            });
        });

        function showCareer(careerId) {
            var contentDiv = document.getElementById('career-' + careerId + '-content');
            if (contentDiv) {
                modalBody.innerHTML = contentDiv.innerHTML; 
                modal.style.display = "block"; 
            
            }
        }

        // Close the modal when the user clicks on the close button
        closeButton.onclick = function () {
            modal.style.display = "none";
        };

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            
            }
        };
    });


