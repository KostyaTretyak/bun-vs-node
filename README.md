## bun-vs-node

Install [Bun](https://bun.sh):

```sh
curl -fsSL https://bun.sh/install | bash
```

Install deps:

```sh
bun install
```

Run any of `*.mjs` files. Install `wrk` and then check work:

```sh
wrk -H 'Connection: keep-alive' --latency -d 5 -c 256 --timeout 8 -t 4 http://localhost:3000/plaintext
```
