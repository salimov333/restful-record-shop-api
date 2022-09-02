import dotenv from "dotenv" // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

dotenv.config();

const auth = (req, res, next) => {
    const { username, password } = req.query;
    const loginData = {
        username: process.env.USER_NAME,
        password: process.env.PASSWORD
    };
    if (!username || !password) {
        res.status(401).send("Unauthenticated. You must enter your username and password.");
    } else {
        if (username != loginData.username || password != loginData.password) {
            res.status(401).send("username or password not valid");
        } else {
            next();
        }

    }
};
export default auth;