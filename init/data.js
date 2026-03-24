const sampleListings = [
  {
    title: "Modern Suburban Row House",
    description:
      "A stylish, multi-level home featuring contemporary architecture and private balconies. Enjoy a peaceful neighborhood setting with spacious interiors and a private entryway.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1632398414290-15262b0ec12d?q=80&w=968&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 35000,
    location: "Ahemedabad",
    country: "India",
    category: "Full House",
  },
  {
    title: "Heritage Courtyard Mansion",
    description:
      "Experience timeless elegance in this traditional estate featuring a stunning open-air courtyard and intricate architectural detailing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1660915223003-7df0db2e57d8?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 47000,
    location: "Karaikudi",
    country: "India",
    category: "Full House",
  },
  {
    title: "Chic High-Rise Studio",
    description:
      "A bright 1BHK flat offering efficient modern living with a private balcony and great city views. Perfect for urban dwellers seeking convenience and style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1549499090-c9203d2b20ad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 21000,
    location: "Mumbai",
    country: "India",
    category: "2BHK",
  },
  {
    title: "Luxury Waterfront Villa",
    description:
      "A stunning 1BHK luxury suite within a modern architectural masterpiece featuring floor-to-ceiling glass walls and a private infinity pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 43000,
    location: "Barcelona",
    country: "Spain",
    category: "Full House",
  },
  {
    title: "Urban Business Hub",
    description:
      "A striking contemporary commercial tower featuring a unique louvered facade and high-density office spaces. Designed for maximum natural light and professional efficiency in the heart of the business district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1489936724440-afaf5a115ede?q=80&w=1151&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 83000,
    location: "Singapore",
    country: "Singapore",
    category: "Commercial",
  },
  {
    title: "Charming Autumn Cottage",
    description:
      "A picturesque white cottage featuring classic gabled roofs and a cozy white picket fence.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 14000,
    location: "Ontario",
    country: "Canada",
    category: "Full House",
  },
  {
    title: "Serene Campus Courtyard Hostel",
    description:
      "vibrant PG/hostel offering shared 1BHK rooms arranged around a central green courtyard.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1705573369572-e30d26006707?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 6000,
    location: "Gandhinagar",
    country: "India",
    category: "PG/Hostel",
  },
  {
    title: "Corporate Glass Plaza",
    description:
      "A premier commercial office space featuring a stunning blue glass curtain wall that provides exceptional natural light and energy efficiency.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 134000,
    location: "Chicago",
    country: "United States",
    category: "Commercial",
  },
  {
    title: "Green Haven Residential PG",
    description:
      "A peaceful accommodation featuring low-rise blocks centered around a majestic banyan tree and lush greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1616936827466-eaf26895a83d?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 4500,
    location: "Udupi",
    country: "India",
    category: "PG/Hostel",
  },
  {
    title: "Glass Tower Penthouse",
    description:
      "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1561321698-40ae82a47b9e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 35000,
    location: "Los Angeles",
    country: "United States",
    category: "4BHK+",
  },
  {
    title: "Seasside Terrace",
    description:
      "A bright and airy 2BHK apartment featuring unique staggered balconies and extensive glass windows for maximum sunlight.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534655610770-dd69616f05ff?q=80&w=956&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 24000,
    location: "Chennai",
    country: "India",
    category: "2BHK",
  },
  {
    title: "Tiered Business Center",
    description:
      "A striking commercial landmark featuring a unique tiered architectural design with sleek horizontal glass bands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1481253127861-534498168948?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 98000,
    location: "Vancouver",
    country: "Canada",
    category: "Commercial",
  },
  {
    title: "Heritage Timber Manor",
    description:
      "A historic multi-story residence showcasing traditional woodwork, expansive windows, and unique architectural towers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1663057352968-e0b78a287d2f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 10000,
    location: "Thiruchirappalli",
    country: "India",
    category: "Full House",
  },
  {
    title: "Heritage Grand Estate",
    description:
      "An ornate historic mansion featuring traditional Chettinad architecture and a grand arched entrance.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1668749543729-9fbd709751ca?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 8000,
    location: "Chettinad",
    country: "India",
    category: "Full House",
  },
  {
    title: "Sleek High-Rise Corporate Tower",
    description:
      "A premier commercial building featuring a striking geometric grid of blue glass windows and a sophisticated steel facade.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 145000,
    location: "New York",
    country: "United States",
    category: "Commercial",
  },
  {
    title: "Contemporary Coastal Villa",
    description:
      "A beautiful shingle-style home featuring a sprawling white porch and classic gabled dormers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584738766473-61c083514bf4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 24500,
    location: "Cape Cod",
    country: "United States",
    category: "Full House",
  },
  {
    title: "Futuristic Glass Villa",
    description:
      "stunning architectural masterpiece featuring sharp geometric lines and floor-to-ceiling glass walls that glow beautifully at dusk.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661883964999-c1bcb57a7357?q=80&w=1128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 45000,
    location: "Boston",
    country: "United States",
    category: "Full House",
  },
  {
    title: "Sunset Horizon",
    description:
      "A modern 2BHK apartment featuring unique circular windows and glass-enclosed balconies that capture the golden hour glow.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1759674432508-000a305a3682?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 19000,
    location: "Moscow",
    country: "Russia",
    category: "2BHK",
  },
  {
    title: "Compact Urban Studio",
    description:
      "A practical and well-maintained 1BHK flat featuring classic stone-accented window frames and high ceilings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1765785165219-d5dd951fbc98?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 11000,
    location: "Istanbul",
    country: "Turkey",
    category: "1BHK",
  },
  {
    title: "Luxury A-Frame Cabin",
    description:
      "A stunning contemporary cabin featuring dramatic high ceilings, warm wood paneling, and expansive glass walls that glow at night.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 26000,
    location: "Blue Mountains",
    country: "Australia",
    category: "Full House",
  },
  {
    title: "Bronze Tiered Residencies",
    description:
      "A sophisticated 3BHK apartment featuring unique curved bronze-finished balconies with integrated planters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1759073254456-06026e026c08?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 40000,
    location: "Geneva",
    country: "Switzerland",
    category: "3BHK",
  },
  {
    title: "Elegant Modern Smart-Villa",
    description:
      "A premium two-story villa featuring designer exterior lighting and a secure private garage. This sleek, contemporary home.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1744094982586-c70f736bda12?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 50000,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "Full House",
  },
  {
    title: "Minimalist Zen Villa",
    description:
      "A striking contemporary home featuring warm wood-slatted accents, clean architectural lines, and expansive glass entryways.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 18700,
    location: "Kyoto",
    country: "Japan",
    category: "Full House",
  },
  {
    title: "Classical Brickwork Student Living",
    description:
      "A stately brick-facade hostel featuring a secure, U-shaped layout for a close-knit community feel.",
    image: {
      filename: "listingimage",
      url: "https://plus.unsplash.com/premium_photo-1733306455377-2ef61e873f69?q=80&w=1127&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 8500,
    location: "Copenhagen",
    country: "Denmark",
    category: "PG/Hostel",
  },
  {
    title: "Luxury Sunset",
    description:
      "A premium 3BHK apartment featuring expansive floor-to-ceiling glass balconies that capture stunning evening views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1624204386084-dd8c05e32226?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 28000,
    location: "Ioannina",
    country: "Greece",
    category: "3BHK",
  },
  {
    title: "Contemporary Cubic Villa",
    description:
      "A stunning modern residence featuring a bold concrete upper level with custom wooden shutters for privacy and style.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1756706718604-ef4af3970e33?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 32000,
    location: "Vishakhapatnam",
    country: "India",
    category: "Full House",
  },
  {
    title: "City Student Living",
    description:
      "well-established multi-story hostel featuring large windows and shared balconies for a breezy, communal living experience.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1719845568994-a5d2992f6dff?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 2900,
    location: "Kolkata",
    country: "India",
    category: "PG/Hostel",
  },
  {
    title: "Contemporary Urban Collective",
    description:
      "A vibrant 1BHK flat situated within a modern mid-rise complex featuring stylish brick accents and private sunlit balconies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1612637968894-660373e23b03?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 13800,
    location: "Berlin",
    country: "Germany",
    category: "1BHK",
  },
  {
    title: "Brick Minimalist Estate",
    description:
      "A sophisticated red-brick villa featuring clean geometric lines and a sprawling manicured lawn.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1696237461860-630be53f179c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 57000,
    location: "Prague",
    country: "Czech Republic",
    category: "Full House",
  },
  {
    title: "Urban Gateway High-Rise",
    description:
      "A premium high-rise flat featuring unique gothic-inspired arched windows and spacious private balconies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1734499199363-58788ed4164f?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    price: 20000,
    location: "Greater Noida",
    country: "India",
    category: "Flat",
  },
];

module.exports = { data: sampleListings };
