function saveOrphanage(db, orphanage) {
  return db.run(`
    INSERT INTO orphanages (
        orp_lat,
        orp_lng,
        orp_name,
        orp_about,
        orp_whatsapp,
        orp_images,
        orp_instructions,
        orp_opening_hours,
        orp_open_on_weekends
    ) VALUES (
        "${orphanage.lat}",
        "${orphanage.lng}",
        "${orphanage.name}",
        "${orphanage.about}",
        "${orphanage.whatsapp}",
        "${orphanage.images}",
        "${orphanage.instructions}",
        "${orphanage.opening_hours}",
        "${orphanage.open_on_weekends}"
    );
`);
}

module.exports = saveOrphanage;
