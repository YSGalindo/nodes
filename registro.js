const fs = require("fs");
const path = require("path");

function solicitarInformacionUsuario() {
  const readline = require("readline-sync");
  const nombre = readline.question("Ingrese su nombre: ");
  const edad = parseInt(readline.question("Ingrese su edad: "));

  if (!nombre || isNaN(edad) || edad <= 0) {
    console.log(
      "Entrada inválida. Por favor, ingrese un nombre válido y una edad mayor que cero."
    );
    return null;
  }

  return { nombre, edad };
}

function escribirEnArchivo(usuario) {
  const usuarios = JSON.parse(
    fs.readFileSync(path.join(__dirname, "usuarios.json"), "utf8")
  );
  usuarios.push(usuario);
  fs.writeFileSync(
    path.join(__dirname, "usuarios.json"),
    JSON.stringify(usuarios)
  );
  console.log("Usuario registrado correctamente.");
}

function buscarUsuarioPorNombre(nombre) {
  const usuarios = JSON.parse(
    fs.readFileSync(path.join(__dirname, "usuarios.json"), "utf8")
  );
  const usuario = usuarios.find((u) => u.nombre === nombre);
  if (usuario) {
    console.log(`Usuario encontrado: ${usuario.nombre}, Edad: ${usuario.edad}`);
  } else {
    console.log("Usuario no encontrado.");
  }
}

module.exports = {
  solicitarInformacionUsuario,
  escribirEnArchivo,
  buscarUsuarioPorNombre,
};
