//Dependencias
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express();
const cervezasRouter = require("./cervezasRouter");
const router = require("express").Router();
const path = require("path");
const staticRoute = path.join(__dirname, "public");
const bodyParser = require("body-parser");

//Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});
app.use("/static", express.static(staticRoute));

app.use("/api/cervezas", cervezasRouter);
//Rutas y enrutadores
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//app es la instancia de nuestro servicio web
//Las llamadas son:
//app.VERBO_HTTP(ruta, handler function)

app.get("/bancos", function (req, res) {
  res.send("Aqui deberian aparecer los bancos");
});

app.get("/contactar", function (req, res) {
  res.send("Pagina para contactar");
});

app.listen(3000, function () {
  console.log(`Server running on port 3000`);
});
