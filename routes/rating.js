const express =  require("express");
const router = express.Router(); 
const ratingsControllers = require("../controllers/ratingsControllers");
//read
router.get("/rating", ratingsControllers.getRatings);
//create
router.post("/rating", ratingsControllers.createRatings);
//update
router.put("/rating/:ratingId", ratingsControllers.updateRatings);
//delete
router.delete("/rating/:ratingId", ratingsControllers.deleteRatings);
//restore
router.patch("/rating/:ratingId", ratingsControllers.restoreRatings);
//filter
router.get('/rating/filter', ratingsControllers.filterRatings);


module.exports = router;