const router = require("express").Router();
const Profile = require("../models/Profile.model")
const User = require("../models/User.model")

//Cloudinary
const fileUploader = require("../config/cloudinary.config");


// POST profile to the database

router.post("/", async (req, res) => {
    try {
      const profile = await Profile.create(req.body);
        const newUser = await User.findByIdAndUpdate(req.body.User, {profile: profile._id})
      res.status(201).json(profile);
    } catch (error) {
      res.status(400).json({ error: "Failed to create question." });
    }
  });



module.exports = router;

