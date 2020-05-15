const scriptURL = 'https://script.google.com/macros/s/AKfycbx12JX27Eh3aOjHC6y_RSymSmv5281bJDrGbU1VsurGSmX05-Za/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})