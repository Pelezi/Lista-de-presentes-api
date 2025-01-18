const { pool } = require('../config/db');

exports.getUnits = async () => {
    const result = await pool.query('SELECT * FROM units ORDER BY id ASC');
    return result.rows;
}

exports.getUnitById = async (id) => {
    const result = await pool.query('SELECT * FROM units WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createUnit = async (unit) => {
    const result = await pool.query(`
        INSERT INTO units (name, address, city, representative, email, titlecolor, textcolor) 
        VALUES ($1, $2, $3, $4, $5, $6, $7) 
        RETURNING *`,
        [unit.name, unit.address, unit.city, unit.representative, unit.email, unit.titlecolor, unit.textcolor]
    );
    return result.rows[0];
}

exports.updateUnit = async (id, unit) => {
    const result = await pool.query(`
        UPDATE units 
        SET name = $1, address = $2, city = $3, representative = $4, email = $5, titlecolor = $6, textcolor = $7
        WHERE id = $8
        RETURNING *`,
        [unit.name, unit.address, unit.city, unit.representative, unit.email, unit.titlecolor, unit.textcolor, id]
    );
    return result.rows[0];
}

exports.deleteUnit = async (id) => {

    await pool.query('DELETE FROM units WHERE id = $1', [id]);

    return true;
}