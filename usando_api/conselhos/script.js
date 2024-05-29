document.getElementById('fetchAdviceBtn').addEventListener('click', fetchRandomAdvice);

function fetchRandomAdvice() {
    const url = 'https://api.adviceslip.com/advice';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            displayAdviceInfo(data.slip);
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            displayError(error);
        });
}

function displayAdviceInfo(data) {
    const adviceInfoDiv = document.getElementById('adviceInfo');
    adviceInfoDiv.innerHTML = `<p><strong>Advice:</strong> ${data.advice}</p>`;
}

function displayError(error) {
    const adviceInfoDiv = document.getElementById('adviceInfo');
    adviceInfoDiv.innerHTML = `<p>Error: ${error.message}</p>`;
}