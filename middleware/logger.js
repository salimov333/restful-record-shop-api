import moment from "moment";
export const logger = (req, res, next) => {
    const time = moment().format('llll');
    res.on('finish', () => {
        console.log(req.method, req.path, res.statusCode, time);
    });
    next();
}