console.time('cold-start');
const plainOptions = { headers: { "Server": "Bun" } };
const jsonOptions = { headers: { "Server": "Bun", "Content-Type": "application/json" } };

Bun.serve({
  port: 3000,
  reusePort: true,
  fetch(req) {
    const pathname = req.url.slice(req.url.indexOf("/", 8));

    if (pathname == "/json") {
      return new Response(JSON.stringify({ message: "Hello, World!" }), jsonOptions);
    }

    if (pathname == "/plaintext") {
      return new Response("Hello, World!", plainOptions);
    }

    return new Response("", { status: 404 })
  },
});

console.timeEnd('cold-start');
