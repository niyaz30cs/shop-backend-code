const bcrypt = require("bcrypt");

const hashingPassword = (password)=>{
    try
    {
        const saltround = 10;
        const hashedPassword = bcrypt.hashSync(password, saltround);
        return hashedPassword;
    }
    catch(err)
    {
        console.log(`Error occurse in hashing the password ${err}`);
    }
}

const comparePassword = (password, hashingPassword)=>{
    const compare = bcrypt.compareSync(password,hashingPassword);
    return compare;

}

module.exports = {
    hashingPassword,
    comparePassword
}