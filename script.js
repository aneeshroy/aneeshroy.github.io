document.addEventListener("DOMContentLoaded", function() {
    const faders = document.querySelectorAll('.project');
    const galleries = document.querySelectorAll('.gallery');

    const appearOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('fade-in-right');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    galleries.forEach(gallery => {
        const images = gallery.querySelectorAll('.gallery-images img');
        const prevButton = gallery.querySelector('.prev');
        const nextButton = gallery.querySelector('.next');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle('active', i === index);
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);

        showImage(currentIndex);
        setInterval(nextImage, 5000);
    });
});
