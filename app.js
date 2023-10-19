const registro = require("./registro");

function main() {
  const usuario = registro.solicitarInformacionUsuario();

  if (usuario) {
    registro.escribirEnArchivo(usuario);

    const buscarNombre = usuario.nombre;
    registro.buscarUsuarioPorNombre(buscarNombre);
  }
}

main();
