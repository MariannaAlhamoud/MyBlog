// Function to generate a random number between 1 and 6236
function getRandomNumber() {
    const min = 1;       // Minimum value
    const max = 6236;    // Maximum value
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

// Example usage
const randomNumber = getRandomNumber();
console.log(randomNumber);


// URL of the API endpoint
const apiUrl = `https://api.alquran.cloud/v1/ayah/${randomNumber}`;

// Fetch data from the API
fetch(apiUrl)
    .then(response => {
        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON data
    })
    .then(data => {
        console.log(data); // Handle the data from the API
        console.log(data.data.text);
        document.getElementById('qurancontainer').innerHTML=data.data.text;

    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

    
    