import express from "express";

let articlesInfo = [
  {
    name: "aprenda-react",
    upVote: 0,
  },
  {
    name: "configure-react",
    upVote: 0,
  },
];

const app = express();

app.put("/api/article/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((a) => a.name === name);

  if (article) {
    article.upVotes += 1;
    res.send(
      `O artigo ${name} possui até o momento ${article.upVotes} voto (s)`
    );
  } else {
    res.send("Este artigo não existe");
  }
});

app.use(express.json());

app.post("/oi", (req, res) => {
  res.send(`Oi ${req.body.nome}`);
});

app.listen(8000, () => {
  console.log("Servidor sendo executado na porta 8000");
});
