import https from "https";
import chalk from "chalk";

const getJoke = () => {
  const url = "https://official-joke-api.appspot.com/random_joke";

  https.get(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      const joke = JSON.parse(data);
      console.log(`Here is a random ${joke.type} joke for you: `);
      console.log(chalk.blue(`${joke.setup}`));
      console.log(chalk.blue.bgBlue.bold(`${joke.punchline}`));
    });

    response.on("error", (error) => {
      console.log(chalk.red(`Error: ${error}`));
    });
  });
};

getJoke();
