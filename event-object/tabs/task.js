let tabs = Array.from(document.querySelectorAll('.tab'));
let contents = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach(tab => {
    tab.onclick = function(){
        tabs.forEach(tabIndex => {
            tabIndex.className = 'tab';
        })
        tab.className = 'tab tab_active';
        let index = tabs.findIndex(el => el == tab);
        console.log(index);
        console.log(contents);
        contents.forEach(content => {
            content.className = 'tab__content';
        })
        contents[index].className = 'tab__content tab__content_active';
    }
})