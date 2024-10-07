const User = require('../models/userModel');

const getUsers = (req, res) => {
    User.getAllUsers((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json(results);
        }
    });
};

module.exports = {
    getUsers
};
