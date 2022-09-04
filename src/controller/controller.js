const userService = require('../service/login');

exports.signup = async(req,res) =>{
    console.log(req.payload);

    const user = await userService.signup(req.payload)
    console.log(user);

    return res.response(user).code(200);
}

exports.signin = async(req,res) =>{
    const user = await userService.signin(erq.payload)
    console.log(user)

    return res.response(user).code(200)
}