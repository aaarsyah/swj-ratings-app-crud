const sequelize = require("sequelize");
// local
// const connDB = new sequelize('ratingsapp','postgres','arsyah',{
//     dialect : "postgres",
//     host : "localhost",
//     port : 5432
// })

// //heroku
const connDB = new sequelize("postgres://jrgzuwuahsxyda:d0c23ed4a6d4b686df4ddec14b0fdbc403fba19c525b064625cf8004121fd441@ec2-3-224-8-189.compute-1.amazonaws.com:5432/dblugf3eb1lsvd", {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        }
}
})

module.exports = connDB;

