const awsAuth = require('express').Router();

awsAuth.get('/',  (req, res) => {
    try{
        const awsCredentials = {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
            bucketName: process.env.AWS_BUCKET_NAME
        }
        res.json(awsCredentials)

    }catch(err){
        console.log(err)
        res.send({ status: 'error', message: err.message })
    }
})

module.exports = awsAuth;