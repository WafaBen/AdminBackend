const db = require("../models");
const adminTC = db.adminTC;
checkDuplicateadminTCnameOrEmail = (req, res, next) => {
  console.log("hello**********************************************verify****\n");
  // adminTCname
  adminTC.findOne({
    where: {
      email: req.body.email
    }
  }).then(adminTC => {
    console.log("jjjjjjjjj");
    if (adminTC) {
      res.status(400).send({
        message: "Failed! adminTCname is already in use!"
      });
      return;
    }else{
      res.status(200).send({
        message: "Fkkkkkkkkkk!"
      });
      return;
    }
  
  });
};
const verifySignUp = {
  checkDuplicateadminTCnameOrEmail: checkDuplicateadminTCnameOrEmail,
};
module.exports = verifySignUp;
