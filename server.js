// server.js — serveur minimal pour le site Alviora
// Usage:
//   1) npm init -y
//   2) npm install express
//   3) node server.js
// Le site sera accessible sur http://localhost:3000

const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sert index.html, Style.css, Script.js et tout autre fichier
// placé dans le dossier "public"
app.use(express.static(path.join(__dirname, "public")));

// Route explicite pour la page d'accueil
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Alviora is running -> http://localhost:${PORT}`);
});