const userCtrl = {};

const User = require('../models/User');



userCtrl.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

userCtrl.createUser = async (req, res) => {
    console.log("req.body");
    console.log(req.body);

    try {
        const { name } = req.body;
        const { mail } = req.body;
        const { password } = req.body;
        const  miles = 0;


        const newUser = new User({ name, mail, password, miles });
        console.log("newUser");
        console.log(newUser);
        await newUser.save();
        res.json('User created');
    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

userCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
};
userCtrl.logUser = async (req, res) => {
    console.log("entered userCtrl.logUser")
    const { mail } = req.body;
    const { password } = req.body;
    console.log("mail")
    console.log(mail)
    console.log("password")
    console.log(password)

    // passport.authenticate(mail, password)('local', { successRedirect: '/',
    // failureRedirect: '/login',
    // failureFlash: true })

let error = ''
    let sss = await User.findOne({ mail: mail }, function(err, user) {

            if (err) { return (err); }
            else if (!user) {
                console.log("!user");
                error = "Not a valid user"
                return (false);
            }
            else if (!user.validPassword(password)) {
                console.log("!user.validPassword(password)");
                error = "Not a valid Password"

                return (false);
            } else {
                console.log("user encountered");
                console.log(user);
        
                return (user);
            }
        });
        
    



      console.log("sss");
      console.log(sss);
      console.log("error");
      console.log(error);

      console.log("req.session");
      console.log(req.session);


    // await User.findByIdAndDelete(id);
    if(error == "") {

        res.json(sss);
    } else {
        res.json(error);

    }
}

module.exports = userCtrl;