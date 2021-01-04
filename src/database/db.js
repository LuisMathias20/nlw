const Database = require('sqlite-async');

Database.open(__dirname+'/database.sqlite').then(execute);

function execute(db) {
    console.log('entrei na função')
    /*
    db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            orp_id INTEGER PRIMARY KEY AUTOINCREMENT,
            orp_lat TEXT,
            orp_lng TEXT,
            orp_name TEXT,
            orp_about TEXT,
            orp_whatsapp TEXT,
            orp_images TEXT,
            orp_instructions TEXT,
            orp_opening_hours TEXT,
            orp_open_on_weekends TEXT
        );
    `)
    */
}
