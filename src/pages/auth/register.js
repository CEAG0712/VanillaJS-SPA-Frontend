class Register {
  constructor() {
    this.registrationForm = document.getElementById("registration-form");
    this.render();
  }

  addSubmitEventListener() {
    this.registrationForm.addEventListener(
      "submit",
      this.onSubmitRegisterForm.bind(this)
    );
  }

  async onSubmitRegisterForm(event) {
    event.preventDefault();
    const form = event.target;

    const payload = {
      name: form.querySelector("[name='name']").value,
      email: form.querySelector("[name='email']").value,
      password: form.querySelector("[name = 'password']").value,
      confirmPassword: form.querySelector("[name = 'confirmPassword']").value,
    };

    console.log(payload);
  }

  render() {
    this.addSubmitEventListener();
  }
}

export default Register;
