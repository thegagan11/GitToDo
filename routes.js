// routes.js

const express = require('express');
const router = new express.Router();
const items = require('./fakeDb');

router.get('/items', (req, res) => {
    return res.json(items);
});

router.post('/items', (req, res) => {
    const newItem = { name: req.body.name, price: req.body.price };
    items.push(newItem);
    return res.json({ added: newItem });
});

router.get('/items/:name', (req, res) => {
    const foundItem = items.find(item => item.name === req.params.name);
    return res.json(foundItem);
});

router.patch('/items/:name', (req, res) => {
    const foundItem = items.find(item => item.name === req.params.name);
    if (foundItem) {
        foundItem.name = req.body.name || foundItem.name;
        foundItem.price = req.body.price || foundItem.price;
        return res.json({ updated: foundItem });
    }
    return res.json({ message: "Item not found!" });
});

router.delete('/items/:name', (req, res) => {
    const index = items.findIndex(item => item.name === req.params.name);
    if (index !== -1) {
        items.splice(index, 1);
        return res.json({ message: "Deleted" });
    }
    return res.json({ message: "Item not found!" });
});

module.exports = router;
