import express from "express";
import cors from "cors";

import usuariosRoutes from "./routes/usuarios.js";
import turnosRoutes from "./routes/turnos.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/usuarios", usuariosRoutes);
app.use("/api/turnos", turnosRoutes);

app.get("/", (req, res) => {
  res.send("API del Consultorio funcionando ");
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
