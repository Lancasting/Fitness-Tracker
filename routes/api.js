const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts",(req, res) => {
    Workout.create({})
    .then(newWorkout => {
        res.json(newWorkout);
    }).catch(err => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.update(
        params.id,
        {
            $push: { exercises: body} 
        }
    ).then(workoutsID => {
        res.json(workoutsID);
    }).catch(err => {
        res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then(workouts => {
        res.json(workouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.get("api/workouts/range", (req, res) => {
    Workout.find({})
    .then(workoutRange => {
        res.json(workoutRange);
    }).catch(err => {
        res.json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.delete(body.id)
    .then(() => {
        res.json(true);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;