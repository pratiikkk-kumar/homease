const Listing = require("../models/listing");

//Index Route
module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {
    allListings: allListings,
    searchQuery: "",
    selectedFilter: "",
  });
};

//Search Route
module.exports.searchListings = async (req, res) => {
  const { q } = req.query;
  let allListings;
  let searchQuery = "";

  if (q && q.trim() !== "") {
    searchQuery = q.trim();
    allListings = await Listing.find({
      $or: [
        { location: { $regex: searchQuery, $options: "i" } },
        { country: { $regex: searchQuery, $options: "i" } },
      ],
    });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", {
    allListings: allListings,
    searchQuery: searchQuery,
    selectedFilter: "",
  });
};

//Filter Route
module.exports.filterListings = async (req, res) => {
  const { category } = req.query;
  let allListings;

  if (category && category.trim() !== "") {
    allListings = await Listing.find({ category: category });
  } else {
    allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", {
    allListings: allListings,
    searchQuery: "",
    selectedFilter: category || "",
  });
};

//New Route - Form to create new listing
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

//Show Route
module.exports.showListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Cannot find the specific home!");
    return res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listing: listing });
};

//Create Route
module.exports.createListing = async (req, res, next) => {
  const newListing = new Listing(req.body.listing);
  
  if (req.file) {
    newListing.image = { url: req.file.path, filename: req.file.filename };
  } else if (
    !req.body.listing.image ||
    !req.body.listing.image.url ||
    req.body.listing.image.url.trim() === ""
  ) {
    newListing.image.url = undefined;
  }
  newListing.owner = req.user._id;
  await newListing.save();
  req.flash("success", "Successfully added your home!");
  res.redirect("/listings");
};

//Edit Route - Form to edit a listing
module.exports.editListing = async (req, res) => {
  const { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Cannot find that specific home!");
    return res.redirect("/listings");
  }

  let originalImage = listing.image.url;
  originalImage = originalImage.replace("/upload", "/upload/w_300");
  res.render("listings/edit.ejs", {
    listing: listing,
    originalImage: originalImage,
  });
};

//Update Route
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findByIdAndUpdate(id, req.body.listing);

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url: url, filename: filename };
    await listing.save();
  }

  req.flash("success", "Successfully updated your home!");
  res.redirect(`/listings/${id}`);
};

//Delete Route
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Successfully removed your home!");
  res.redirect("/listings");
};
