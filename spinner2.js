const spins = ["|  ", "/  ", "-  ", "\\  ", "|  ", "/  ", "-  ", "\\  ", "|  ", "\n"];
let delay = 100;
for (let spin of spins) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}`);
  }, delay);
  delay += 200;
}