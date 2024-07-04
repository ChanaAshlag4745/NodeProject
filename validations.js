const { body, validationResult } = require('express-validator');

// Validate user details before creating a new user
const validateUser = [
    body('name').isLength({ min: 3 }).withMessage('Name must be at least 3 characters'),
    body('phone').notEmpty().withMessage('Phone number is required'),
    body('email').isEmail().withMessage('Invalid email'),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Process the request if validations pass
        // Create a new user with the provided details
        res.send('User created successfully');
    }
]

module.exports = validateUser;