import express from 'express';
import gradesCTRL from './contollers/gradesController'


const router = express.Router();


router.route('./avg').get(gradesCTRL.getAvg)



// router.get('/avg', async (req, res) => {
//     //Specify Collection
//     let collection = await db.collection('grades');

//     let result = await collection
//         .aggregate(
//             [
//                 {
//                     $project: {
//                         _id: 0,
//                         class_id: 1,
//                         student_id: 1,
//                         avg: { $avg: '$scores.score' },
//                     },
//                 },
//             ],
//             { maxTimeMS: 60000, allowDiskUse: true }
//         )
//         .limit(10)
//         .toArray();

//     res.json(result);
// });

export default router;