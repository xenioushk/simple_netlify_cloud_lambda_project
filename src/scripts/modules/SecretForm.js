import axios from "axios"

class SecretForm {
  constructor(parameters) {
    this.secretForm = document.querySelector(".secret_form")
    this.cotentArea = document.querySelector(".content-area")
    this.passwordField = document.querySelector("#password")
    this.passwordField.focus()
    this.events()
  }

  events() {
    this.secretForm.addEventListener("submit", (e) => {
      e.preventDefault()
      this.handleFormSubmission()
    })
  }

  handleFormSubmission(e) {
    axios
      .post("https://snclp.netlify.app/.netlify/functions/secret-area", {
        password: this.passwordField.value,
      })
      .then((response) => {
        this.secretForm.remove()
        this.cotentArea.innerHTML = response.data
      })
      .catch((error) => {
        this.cotentArea.innerHTML = `Invalid password!`
        this.passwordField.value = ""
        this.passwordField.focus()
      })
  }
}

export default SecretForm
