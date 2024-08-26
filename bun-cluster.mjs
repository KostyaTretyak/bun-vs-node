const cpus = navigator.hardwareConcurrency;
const buns = new Array(cpus);

if (cpus > 1) {
  for (let i = 0; i < cpus; i++) {
    buns[i] = Bun.spawn(["bun", "bun.mjs"], {
      stdio: ["inherit", "inherit", "inherit"],
      env: { ...process.env },
    });
  }
} else {
  await import('./bun.mjs');
}

function kill() {
  for (const bun of buns) {
    bun.kill();
  }
}

process.on("SIGINT", kill);
process.on("exit", kill);
