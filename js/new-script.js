//changing color of <h2> element
const lightBlue = document.getElementsByTagName('h2');
for (const heading of lightBlue) {
    heading.style.color = 'lightCoral';
}
//change backgroundColor of a section
const bgColorChange = document.getElementById('bag-section');
bgColorChange.style.backgroundColor = 'lightgreen';

//change border-radius to 30 px
const bRadiuChange = document.getElementsByClassName('card');
for (const card of bRadiuChange) {
    card.style.borderRadius = '30px'
}

//function as a click-handler for a BUTTON
/* function clickHandler (showInConsole){
    console.log('I Love Coding');
}
 */
//Remove BUTTON on click
function disappear() {
    const remove = document.querySelectorAll('button.special-btn');
    remove.style.display = 'none';
}


//Task 7: Disable and Activate Button
document.getElementById('email-id').addEventListener('change', function (event) {
    const submitBtn = document.getElementById('btn-disabled');
    if (event.target.value == 'email') {
        console.log(event.target.value)
        submitBtn.removeAttribute('disabled', true);
        // submitBtn.setAttribute("class", "demoClass");
        console.log('i love')
    }
    else {
        submitBtn.setAttribute('disabled', true);
        console.log('oops')
    }
})

//Task 9: Double-click to change bgColor
function doubleClick() {
    const dblClick = document.getElementById('double-click');
    dblClick.style.backgroundColor = 'lightBlue';
}