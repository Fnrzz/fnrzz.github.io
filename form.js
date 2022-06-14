const scriptURL = 'https://script.google.com/macros/s/AKfycbytqBtvIE5DRGagYLdwvyBa2wwRi4aqW5HqUAjnmVhj7ZengLZP3Zd8vqiXe5CtV1ZU/exec'
const form = document.forms['submit-to-google-sheet']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const contactAlert = document.querySelector('.contact-alert')

form.addEventListener('submit', e => {
  e.preventDefault()
  btnLoading.classList.toggle('d-none')
  btnKirim.classList.toggle('d-none')
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => 
      {
        console.log('Success!', response)
        btnLoading.classList.toggle('d-none')
        btnKirim.classList.toggle('d-none')
        contactAlert.classList.toggle('d-none')
        form.reset()
      }
    )
    .catch(error => console.error('Error!', error.message))
})