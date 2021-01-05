const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {
    index(req, res) {
        return res.render('index');
    },

    async orphanage(req, res) {

        let orp_id = req.query.id;

        try {
            const db = await Database;
            const results = await db.all('SELECT * FROM orphanages WHERE orp_id = '+orp_id);
            
            const orphanage = results[0];

            orphanage.orp_images = orphanage.orp_images.split(",");
            orphanage.orp_firstImage = orphanage.orp_images[0]

            if(orphanage.orp_open_on_weekends == "0"){
                orphanage.orp_open_on_weekends = false;
            } else {
                orphanage.orp_open_on_weekends = true;
            }

            console.log(orphanage.orp_open_on_weekends);

            return res.render('orphanage', {orphanage});
        } catch (error) {
            console.log(error);
            return res.send('Database error while trying to select an specific orphanage');
        }
    }, 

    async orphanages(req, res) {
        try {
            const db = await Database;
            const orphanages_data = await db.all("SELECT * FROM orphanages"); 
            return res.render('orphanages', { orphanages_data });    
        } catch (error) {
            console.log(error);
            return res.send('Database error while trying to select all orphanages');
        }
    },

    createOrphanage(req, res) {
        return res.render('create-orphanage');
    }
}