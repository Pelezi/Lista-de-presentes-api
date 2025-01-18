const { pool } = require('../config/db');

exports.getPlans = async () => {
    const result = await pool.query('SELECT * FROM plans');
    return result.rows;
}

exports.getPlanById = async (id) => {
    const result = await pool.query('SELECT * FROM plans WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createPlan = async (plan) => {
    const result = await pool.query(`
        INSERT INTO plans (image, title, titlecolor, planvalue, buttoncolor, buttontextcolor, buttoniconcolor)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        RETURNING *`,
        [plan.image, plan.title, plan.titlecolor, plan.planvalue, plan.buttoncolor, plan.buttontextcolor, plan.buttoniconcolor]        
    );
    return result.rows[0];
}

exports.updatePlan = async (id, plan) => {
    const result = await pool.query(`
        UPDATE plans
        SET image = $1, title = $2, titlecolor = $3, planvalue = $4, buttoncolor = $5, buttontextcolor = $6, buttoniconcolor = $7
        WHERE id = $8
        RETURNING *`,
        [plan.image, plan.title, plan.titlecolor, plan.planvalue, plan.buttoncolor, plan.buttontextcolor, plan.buttoniconcolor, id]
    );
    return result.rows[0];
}

exports.deletePlan = async (id) => {
    await pool.query('DELETE FROM plans WHERE id = $1', [id]);
}