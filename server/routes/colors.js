const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json("GET /colors");
});

router.get('/:name', (req, res) => {
    const name = req.params.name;
    res.json(`GET /colors/${name}`);
});

router.post('/:name/css-styles', (req, res) => {
    res.json(`POST /colors/${req.params.name}/css-styles`);
});

router.delete('/:name/css-styles/:style', (req, res) => {
    const name = req.params.name;
    const style = req.params.style;
    res.json(`DELETE /colors/${name}/css-styles/${style}`);
});

module.exports = router;
