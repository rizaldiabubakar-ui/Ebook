document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIKA DARK MODE ---
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    // Cek preferensi user dari Local Storage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark'); // Simpan preferensi
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light'); // Simpan preferensi
        }
    });


    // --- LOGIKA FILTER BUKU ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const bookCards = document.querySelectorAll('.book-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Hapus kelas 'active' dari semua tombol
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Tambah kelas 'active' ke tombol yang diklik
            button.classList.add('active');

            const genre = button.getAttribute('data-genre');

            bookCards.forEach(card => {
                const cardGenre = card.getAttribute('data-genre');
                if (genre === 'all' || cardGenre === genre) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });


    // --- LOGIKA TOMBOL KEMBALI KE ATAS ---
    const backToTopButton = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

});