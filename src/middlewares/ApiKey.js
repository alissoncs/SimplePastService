module.exports = () => {
  return (req, res, next) => {
    if (process.env.API_KEY && req.headers.apikey !== process.env.API_KEY) {
      return res.json({
        error: 'Invalid APIKEY. Please send correct header "apikey"',
      }).status(401);
    }
    next();
  }
}
