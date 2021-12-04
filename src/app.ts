import app from "./server";

const PORT = 3333;

app.listen(PORT, () => {
  console.log(`O servidor está rodando em: http://localhost:${PORT}`);
});
