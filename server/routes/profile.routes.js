const router = require("express").Router();
const Profile = require("../models/Profile.model")
const User = require("../models/User.model")




// POST profile to the database

router.post("/create-profile", async (req, res) => {
    try {
      console.log(req.body);
      const profile = await Profile.create(req.body);
   
      // const newUser = await User.findByIdAndUpdate(req.body.User, {profile: profile._id})
      res.status(201).json(profile);
    } catch (error) {

      res.status(400).json({ error: "Failed to create question." });
    }
  });






module.exports = router;

