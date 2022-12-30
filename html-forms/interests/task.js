let groupBoxes = document.querySelectorAll('.interest__check');
groupBoxes.forEach(groupBox => {
    groupBox.onclick = () => {
        groupBox.checked = !groupBox.checked;
        let parent = groupBox.parentElement;
        parent = parent.parentElement;
        let checkBoxes = parent.querySelectorAll('.interest__check');
        checkBoxes.forEach(box => {box.checked = !box.checked});
    }
 });
