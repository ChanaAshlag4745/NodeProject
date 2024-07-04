const { body, validationResult } = require('express-validator');

const validateUser = [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    body('email').isEmail().withMessage('Invalid email'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        res.send('User created successfully');
    }
]

module.exports = validateUser;