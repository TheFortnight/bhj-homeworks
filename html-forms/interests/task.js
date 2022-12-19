/* let allCheckBoxes = Array.from(document.querySelectorAll('.interest__check'));
for(checkBox of allCheckBoxes){
    checkBox.onclick = function(){
            let parent = checkBox.parentElement;
            let list = parent.getElementsByTagName('ul');
            let foldedBoxes = Array.from(list.querySelectorAll('.interest__check'));
        foldedBoxes.forEach(box => {
            
    box.checked = true;
})}} */

let listOfLists = Array.from(document.getElementsByTagName('ul'));
listOfLists.forEach(list => {
    let foldedList = Array.from(list.getElementsByTagName('ul'));
    if (foldedList.length > 0){
        foldedList.forEach(element => {
            let checkBoxes = Array.from(element.querySelector('.interest__check'));
            checkBoxes.forEach(checkBox => checkBox.checked = true);
                });
    }
});