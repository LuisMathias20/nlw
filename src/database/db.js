const mysql = require('mysql');
const { orphanages } = require('../pages');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'XMNxmn!@#123',
    database: 'happy_database'
});

con.connect(function(err) {
    if(err) throw err;
    console.log("connected");
});

function conexao() {
    const conn = new mysql.createConnection(con);
    return conn;
}

/*
SELECT FROM DATABASE
function selectAll(table) {
    con.query("SELECT * FROM "+table, function(err, result, fields) {
        if(err) throw err;
        console.log(result);
    });
}
*/