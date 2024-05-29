async function fetchCountryData() {
    const countryName = document.getElementById('countryInput').value;
    const countryInfo = document.getElementById('countryInfo');

    if (!countryName) {
        countryInfo.innerHTML = 'Por favor, digite o nome de um país.';
        return;
    }

    const apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('País não encontrado');
        }
        const data = await response.json();
        displayCountryData(data[0]);
    } catch (error) {
        countryInfo.innerHTML = 'Erro: ' + error.message;
    }
}

function displayCountryData(country) {
    const countryInfo = document.getElementById('countryInfo');
    countryInfo.innerHTML = `
        <h2>${country.name.common}</h2>
        <p><strong>Capital:</strong> ${country.capital}</p>    
        <p><strong>Região:</strong> ${country.region}</p>    
        <p><strong>População:</strong> ${country.population.toLocaleString()}</p>    
        <p><strong>Área:</strong> ${country.area.toLocaleString()} km²</p>
        <img src="${country.flags.png}" alt="Bandeira de ${country.name.common}" width="100">    
    `;
}