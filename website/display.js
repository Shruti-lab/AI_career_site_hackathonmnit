function displayRadioValue() {
    var ele = document.getElementsByName('science_domain');
    var domain;

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked){
            domain = ele[i].value;
        }
    }

    if (domain) {
        // Assuming you have a function to send data to the OpenAI API
        sendToOpenAI(domain);
    } else {
        alert("Please select a domain.");
    }
}

function sendToOpenAI(domain) {
    // Assuming you have a function to send data to the OpenAI API
    // You would put your API call code here
    // For example:
    fetch('https://api.openai.com/v1/complete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            prompt: 'Given the selected domain is ' + domain + ',...',
            max_tokens: 50,
            temperature: 0.8,
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}


