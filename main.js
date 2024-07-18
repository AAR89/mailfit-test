const submitBtn = document.querySelector('.banner_submit-button')
const shopBtn = document.querySelector('.shop-button');

function handleClick() {
    console.log('submit button clicked');
}

submitBtn.addEventListener('click', handleClick);
shopBtn.addEventListener('click', handleClick);

