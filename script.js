window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.body.style.backgroundPosition = `calc(50% + ${scrollPosition * 0.1}px) calc(50% + ${scrollPosition * 0.1}px)`;
});
