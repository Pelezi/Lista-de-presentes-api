const plansRepository = require('../repositories/plansRepository');

exports.getPlans = async (req, res) => {
    const plans = await plansRepository.getPlans();
    res.json(plans);
}

exports.getPlanById = async (req, res) => {
    const id = parseInt(req.params.id);
    const plan = await plansRepository.getPlanById(id);
    res.json(plan);
}

exports.createPlan = async (req, res) => {
    const plan = req.body;
    const newPlan = await plansRepository.createPlan(plan);
    res.json(newPlan);
}

exports.updatePlan = async (req, res) => {
    const id = parseInt(req.params.id);
    const plan = req.body;
    const updatedPlan = await plansRepository.updatePlan(id, plan);
    res.json(updatedPlan);
}

exports.deletePlan = async (req, res) => {
    const id = parseInt(req.params.id);
    await plansRepository.deletePlan(id);
    res.json({ message: 'Plano removido com sucesso!' });
}