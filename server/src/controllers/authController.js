const User = require('../Models/UserModel');
const bcrypt = require('bcryptjs');

const login = ('/login', async (req, res) => { 
    try{
        const { email, password } = req.body;
        const user = await User.findOne({email});
        // console.log(email, password);
        // console.log(user);

        if(!user) {
            res.status(404).json({message: 'User not found.'});
            return;
        }
        const auth = await bcrypt.compare(password, user.password);

        if(!auth){
            res.status(400).json({message: 'Login failed'});
            return;
        }
        res.status(201).json({message: 'Login success'});
    } catch(e){
        console.log(e.message);
    }
})

const signUp = ('/signup', async (req, res, next) => { 
    try {
        const { email } = req.body;
        const existingUser = await User.findOne({email});
        console.log(existingUser);

        if(existingUser) {
            res.status(400).json({message: 'User already exists.'});
            return;
        }

        console.log(req.body);
        await User.create(req.body);
        res.status(201).json({message: 'User created'});
        next();
    } catch(e){
        res.status(400).json({ message: e.message });
    }
})

module.exports = { login, signUp };