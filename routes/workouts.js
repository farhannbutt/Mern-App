const express = require('express');
const {
  getWorkouts,
  // getworkoutss,
  createWorkout
} = require('../controllers/workoutcontrollers')
const router = express.Router();
//get all workouts
router.get('/', getWorkouts )

//get a single workout
// router.get('/', getWorkoutss )

router.post('/', createWorkout)

router.delete('/:id', (req, res) => {
  res.json({ mssg: 'delete a workout' });
});

router.patch('/:id', (req, res) => {
  res.json({ mssg: 'update a workout' });
});

module.exports = router;
