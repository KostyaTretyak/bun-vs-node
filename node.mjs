console.time("cold-start");
import { createServer } from "node:http";

const server = createServer((req, res) => {
  if (req.url == "/json") {
    res.setHeader("Server", "Nod");
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, World!" }));
    return;
  }
  if (req.url == "/plaintext") {
    res.setHeader("Server", "Nod");
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World!");
    return;
  }
  res.setHeader("Server", "Nod");
  res.writeHead(404);
  res.end();
});

server.listen(3000, "127.0.0.1", () => {
  console.timeEnd("cold-start");
});
