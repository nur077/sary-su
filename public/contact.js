/*
const btn = document.querySelector("button");
const inputs = document.querySelector("form");

btn.addEventListener("click", () => {
  Email.send({
    Host: "sandbox.smtp.mailtrap.io",
    Username: "4f18493e2bc3df",
    Password: "a03ec90e558547",
    To: "nurdauletkenesbek@gmail.com",
    From: inputs.elements["email"].value,
    Subject: "КОНТАКТНАЯ ФОРМА",
    Body: inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["phone"].value + "<br>" + inputs.elements["email"].value
  }).then(msg => alert("СООБЩЕНИЕ УСПЕШНО ДОСТАВЛЕНО"));
});
*/

// @ts-ignore
const btn = document.querySelector('button')
const inputs = document.querySelector('form')
btn.addEventListener('click', () => {

    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value).trim()
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("ЗАПОЛНИТЕ ВСЕ ПОЛЯ")
        return
    }
    Email.send({
        Host: "sandbox.smtp.mailtrap.io",
        Username: "4f18493e2bc3df",
        Password: "a03ec90e558547",
        To: "nurdauletkenesbek@gmail.com",
        From: email,
        Subject: "КОНТАКТНАЯ ФОРМА",
        Body: msg + "<br>" + name + "<br>" + phone
    }).then(() => alert("СООБЩЕНИЕ УСПЕШНО ДОСТАВЛЕНО"))
})
