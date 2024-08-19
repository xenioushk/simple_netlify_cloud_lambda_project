class SecretForm {
  constructor(parameters) {
    this.secretForm = document.querySelector(".secret_form")
    this.events()
  }

  events() {
    this.secretForm.addEventListener("submit", this.handleFormSubmission.bind())
  }

  handleFormSubmission(e) {
    e.preventDefault()
    alert("Submitted")
  }
}

export default SecretForm
