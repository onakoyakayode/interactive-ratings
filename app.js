//To get the buttons
const button = document.querySelectorAll('.rating-buttons button');

let feedbackMsg = document.querySelector('.feedback-rating p');

let submitButton = document.querySelector('.submit-button');

let mainWrapper = document.querySelector('.feedback-wrapper');

let feedbackWrapper = document.querySelector('.feedback-message');

button.forEach((feedback) => {
    feedback.addEventListener('click', (event) => {
        let rating = event.target.textContent;
        button.forEach((node) => {
            node.classList.remove('active-button');
        });
        feedbackMsg.innerHTML = `You selected ${rating} out of 5`

        event.target.classList.add('active-button');
    })
});


submitButton.addEventListener('click', (event) => {
    button.forEach((feedback) => {
        feedback.addEventListener('click', (event) => {
            let rating = event.target.textContent;
            button.forEach((node) => {
                node.classList.remove('active-button');
            });
            feedbackMsg.innerHTML = `You selected ${rating} out of 5`
    
            event.target.classList.add('active-button');
        })
    });
    mainWrapper.style.display = 'none';
    feedbackWrapper.style.display = 'block'
})