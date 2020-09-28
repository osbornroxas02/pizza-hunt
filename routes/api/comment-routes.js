const router = require('express').Router();
//import the methods from comment-controller
const {
    addComment,
    removeComment,
    addReply,
    removeReply
} = require('../../controllers/comment-controller');

// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

// /api/comments/<pizzaId>/<commentId>
router
    .route('/:pizzaId/:commentId')
    .put(addReply)
    .delete(removeComment)

module.exports = router;