import express from "express";
const router = express.Router();

let usuarios = [
  { id: 1, nombre: "Gabriel", email: "gabriel@gmail.com" },
];

router.get("/", (req, res) => {
  res.json(usuarios);
});

router.post("/", (req, res) => {
  const { nombre, email } = req.body;
  const nuevoUsuario = { id: usuarios.length + 1, nombre, email };
  usuarios.push(nuevoUsuario);
  res.json({ mensaje: "Usuario agregado", usuario: nuevoUsuario });
});

export default router;
