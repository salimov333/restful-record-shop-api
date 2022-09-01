import moment from "moment";
export const logger = (req, res, next) => {
    const time = moment().format('llll');
    console.log(req.method, req.path, res.statusCode, time);
    next();
}