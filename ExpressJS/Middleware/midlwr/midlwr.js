module.exports = reqFilter = (req, resp, next) => {
  if (!req.query.age) {
    resp.send("Please Provide Age First");
  } else if (req.query.age < 18) {
    resp.send("Sorry, You Can't Access the Page Because You are in under Age");
  } else {
    next();
  }
};
