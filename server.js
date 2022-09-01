import app from "./src/app.js";
import dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();
const PORT = process.env.PORT || 3333;
//console.log(PORT);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));