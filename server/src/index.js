const express = require('express');
const bodyParser = require('body-parser');
const { getConnectionInstance } = require('./connection');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.get('/:lang', (req, res) => {
    const { lang } = req.params;
    const conn = getConnectionInstance();
    conn.connect();
    conn.query(`select title, slug from tutorials.${lang};`, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    })
});
app.get('/:lang/:slug', (req, res) => {
    const { lang, slug } = req.params;
    const conn = getConnectionInstance();
    conn.connect();
    console.log(`select * from tutorials.${lang} where slug = '${slug}'`)
    conn.query(`select * from tutorials.javascript where slug = '${slug}';`, function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    })
});
app.listen(8080, () => {
    console.log("running port on 8080");
});

