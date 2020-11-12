const db = require('./db.js');

const conn = db.con;

var table='orphanages';
var fields=`
                lat, 
                lng , 
                name,  
                whatsapp, 
                images, 
                instructions, 
                opening_hours, 
                open_on_weekends
            `;
var values=`
                "-22.8526212",
                "-45.2378317",
                "Exemplo orfanato",
                "EXEMPLO",
                "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80",
                "Este é um exemplo de descrição para o orfanato.",
                "Horário de visita xx até xx",
                "1"   
            `
function InsertInto(table, fields, values) {
    console.log(conn);
    //conn.query('INSERT INTO '+ table + ' ('+ fields +') VALUES ("'+ values +'")');
}

InsertInto(table, fields, values);