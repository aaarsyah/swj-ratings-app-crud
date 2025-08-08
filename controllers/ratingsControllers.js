const { Op } = require("sequelize");
const RatingSchema = require("../models/Rating");
const Rating = require('../models/Rating')

//Read Data
exports.getRatings = (req, res) => {
  Rating.findAll({
      where: {
          deletedAt: {
            [Op.is]: null,
          },
        },
      order: [["createdAt", "ASC"]],
  })
  .then((Rating) => {
      res.send({
      succes: true,
      statusCode: 200,
      message: "This",
      data: Rating,
      });
  })
  .catch((err) => {
      res.send({
          succes: true,
          statusCode: 500,
          message: err.message,
          data: {},
      });
  });
};

//Create Ratings
exports.createRatings = (req, res) => {
  Rating.create(req.body, {
    field: ["rate", "userid", "comment", "category", "categoryid"],
  })
    .then((Rating) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "Created",
        data: Rating,
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 400,
        message: err.message,
        data: {},
      });
    });
  };

//Update Ratings
exports.updateRatings = (req, res) => {
  const { ratingId } = req.params;
  const body = req.body;
  Rating.update(
    {
      rate: body.rate,
      userid: body.userid,
      comment: body.comment,
      category: body.category,
      categoryid: body.categoryid,
    },
    {
      where: {
        id: ratingId,
      },
    }
  )
    .then((Rating) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "Update",
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 400,
        message: err.message,
        data: {},
      });
    });
};

//Delete Ratings
exports.deleteRatings = (req, res) => {
  const { ratingId } = req.params;
  Rating.update(
    { deletedAt: new Date() },
    {
      where: {
        id: ratingId,
      },
    }
  )
    .then((Rating) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "Deleted",
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 400,
        message: err.message,
      });
    });
};


//Restore Data
exports.restoreRatings = (req, res) => {
  const { ratingId } = req.params;
  Rating.update(
    { deletedAt: null },
    {
      where: {
        id: ratingId,
      },
    }
  )
    .then((Rating) => {
      res.send({
        succes: true,
        statusCode: 200,
        message: "Restore",
      });
    })
    .catch((err) => {
      res.send({
        succes: true,
        statusCode: 400,
        message: err.message,
      });
    });

};

//Filter Rating
exports.filterRatings = (req, res) => {
  const {rate} = req.query
  Rating.findAll({ 
      where : { rate: `${rate}`, deletedAt: {
           [Op.is]: null,
          },
        },
    })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Terjadi error saat mencari rating."
      });
  });
}
