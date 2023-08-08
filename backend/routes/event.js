const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Event = require('../models/Event')
const User = require("../models/User")
const jwt = require('jsonwebtoken')

// Create events
router.post("/create", async (req, res) => { 
        const attributes = req.body

        const event = new Event(attributes);

        event.save(function (err, Event) {
            if (err) {
                res.send(err)
                console.log(err)
            } else {
                res.json({message: "success", id: event._id})
            }
        });
    })

router.route('/delete')
    .delete((req, res) => {
        Event.findByIdAndDelete(req.query.id, (err) => {
            if (err) res.send(err)
            User.updateMany({}, {$pullAll: { events: [req.query.id]}}, (err) => {
                if (err) res.send(err)
            })
            User.updateMany({}, {$pullAll: {myEvents: [req.query.id]}}, (err) => {
                if(err) res.send(err)
            })
            res.json({succeeded: true})
        })
    })
module.exports = router