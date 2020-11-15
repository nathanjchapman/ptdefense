
(() => {
    const navBar = () => {
        let showNavButton = document.getElementById('show-nav');

        const toggleIsShown = (e) => {
            e.preventDefault();
            let links = document.querySelectorAll('nav a');

            const toggleClass = (el) => {
                el.classList.toggle('is-shown');
            };

            links.forEach(toggleClass);
        };

        showNavButton.addEventListener('click', toggleIsShown);
    };

    const imgDefer = () => {
        let images = document.getElementsByTagName('img');
        for (let i=0; i<images.length; i++) {
            if (images[i].getAttribute('data-src')) {
                images[i].setAttribute('src', images[i].getAttribute('data-src'));
            }
        }
    };

    const init = () => {
        imgDefer();
        navBar();
    };

    // When the DOM is ready it'll execute fn().
    const ready = (fn) => {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    };

    ready(init);
})();
