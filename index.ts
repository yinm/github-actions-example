console.log("hello");
// @ts-expect-error
console.log(process.env.SECRET_VALUE); // It's only experiment. Don't do this in production code.
