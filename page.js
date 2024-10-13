function loadPage(page) {
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            document.querySelector('.container').innerHTML = data;
        })
        .catch(error => console.error('Error loading page:', error));
}

// استدعاء الدالة عند الضغط على الأزرار
document.querySelectorAll('.menu button').forEach(button => {
    button.addEventListener('click', function() {
        const page = this.getAttribute('data-target');
        loadPage(page);
    });
});
