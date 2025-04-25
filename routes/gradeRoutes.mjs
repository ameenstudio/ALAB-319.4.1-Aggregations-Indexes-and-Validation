import express from 'express';
import gradesCTRL from '../contollers/gradesController.mjs'


const router = express.Router();


router.route('/avg').get(gradesCTRL.getAvg)


export default router;