const sampleListings = [
{
title: "Cozy Beachfront Cottage",
description:
"Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b",
},
price: 1500,
location: "Malibu",
country: "United States",
category: "beach"
},

{
title: "Modern Loft in Downtown",
description:
"Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
},
price: 1200,
location: "New York City",
country: "United States",
category: "cities"
},

{
title: "Mountain Retreat",
description:
"Unplug and unwind in this peaceful mountain cabin.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
},
price: 1000,
location: "Aspen",
country: "United States",
category: "mountains"
},

{
title: "Historic Villa in Tuscany",
description:
"Experience the charm of Tuscany in this beautifully restored villa.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
},
price: 2500,
location: "Florence",
country: "Italy",
category: "luxury"
},

{
title: "Secluded Treehouse Getaway",
description:
"Live among the treetops in this unique treehouse retreat.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
},
price: 800,
location: "Portland",
country: "United States",
category: "treehouse"
},

{
title: "Beachfront Paradise",
description:
"Step out of your door onto the sandy beach.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9",
},
price: 2000,
location: "Cancun",
country: "Mexico",
category: "beach"
},

{
title: "Rustic Cabin by the Lake",
description:
"Spend your days fishing and kayaking on the serene lake.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b",
},
price: 900,
location: "Lake Tahoe",
country: "United States",
category: "camping"
},

{
title: "Luxury Penthouse with City Views",
description:
"Indulge in luxury living with panoramic city views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd",
},
price: 3500,
location: "Los Angeles",
country: "United States",
category: "luxury"
},

{
title: "Ski-In/Ski-Out Chalet",
description:
"Hit the slopes right from your doorstep.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb",
},
price: 3000,
location: "Verbier",
country: "Switzerland",
category: "mountains"
},

{
title: "Safari Lodge in the Serengeti",
description:
"Experience the thrill of the wild in a comfortable safari lodge.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
},
price: 4000,
location: "Serengeti National Park",
country: "Tanzania",
category: "farms"
},

{
title: "Historic Castle in Scotland",
description:
"Live like royalty in this historic castle.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98",
},
price: 4000,
location: "Scottish Highlands",
country: "United Kingdom",
category: "castles"
},

{
title: "Beachfront Bungalow in Bali",
description:
"Relax on the sandy shores of Bali.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1602391833977-358a52198938",
},
price: 1800,
location: "Bali",
country: "Indonesia",
category: "beach"
},

{
title: "Mountain View Cabin in Banff",
description:
"Enjoy breathtaking mountain views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb",
},
price: 1500,
location: "Banff",
country: "Canada",
category: "mountains"
},

{
title: "Modern Apartment in Tokyo",
description:
"Explore the vibrant city of Tokyo.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1480796927426-f609979314bd",
},
price: 2000,
location: "Tokyo",
country: "Japan",
category: "cities"
},

{
title: "Luxury Villa in the Maldives",
description:
"Indulge in luxury in this overwater villa.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000",
},
price: 6000,
location: "Maldives",
country: "Maldives",
category: "luxury"
},
{
title: "Cliffside Ocean Villa",
description: "Wake up to breathtaking ocean views from this stunning cliffside villa.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
},
price: 3200,
location: "Santorini",
country: "Greece",
category: "beach"
},

{
title: "Snowy Cabin Escape",
description: "A warm wooden cabin surrounded by snowy mountains.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
},
price: 1400,
location: "Alaska",
country: "United States",
category: "mountains"
},

{
title: "City Lights Apartment",
description: "Enjoy stunning skyline views from this luxury city apartment.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
},
price: 2100,
location: "Chicago",
country: "United States",
category: "cities"
},

{
title: "Luxury Desert Camp",
description: "Experience luxury camping in the middle of golden desert dunes.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
},
price: 2600,
location: "Sahara",
country: "Morocco",
category: "camping"
},

{
title: "Farmhouse Retreat",
description: "Relax in a peaceful countryside farmhouse surrounded by nature.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
},
price: 900,
location: "Tuscany",
country: "Italy",
category: "farms"
},

{
title: "Luxury Beach Resort Villa",
description: "Private beachfront villa with infinity pool and sunset views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9",
},
price: 5000,
location: "Bora Bora",
country: "French Polynesia",
category: "luxury"
},

{
title: "Arctic Igloo Stay",
description: "Sleep under the northern lights in a warm glass igloo.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1519682577862-22b62b24e493",
},
price: 3800,
location: "Lapland",
country: "Finland",
category: "arctic"
},

{
title: "Forest Treehouse Cabin",
description: "A peaceful treehouse hidden deep inside a green forest.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
},
price: 950,
location: "Oregon",
country: "United States",
category: "treehouse"
},

{
title: "Royal Palace Stay",
description: "Live like a king in this historic royal palace.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a0",
},
price: 4200,
location: "Jaipur",
country: "India",
category: "castles"
},

{
title: "Luxury Poolside Mansion",
description: "Relax in a massive mansion with a private luxury pool.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
},
price: 4800,
location: "Beverly Hills",
country: "United States",
category: "pools"
},

{
title: "Mountain Lake Lodge",
description: "Beautiful lodge next to a calm lake surrounded by mountains.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
},
price: 1300,
location: "Queenstown",
country: "New Zealand",
category: "mountains"
},

{
title: "Beach Shack Hideaway",
description: "A cozy wooden shack right on the beach.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
},
price: 700,
location: "Goa",
country: "India",
category: "beach"
},

{
title: "Modern Studio Apartment",
description: "Compact modern studio apartment perfect for solo travelers.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
},
price: 1100,
location: "Seoul",
country: "South Korea",
category: "rooms"
},

{
title: "Glass Mountain Cabin",
description: "A modern glass cabin offering panoramic mountain views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
},
price: 1900,
location: "Swiss Alps",
country: "Switzerland",
category: "mountains"
},

{
title: "Island Bamboo Hut",
description: "Traditional bamboo hut located on a tropical island.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
},
price: 600,
location: "Siargao",
country: "Philippines",
category: "beach"
},

{
title: "Luxury City Penthouse",
description: "A high-rise penthouse offering stunning skyline views.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1505691723518-36a5ac3b2c6f",
},
price: 4500,
location: "Dubai",
country: "UAE",
category: "luxury"
},

{
title: "Wild Jungle Eco Lodge",
description: "Eco-friendly lodge deep inside a tropical jungle.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9",
},
price: 1500,
location: "Amazon",
country: "Brazil",
category: "farms"
},

{
title: "Campfire Wilderness Camp",
description: "Traditional camping experience with campfire and stars.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
},
price: 500,
location: "Colorado",
country: "United States",
category: "camping"
},

{
title: "Ice Hotel Suite",
description: "Stay inside a beautiful hotel made completely of ice.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
},
price: 3500,
location: "Kiruna",
country: "Sweden",
category: "arctic"
},

{
title: "Hidden Waterfall Villa",
description: "A secret villa located next to a stunning waterfall.",
image: {
filename: "listingimage",
url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
},
price: 2200,
location: "Ubud",
country: "Indonesia",
category: "trending"
}
];

module.exports = { data: sampleListings };