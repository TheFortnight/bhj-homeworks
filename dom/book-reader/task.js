let sizes = Array.from(document.querySelectorAll('.font-size'));

function changesize(event) {
    if(this.classList.contains('font-size_small')){
        document.querySelector('.font-size_active').classList.toggle('font-size_active');
        this.classList.toggle('font-size_active');
        document.querySelector('.book').className = 'book book_fs-small';
    }
    
    else if(this.classList.contains('font-size_big')){
        document.querySelector('.font-size_active').classList.toggle('font-size_active');
        this.classList.toggle('font-size_active');
        document.querySelector('.book').className = 'book book_fs-big';
    }

    else {
        document.querySelector('.book').className = 'book';
        document.querySelector('.font-size_active').classList.toggle('font-size_active');
        this.classList.toggle('font-size_active');
    }
    event.preventDefault();
}

sizes.forEach(size => {
    size.addEventListener('click', changesize);
})