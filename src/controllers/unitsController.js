const unitsRepository = require('../repositories/unitsRepository');

exports.getUnits = async (req, res) => {
    const units = await unitsRepository.getUnits();
    res.json(units);
}

exports.getUnitById = async (req, res) => {
    const id = req.params.id;
    const unit = await unitsRepository.getUnitById(id);
    res.json(unit);
}

exports.createUnit = async (req, res) => {
    const unit = req.body;
    const newUnit = await unitsRepository.createUnit(unit);
    res.json(newUnit);
}

exports.updateUnit = async (req, res) => {
    const id = req.params.id;
    const unit = req.body;
    const updatedUnit = await unitsRepository.updateUnit(id, unit);
    res.json(updatedUnit);
}

exports.deleteUnit = async (req, res) => {
    const id = req.params.id;
    await unitsRepository.deleteUnit(id);
    res.json(true);
}