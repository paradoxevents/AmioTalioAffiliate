window.onload = () => {
  initContactForm()
}

function initContactForm() {
  const form = document.getElementById('signup-contact')
  form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const formData = new ContactData()
    formData.append('phone', form.phone.value)
    formData.append('email',form.email.value);
    form.reset()

    const settings = {
      async: true,
      crossDomain: true,
      url: 'https://paradoxmetaverse.api-us1.com/api/3/contact/sync',
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json'
      },
      processData: false,
      data: undefined
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
  })
}