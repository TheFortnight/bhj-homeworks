let addsList = Array.from(document.querySelectorAll('.rotator__case'));

setInterval(() => {
    let currentAddIndex = addsList.findIndex(add => add.className == "rotator__case rotator__case_active");
    let nextAddIndex = (currentAddIndex + 1) > (addsList.length - 1) ? 0 : currentAddIndex + 1;
    addsList[currentAddIndex].classList.toggle('rotator__case_active');
    addsList[nextAddIndex].classList.toggle('rotator__case_active');
}, 1000);

// не совсем пониманию условие: Сделайте акцент на том, чтобы на странице можно было использовать несколько
//ротаторов одновременно - имеется в виду с точно таким же названием классов? Привязать к родителю?