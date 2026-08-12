const express = require('express');
const router = express.Router();
const {
  createItem,
  getItems,
  getItemById,
} = require('../controllers/itemController');

router.post('/', createItem);
router.get('/', getItems);
router.get('/:id', getItemById);

module.exports = router;
