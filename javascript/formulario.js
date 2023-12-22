const $form = document.querySelector('#form')
const $buttonMailto = document.querySelector('#destino')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  $buttonMailto.setAttribute('href', `mailto:exiplast.pvc@gmail.com?subject=Nombre ${form.get('name')} &body=${form.get('message')}`)
  $buttonMailto.click()
}
