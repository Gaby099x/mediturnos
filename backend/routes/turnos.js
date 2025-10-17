import express from "express";
const router = express.Router();

let turnos = [
  { id: 1, paciente: "Gabriel", medico: "Dr. Jose", fecha: "2025-10-20", hora: "10:00" },
];

router.get("/", (req, res) => {
  res.json(turnos);
});

router.post("/", (req, res) => {
  const { paciente, medico, fecha, hora } = req.body;
  const nuevoTurno = { id: turnos.length + 1, paciente, medico, fecha, hora };
  turnos.push(nuevoTurno);
  res.json({ mensaje: "Turno agregado", turno: nuevoTurno });
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  turnos = turnos.filter(turno => turno.id !== id);
  res.json({ mensaje: `Turno ${id} eliminado` });
});

export default router;
