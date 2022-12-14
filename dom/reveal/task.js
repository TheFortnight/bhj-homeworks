function isInViewport(){
    let elements = document.querySelectorAll('.reveal');
    const viewportHeight = window.innerHeight;
    elements.forEach(element => {
    
    const elementTop = element.getBoundingClientRect().top;

    element.className = elementTop < viewportHeight ? 'reveal reveal_active' : 'reveal';
    });
}   

    document.addEventListener('scroll', isInViewport);
    