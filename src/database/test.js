const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    /* insert data in the table */
    await saveOrphanage(db, {
        lat: "-22.8526212",
        lng: "-45.2378317",
        name: "Exemplo orfanato",
        about: "EXEMPLO",
        whatsapp: "(12) 9999-9999", 
        images: [
            "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=723&q=80"
        ].toString(),
        instructions: "Este é um exemplo de descrição para o orfanato.",
        opening_hours: "Horário de visita 8h até 18h",
        open_on_weekends: "1"
    });

    /* read data in the table */
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    /* select a specific data from db */
    const orphanage = await db.all('SELECT * FROM orphanages WHERE orp_id = "1"');
    console.log(orphanage);

    /* delete data from table */
    console.log(await db.run("DELETE FROM orphanages WHERE orp_id = '4'"));
});
