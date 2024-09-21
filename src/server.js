import express from "express";

const app = express();

app.use(express.json());

app.post("/oi", (req, res) => {
  res.send(`Oi ${req.body.nome}`);
});
app.listen(8000, () => {
  console.log("Servidor sendo executado na porta 8000");
});
