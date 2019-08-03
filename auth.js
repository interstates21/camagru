
function toggleFormElements(elem, bDisabled) { 
    var inputs = document.querySelectorAll(`${elem} input`); 
    for (var i = 0; i < inputs.length; i++) { 
        inputs[i].disabled = bDisabled;
    }
    var btn = document.querySelector(`${elem} button`);
    btn.disabled = bDisabled;
}

const switcher = document.querySelector('#switcher');
let posRight = '10vw';

toggleFormElements('#inactive-inner', true);
toggleFormElements('#active-inner', false);

function switchAuthType() {
    const active = document.querySelector('#active-inner');
    const inactive = document.querySelector('#inactive-inner');

    active.id = "inactive-inner";
    inactive.id = 'active-inner';

    posRight = posRight === '10vw' ? '90vw' : '10vw';
    switcher.style.right = posRight;
    toggleFormElements('#inactive-inner', true);
    toggleFormElements('#active-inner', false);
}

switcher.addEventListener("click", switchAuthType);

const submit = document.querySelector('#active-inner button');

// console.log(submit);
// submit.addEventListener('click', () => {window.location.href='/main.html'});