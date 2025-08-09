const MAX_AMIGOS = 20;
let names = [];
let sorteados = [];

// Cargar datos guardados al iniciar
window.onload = () => {
  const storedNames = localStorage.getItem("names");
  const storedSorteados = localStorage.getItem("sorteados");

  if (storedNames) names = JSON.parse(storedNames);
  if (storedSorteados) sorteados = JSON.parse(storedSorteados);

  actualizarLista();
  actualizarSorteados();
  actualizarContador();
};

function guardarDatos() {
  localStorage.setItem("names", JSON.stringify(names));
  localStorage.setItem("sorteados", JSON.stringify(sorteados));
}

function actualizarContador() {
  const faltan = names.length;
  const restantes = faltan > 0 ? faltan : 0;
  document.getElementById("contador").textContent =
    `Amigos cargados: ${names.length} / ${MAX_AMIGOS} | Sorteos restantes: ${restantes}`;
}

function agregar() {
  const input = document.getElementById("input-name");
  const name = input.value.trim();
  const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (name === "") {
    return Swal.fire("Nombre vacío", "Por favor ingresá un nombre válido.", "warning");
  }
  if (!regex.test(name)) {
    return Swal.fire("Nombre inválido", "Solo se permiten letras y espacios.", "error");
  }
  if (name.length > 10) {
    return Swal.fire("Nombre muy largo", `Máximo 10 caracteres por nombre.`, "warning");
  }
  if (name.length < 3) {
    return Swal.fire("Nombre muy corto", `Minimo 3 caracteres por nombre.`, "warning");
  }
  if (names.some(n => n.toLowerCase() === name.toLowerCase())) {
    return Swal.fire("Duplicado", `"${name}" ya fue agregado.`, "info");
  }
  if (names.length >= MAX_AMIGOS) {
    return Swal.fire("Límite alcanzado", `No podés agregar más de ${MAX_AMIGOS} amigos.`, "error");
  }

  names.push(name);
  input.value = "";
  actualizarLista();
  actualizarContador();
  guardarDatos();
}

function actualizarLista() {
  const list = document.getElementById("list-names");
  list.innerHTML = names.map(n => `<li>${n}</li>`).join("");
}

function actualizarSorteados() {
  const listaSorteados = document.getElementById("listaSorteados");
  listaSorteados.innerHTML = sorteados.map(n => `<li>${n}</li>`).join("");
}

function sortear() {
  if (names.length < 3 && sorteados.length === 0) {
    return Swal.fire("Muy pocos participantes", "Agregá al menos 3 amigos para sortear.", "warning");
  }
  if (names.length === 0) {
    return Swal.fire("Sorteo finalizado", "Ya no quedan más nombres para sortear.", "info");
  }

  const indice = Math.floor(Math.random() * names.length);
  const ganador = names.splice(indice, 1)[0];
  sorteados.push(ganador);

  actualizarLista();
  actualizarSorteados();
  actualizarContador();
  guardarDatos();

  Swal.fire({
    title: "🎉 ¡Amigo sorteado!",
    text: `El nombre sorteado es: ${ganador}`,
    icon: "success",
    didOpen: lanzarConfeti
  });
}

function reiniciar() {
  if (names.length === 0 && sorteados.length === 0) {
    return Swal.fire("Nada que reiniciar", "La lista ya está vacía.", "info");
  }

  Swal.fire({
    title: "¿Reiniciar?",
    text: "Esto eliminará todos los nombres cargados y sorteados.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, reiniciar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      names = [];
      sorteados = [];
      actualizarLista();
      actualizarSorteados();
      actualizarContador();
      guardarDatos();
      Swal.fire("Reiniciado", "La lista fue vaciada correctamente.", "success");
    }
  });
}

// 🎊 Confeti
function lanzarConfeti() {
  const duration = 2000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) return clearInterval(interval);

    const particleCount = 50 * (timeLeft / duration);
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
    }));
  }, 250);
}
