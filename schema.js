const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    category: Joi.string()
      .valid(
        "Full House",
        "Flat",
        "PG/Hostel",
        "1BHK",
        "2BHK",
        "3BHK",
        "4BHK+",
        "Commercial"
      )
      .required(),
    image: Joi.object({
      url: Joi.string().allow("", null),
    }).optional(),
  }).required(),
});

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required(),
});
