import path from "path";
import fs from "fs";

const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default async function handler(req, res) {
  const jsonFile = path.resolve("./", "houses.json");
  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const houses = JSON.parse(readFileData).houses;
    if (!houses) {
      res.status(404).send("Error: Request failed with status code 404");
    } else {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(houses, null, 2));
      console.log("GET /api/houses  status: 200");
    }
  } catch (e) {
    console.log("/api/houses error:", e);
  }
}
