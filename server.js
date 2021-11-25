require("dotenv").config();
const { app } = require("./scr/app");

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
