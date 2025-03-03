// Obtener los contenedores
let contenedorPersonajes = document.getElementById("personajes"); // Contenedor para personajes
let contenedorEpisode = document.getElementById("episode"); // Contenedor para episodios
swal("WELCOME!", "THIS WEB SITE THE Rick and Morty", "success");
// Función para mostrar personajes
function mostrarPersonajes() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((elementos) => {
        const contenedorCreado = document.createElement("div");
        contenedorCreado.classList.add("personaje");

        contenedorCreado.innerHTML = `
          <h2>${elementos.name}</h2>
          <img src="${elementos.image}" alt="${elementos.name}">
          <h4>${elementos.episode.length} episodes</h4>
          <h4>${elementos.species} species</h4>
          <h4>${elementos.status} status</h4>
        `;

        contenedorPersonajes.appendChild(contenedorCreado);
      });
    })
    .catch((error) => console.log("Error al cargar los personajes:", error));
}

// Función para mostrar episodios
function mostrarEpisodios() {
  fetch("https://rickandmortyapi.com/api/episode")
    .then((response) => response.json())
    .then((data) => {
      data.results.forEach((elementos) => {
        const contenedorAuxiliar = document.createElement("div");
        contenedorAuxiliar.classList.add("episode");

        contenedorAuxiliar.innerHTML = `
          <h2>${elementos.name}</h2>
          <h4>Day of Production: ${elementos.air_date}</h4>
        `;

        contenedorEpisode.appendChild(contenedorAuxiliar);
      });
    })
    .catch((error) => console.log("Error al cargar los episodios:", error));
}

// Llamar las funciones cuando la página cargue
document.addEventListener("DOMContentLoaded", () => {
  mostrarPersonajes();
  mostrarEpisodios();
});

// Obtener el botón de cambio de tema
const themeToggleButton = document.getElementById("theme-toggle");

// Verificar si hay una preferencia guardada en localStorage
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggleButton.textContent = "Cambiar a Modo Claro";
} else {
  document.body.classList.remove("dark-mode");
  themeToggleButton.textContent = "Cambiar a Modo Oscuro";
}

// Función para alternar entre los modos
themeToggleButton.addEventListener("click", () => {
  // Alternar la clase dark-mode
  document.body.classList.toggle("dark-mode");

  // Cambiar el texto del botón dependiendo del modo
  if (document.body.classList.contains("dark-mode")) {
    themeToggleButton.textContent = "Cambiar a Modo Claro";
    localStorage.setItem("theme", "dark"); // Guardar preferencia en localStorage
  } else {
    themeToggleButton.textContent = "Cambiar a Modo Oscuro";
    localStorage.setItem("theme", "light"); // Guardar preferencia en localStorage
  }
});
