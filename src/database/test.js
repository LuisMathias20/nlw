const Database = require('./db.js');
const saveOrphanage = require('./saveOrphanage.js');

Database.then(async db => {
    /* insert data in the table */
    await saveOrphanage(db, )

    /* read data in the table */
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    const orphanage = await db.all('SELECT * FROM orphanages WHERE orp_id = "1"');
    console.log(orphanage);
});
