const langToggle = document.getElementById("lang-toggle");
let currentLang = "en";

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "es" : "en";
  updateLanguage();
});

function updateLanguage() {
  document.querySelectorAll("[data-en]").forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  document.getElementById("about-text").innerHTML =
    currentLang === "en"
      ? 'Professional recruiting expert with 7 years of experience in high scalable markets. Currently working as a Sr. Recruiter at Google, previously a Recruiting Manager at Capital One, and other international companies. You can visit my <a href="https://www.linkedin.com/in/gustavo-hern%C3%A1ndez-b26292195" target="_blank">LinkedIn profile here</a>.'
      : 'Profesional de reclutamiento con más de 7 años de experiencia en mercados internacionales. Actualmente trabajo como Sr. Recruiter para Google, y anteriormente como Recruiting Manager para Capital One, así como otras compañías internacionales. Puedes visitar mi <a href="https://www.linkedin.com/in/gustavo-hern%C3%A1ndez-b26292195" target="_blank">perfil de LinkedIn aquí</a>.';

  document.getElementById("title").textContent =
    currentLang === "en" ? "Career Consultant" : "Consultor de carrera";

  langToggle.textContent = currentLang === "en" ? "ES" : "EN";
}