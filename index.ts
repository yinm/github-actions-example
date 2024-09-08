console.log("hello");

// @ts-expect-error
const secretValue = process.env.SECRET_VALUE;
console.log(secretValue); // It's only experiment. Don't do this in production code.

console.log(
  secretValue === "dangerous!!!"
    ? "You found the secret value...!"
    : "It is still secret!"
);
