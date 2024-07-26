const form = document.getElementById('form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const inputValue = document.getElementById('value-real').value;
    const selectedCurrency = document.getElementById('currency').value;
    const resultTag = document.getElementById('result');

    if (!inputValue || inputValue < 0) {
        alert('Informe um valor correto!');
    } else if (!selectedCurrency) {
        alert('Escolha uma moeda!');
    }

    let convertedValue = valueConverter(inputValue, selectedCurrency);

    resultTag.innerHTML = valueFormatter(convertedValue, selectedCurrency);
    animate(resultTag);
}


function valueConverter(value, currency) {
    let convertedValue = 0;

    if (currency == 'EUR') {
        convertedValue = value / 6.22;
    } else if (currency == 'USD') {
        convertedValue = value / 5.15;
    }

    return convertedValue;
}

function valueFormatter(value, currency) {
    const formattedValue = value.toLocaleString('pt-BR', {style: 'currency', currency: `${currency}`});

    return `<span>🤑</span> ${formattedValue} <span>🤑</span>`;
}

function animate(tag) {
    return tag.animate([
        { transform: 'translateY(-150px)' },
        { transform: 'translateY(0px)' }
    ], { duration: 500 });
}