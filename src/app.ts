import app from "./server";
require('dotenv').config( '.env' );

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`O servidor está rodando em: http://localhost:${PORT}`);
});
