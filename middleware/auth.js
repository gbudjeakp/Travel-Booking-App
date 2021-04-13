const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) throw new Error('Unauthenticated');

    const { id } = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOne({ _id: id });

    if (!user) throw new Error('Unauthenticated');

    res.locals.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthenticated' });
  }
};
