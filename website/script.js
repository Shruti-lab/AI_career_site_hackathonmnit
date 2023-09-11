document.addEventListener("DOMContentLoaded", function() {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const careerOptions = data;


            for (const option in careerOptions) {
                console.log(option);
                console.log(careerOptions.hasOwnProperty(option));
                if (careerOptions.hasOwnProperty(option)) {
                    const optionData = careerOptions[option];
                    const optionElement = document.getElementById(option);
                    console.log(optionElement);
       
                    const optionHTML = `
                        <h2>${optionData.occupation}</h2>
                        <h3>Hard Skills:</h3>
                        <ul>${optionData['hard-skills'].map(skill => `<li>${skill}</li>`).join('')}</ul>
                        <h3>Soft Skills:</h3>
                        <ul>${optionData['soft-skills'].map(skill => `<li>${skill}</li>`).join('')}</ul>
                        <p>${optionData['daily-work']}</p>
                    `;
       
                    optionElement.innerHTML = optionHTML;
                }
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});


