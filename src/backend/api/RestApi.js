const express = require('express');
const router = express.Router();

const routes = ['/user', '/item', '/cati']
const postRoutes = ['/item', '/cati']
router.get(routes,
    function (req, res, next) {
        let fullUrl = req.originalUrl.slice(5, req.originalUrl.length - 1);
        var coll
        switch (fullUrl) {
            case 'user':
                coll = require('../models/User')
                break;
            case 'cati':
                coll = require('../models/Category')
                break;
            case 'item':
                coll = require('../models/items')
                break;
            default: console.log('There was a get issue (not found)');
        }

        coll.find({}).then(
            function (users) {
                if (users != null) {
                    res.send(users);
                } else {
                    res.status(404).send('Sorry can\'t find that!')
                }
            }
        ).catch(next);
    }
)

router.post(postRoutes,
    function (req, res, next) {
        let fullUrl = req.originalUrl.slice(5, req.originalUrl.length - 1);
        var coll
        switch (fullUrl) {
            case 'cati':
                coll = require('../models/Category')
                break;
            case 'item':
                coll = require('../models/items')
                break;
            default: console.log('There was a post issue (not found)')
        }

        coll.create(req.body).then(
            function (users) {
                res.send(users)
            }
        ).catch(next);
    }
);

const idRoutes = ['/user/:_id', '/item/:_id'];
router.put(idRoutes,
    function (req, res, next) {
        let fullUrl = req.originalUrl.slice(5, 9);
        console.log(fullUrl);
        let coll = (fullUrl === 'user') ? require('../models/User') : require('../models/items');

        coll.findOneAndUpdate({ _id: req.params._id }, req.body).then(
            function (users) {
                coll.findOne({ _id: req.params._id }).then(
                    function (users) {
                        res.send(users)
                    }
                )
            }
        )
    }
)

router.put('/cati/:_id',
    function (req, res, next) {
        let coll = require('../models/Category');

        coll.findOneAndUpdate({ _id: req.params._id }, req.body).then(
            function (categories) {
                coll.findOne({ _id: req.params._id }).then(
                    function (categories) {
                        res.send(categories)
                    }
                )
            }
        )
    }
)

router.delete(idRoutes,
    function (req, res, next) {
        var fullUrl = req.originalUrl.slice(5, 9);
        console.log(fullUrl);
        let coll = (fullUrl === 'user') ? require('../models/User') : require('../models/items');

        coll.findOneAndDelete({ _id: req.params._id }).then(
            function (collDoc) {
                res.send(collDoc)
            }
        )
    }

)

// DELETE ALL USER's ITEM
router.delete('/item/deleteAllItems/:email',
    function (req, res, next) {
        let coll = require('../models/items');

        coll.deleteMany({ owner: req.params.email }).then(
            function (result) {
                res.send(result)
            }
        )
    }
)

// USER GET (USER)
router.get('/user/get-user/:email',
    function (req, res, next) {
        if (req.params.email === null || req.params.email === '') {
            res.send(null);
            return;
        }

        let coll = require('../models/User');

        coll.findOne({ email: req.params.email }).then(
            function (users) {
                res.send(users);
            }
        )
    }
)

// USER GET (PWD)
router.get('/user/get-password/:email',
    function (req, res, next) {
        if (req.params.email === null || req.params.email === '') {
            res.send(null);
            return;
        }

        let coll = require('../models/User');

        coll.findOne({ email: req.params.email }).then(
            function (users) {
                if (users != null) {
                    res.send(users.password);
                }
                else {
                    res.send(null);
                }
            }
        )
    }
)

// USER GET (ACTIVE)
router.get('/user/get-active/:email',
    function (req, res, next) {
        if (req.params.email === null || req.params.email === '') {
            res.send(false);
            return;
        }

        let coll = require('../models/User');

        coll.findOne({ email: req.params.email }).then(
            function (users) {
                if (users != null) {
                    res.send(users.active);
                }
                else {
                    res.send(false);
                }
            }
        )
    }
)

// USER GET (INV)
router.get('/user/inv/:email',
    function (req, res, next) {

        let coll = require('../models/items')

        coll.find({ owner: req.params.email }).then(
            function (users) {
                res.send(users);

            }
        )
    }
)

// USER GET (role)
router.get('/user/get-role/:email',
    function (req, res, next) {

        let coll = require('../models/User');

        coll.findOne({ email: req.params.email }).then(
            function (users) {
                if (users != null) {
                    res.send(users.role);
                }
                else {
                    res.send(0);
                }
            }
        )
    }
)

// USER GET (Category)
router.get('/user/inv/category/:c_id',
    function (req, res, next) {

        let coll = require('../models/Category');

        coll.findOne({ c_id: req.params.c_id }).then(
            function (category) {
                if (category != null) {
                    res.send(category.category_name);
                }
                else {
                    res.sendStatus(0);
                }
            }
        )
    }
)

//USER SEND CONFIRM EMAIL ON REGISTER
router.post('/user', 
    async (req, res) => {
    let createSecret = require('../utilities/createSecret');
    let sendConfirm = require('../utilities/sendMail');
    let User = require('../models/User');
    let Token = require('../models/Token');

    try {

        let user = await User.findOne({ email: req.body.email });
        
        if (user) 
            return res.send({ message: 'Email already exists'});

        user = await new User({...req.body}).save();

        const token = await new Token({
            _userId: user._id,
            token: createSecret()
        }).save();

        const verifyUrl = `http://localhost:5000/api/user/${user._id}/verify/${token.token}`;
        await sendConfirm(
            req.body.email, 'Confirm your email', `Click <a href=${verifyUrl}>HERE</a> to confirm <br/> this link expires in 12 hours`
        )
        res.status(201).send({ message: 'Please check your email' });
    } catch (err) {
        console.log(err);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

//CONFIRM EMAIL
router.get('/user/:_id/verify/:token/', 
    async (req, res, next) => {
    let User = require('../models/User');
    let Token = require('../models/Token');
    let sendVerified = require('../utilities/sendMail');
    try {
        const user = await User.findOne({ _id: req.params._id });
        if (!user) return res.status(400).send({ message: 'Invalid link' });

        const token = await Token.findOne({
            userId: req.params._id,
            token: req.params.token,
        });
        if (!token) return res.status(400).send({ message: 'Invalid link' });

        await User.findByIdAndUpdate(req.params._id, { active: true });
        await token.remove();
        await sendVerified(
            user.email, 'Your email was verified!', 'Your account is now active, thank you!'
        )
        
        res.redirect('http://localhost:3000/');

        console.log('Email verified');

        next();
    } catch (err) {
        console.log('Internal error occurred: ' + err);
    }
});

module.exports = router;