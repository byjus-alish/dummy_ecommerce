const express = require('express')
const router  = express.Router();

const {
    getAllUser,
    createUser,
    getUser,
    updateUser,
    deleteUser,
} = require('../controllers/user')


router.route('/').get(getAllUser).post(createUser)
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);


module.exports = router;