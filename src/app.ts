import app from "./server";
require('dotenv').config( '.env' );

const PORT = process.env.PORT || 3333;

const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  console.log(`O servidor está rodando em: http://${HOST}:${PORT}`);
});
