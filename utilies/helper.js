const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
const fMsg = async(res,msg="success",result=[]) => {
    res.status(200).json({
        con:true,
        msg,
        result
    })
}



module.exports = {
    encode : password => bcrypt.hashSync(password),
    compare : (plain,hash) => bcrypt.compareSync(plain,hash),
    makeToken : payload => jwt.sign(payload,process.env.SECRET_TOKEN,{expiresIn:'1h'}),
    fMsg
}