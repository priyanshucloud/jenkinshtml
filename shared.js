let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let modal_action_negative = document.querySelector('.modal__action--negative');
let selectPlanButtons = document.querySelectorAll('.plan button');
let toggleButton = document.querySelector('.toggle-button');
let mobileNav = document.querySelector('.mobile-nav');
//console.dir(selectPlanButtons);
//Add event listener to the each button
//Here need to use the for loop to iterate through each button
for (let i = 0; i < selectPlanButtons.length; i++) {
    //Add two arguments need to pass to addEventListener
    //first- event name that we to need to listen to
    //Second = the code or function that need to execute when that event occurs
    selectPlanButtons[i].addEventListener('click', function () {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className =  'open'; // This will overwrite the complete class list 
        // Instead will use classList to add and remove classes of element
        modal.classList.add('open');
        backdrop.classList.add('open');

    })
}

// //when No button is clicked modal pop-up will not display
if (modal_action_negative) {
    modal_action_negative.addEventListener('click', function () {
        // modal.style.display = 'none';
        // backdrop.style.display = 'none';
        modal.classList.remove("open");
        backdrop.classList.remove("open");
    })
}
//when outside of pop-window click the it will not display
backdrop.addEventListener('click', function () {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    // mobileNav.style.display = 'none';
    if (modal) {
        modal.classList.remove("open");
    }
    backdrop.classList.remove("open");
    mobileNav.classList.remove("open");
});

toggleButton.addEventListener('click', function () {
    backdrop.classList.add('open');
    mobileNav.classList.add('open');
})

