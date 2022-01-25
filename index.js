const express = require("express");
const app = express();
const session = require("express-session");

if (process.env.NODE_ENV !== "production") {
  const livereload = require("livereload");
  const connectLivereload = require("connect-livereload");
  // Reload browser when saving frontend code
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(__dirname + "/public");

  // Reload the page when the server has started
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });

  app.use(connectLivereload());
}

app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "secret",
  })
);

// Static files
app.use(express.static("public", { index: false }));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});
