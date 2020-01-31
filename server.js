const http = require("http");
const socket = require("socket.io");
const app = require("./app");

const normalize = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  } else {
    return false;
  }
};

const port = normalize(process.env.PORT || 5000);
app.set("port", port);

const errorHandler = error => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const address = server.address;
  const bind = typeof address === "string" ? "pipe " + address : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.log(bind + "requires elevated privileges.");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.log(bind + "is already in use.");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const server = http.createServer(app);
server.on("error", errorHandler);

server.on("listening", () => {
  const address = server.address();
  const bind = typeof address === "string" ? "pipe" + address : "port " + port;
  console.log("listening on " + bind);
});

server.listen(port);

const io = socket(server);

io.on("connection", socket => {
  socket.on("startChat", data => {
    socket.join(data.conversationID);
  });

  socket.on("sendMessage", data => {
    io.sockets
      .in(data.conversationID)
      .emit("newMessage", { message: data.message });
  });

  socket.on("endChat", data => {
    socket.leave(data.conversationID);
  });
});
