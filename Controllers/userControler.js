const userDataBase = require("../Schema/User_schema");
const jwt = require("jsonwebtoken");
const { hashingPassword, comparePassword } = require("./Struc");
const secretKey = "Ecommerce";

const Register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    const existingUser = await userDataBase.findOne({ email: email });

    if (existingUser) {
      return res.send({
        success: true,
        msg: "User's email already on server...!!!",
        user: existingUser,
      });
    }

    const hashPassword = hashingPassword(password);

    //saving the data
    const tempObj = new userDataBase({
      name: name,
      Email: email,
      phone: phone,
      password: hashPassword,
    });

    const user = await tempObj.save();
    const token = jwt.sign({ email: email }, secretKey, { expiresIn: "7d" });

    return res.send({
      success: true,
      msg: "User Registerd Successfully",
      user: user,
      token: token,
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Error in Registration", err });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userDataBase.findOne({ email: email });

    if (!user) {
      return res.status(404).send({
        success: false,
        msg: "User is not Registerd Please Registered first",
      });
    }

    const matchingPassword = comparePassword(password, user.password);
    const token = jwt.sign({ email: email }, secretKey, { expiresIn: "7d" });

    if (matchingPassword) {
      return res.send({
        success: true,
        msg: "User Logged in Successfully",
        user: user,
        token: token,
      });
    }

    return res.status(200).send({ success: false, msg: "Password is Invalid" });

  }
  catch (err) {
    console.log(err);
    res.status(500).send({ success: false, msg: "Error in loging user ", err });
  }
};

module.exports = {
  Register,
  Login,
};
