const express = require("express");
const mysql = require('mysql2');
const app = express();
const jsonParser = express.json();

const localDb = {
    host: "localhost",
    user: "root",
    password: "sqldataBase",
    database: "mcas"
};

const dataBase = mysql.createConnection(localDb);

//add beat to table
app.post('/api/beat/post/add', jsonParser, (request, response) => {
    const beat = [request.body.id, request.body.uri,
        request.body.Source_id, request.body.BeatType_id, request.body.DataStream_id
    ];
    const sql = 'insert into beat (id, uri, Source_id, BeatType_id, DataStream_id) values (?, ?, ?, ?, ?) ';

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, beat, (e, result, field) => {
            if (e) throw e;
            result ? response.send(result) : response.sendStatus(404);
        });
    });
});

//get beat by id
app.get('/api/beat/:id', (request, response) => {
    const sql = 'SELECT * ' + 'FROM beat ' + `WHERE id = ${request.params.id}`;

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, (e, result, field) => {
            if (e) throw e;
            result ? response.send(result) : response.sendStatus(404);
        });
    });
});

//get all beats
app.get('/api/beat/get/all', (request, response) => {
    const sql = `SELECT * FROM beat `;

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, (e, result, field) => {
            if (e) throw e;
            response.send(result);
        });
    });
})

//update beat
app.put('/api/beat/put/update', jsonParser, (request, response) => {
    const sql = 'UPDATE beat ' +
        'SET id = ?, uri = ?, Source_id = ?, BeatType_id = ?, DataStream_id = ?' +
        `WHERE id = ${request.body.id}`;

    const beat = [request.body.id, request.body.uri,
        request.body.Source_id, request.body.BeatType_id, request.body.DataStream_id
    ];

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, beat, (e, result, field) => {
            if (e) throw e;
            result ? response.send(result) : response.sendStatus(404);
        });
    });
});

//delete beat
app.delete('/api/beat/delete/:id', (request, response) => {
    const sql = 'DELETE ' + 'FROM beat ' + `WHERE id = ${request.params.id}`;

    dataBase.connect(e => {
        if (e) throw e;
        dataBase.query(sql, (e, result, field) => {
            if (e) throw e;
            result ? response.send(result) : response.sendStatus(404);
        });
    });

});

const PORT = 3000 || process.env.PORT;

try {
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
} catch (error) {
    console.log(error);
}