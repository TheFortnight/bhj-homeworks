let request = new XMLHttpRequest();
request.open("GET", 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

request.addEventListener('readystatechange', function () {
    if (this.readyState == request.DONE && this.status == 200) {
        document.querySelector('.loader').className = 'loader';
        let response = request.responseText;
        response = JSON.parse(response);
        console.log(response.response.Valute);
        let items = document.querySelector('#items');
        let currencyObjects = response.response.Valute;
        let itemCode
        for (const [key, value] of Object.entries(currencyObjects)) {
            console.log(key + ': ' + value.CharCode);

            let newBlock = `<div class="item
            "<div class="item__code">
            ${value.CharCode}
        </div>
        <div class="item__value">
        ${value.Value}
        </div>
        <div class="item__currency">
        ${value.Name}
        </div>
        </div>`

            itemCode == undefined ? itemCode = newBlock : itemCode += newBlock;

        }
        items.outerHTML = itemCode;
    }
});

request.send();