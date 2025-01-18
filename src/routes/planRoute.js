const express = require('express');

const plansController = require('../controllers/plansController');

const router = express.Router();

router.get('/', plansController.getPlans);
router.get('/:id', plansController.getPlanById);
router.post('/', plansController.createPlan);
router.put('/:id', plansController.updatePlan);
router.delete('/:id', plansController.deletePlan);

module.exports = router;