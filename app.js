//To get the buttons
const button = document.querySelectorAll('.rating-buttons button');

//The element to display the feedback message
let feedbackMsg = document.querySelector('.feedback-rating p');

//Submit Button
let submitButton = document.querySelector('.submit-button');

//Main Wrapper div
let mainWrapper = document.querySelector('.feedback-wrapper');

//Feedback div
let feedbackWrapper = document.querySelector('.feedback-message');



//to implement active state to the buttons
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

//To get a feedback using DOM element.
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