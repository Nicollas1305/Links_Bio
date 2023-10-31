const themeSwitch = document.getElementById("switch");
const html = document.documentElement;
console.log(html);

const localTheme = localStorage.getItem("@NicolasLima/Theme");
console.log(localTheme);
if (localTheme) {
  if (localTheme === "dark") {
    html.classList.add("dark");
    themeSwitch.checked = true;
  } else {
    html.classList.remove("dark");
    themeSwitch.checked = false;
  }
} else {
  localStorage.setItem("@NicolasLima/Theme", "light");
}

themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  if (checked) {
    html.classList.add("dark");
    localStorage.setItem("@NicolasLima/Theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("@NicolasLima/Theme", "light");
  }
});

$(document).ready(function() {
  // Impede o envio do formulário padrão
  $('form.contact-form').on('submit', function(event) {
    event.preventDefault();

    // Exibir um diálogo/modal do Bootstrap
    $('#successModal').modal('show');

    // Limpar os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("msg").value = "";

    return false; // Impede que a página seja redirecionada
  });
});