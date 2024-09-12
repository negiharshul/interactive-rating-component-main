function ratingButton(rating){
    result = rating;

    const ratingElement = document.querySelector(`.rating-button-${rating}`);
    if (ratingElement == null) {
        const ratingElement = document.querySelector(`.after-click-${rating}`);
        ratingElement.classList.add(`rating-button-${rating}`);
    } else {
        ratingElement.classList.add(`after-click-${rating}`);
        ratingElement.classList.remove(`rating-button-${rating}`);
        console.log(lastRating);
    }
    

}

function submitButton() {
    document.querySelector('.star-icon').remove();
    document.querySelector('.heading').remove();

    document.querySelector('.description').innerHTML = `<p class="user-ratings">You selected ${result} out of 5</p>`;
    document.querySelector('.submit-button').classList.add('remove-button');
    document.querySelector('.ratings').classList.add('ratings2');
    document.querySelector('.ratings').innerHTML = `<p class="greetings">Thank you!</p>`;
    document.querySelector('.submit-button').remove();
    const node = document.createElement("p");
    const textnode = document.createTextNode("We appreciate you taking the time to give rating. If you ever need more support. Please hesitate to get in touch!");
    node.appendChild(textnode);
    node.classList.add("description2");
    document.querySelector(".container").appendChild(node);

}