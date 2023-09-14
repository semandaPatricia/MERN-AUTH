const test = require('../models/user.model.js') ;

module.exports = {
    getUser:async (req, res) => {
        try {
            const test = await User.find({ user: req.user.id })
            res.json( 'API is working!')

        } catch (error) {
            console.log(err);
        }
    }
}
   