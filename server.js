"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const shortid_1 = require("shortid");
const app = (0, express_1.default)();
app.set("view engine", "ejs");
app.use((0, express_2.urlencoded)({ extended: true }));
// In-memory storage for URLs
const urlDatabase = {};
app.get("/", (req, res) => {
    // Render the list of shortened URLs and their stats here
    const shortUrls = Object.entries(urlDatabase).map(([short, { full, clicks }]) => ({
        full,
        short,
        clicks,
    }));
    res.render("index", { shortUrls }); // Placeholder, students will populate
});
app.post("/shortUrls", (req, res) => {
    // Capture the full URL from form input
    // Generate a unique short URL and store in urlDatabase
    // Redirect back to home page
    const fullUrl = req.body.fullUrl;
    const shortURL = (0, shortid_1.generate)();
    urlDatabase[shortURL] = { full: fullUrl, clicks: 0 };
    res.redirect("/");
});
app.get("/:shortUrl", (req, res) => {
    // Check if short URL exists in urlDatabase
    // Increment click count if found and redirect to full URL
    // Send 404 status if short URL not found
    const shortURL = req.params.shortUrl;
    const urlEntry = urlDatabase[shortURL];
    if (urlEntry) {
        urlEntry.clicks++;
        res.redirect(urlEntry.full);
    }
    else {
        res.status(404).send("Short URL not found");
    }
});
app.listen(3200, () => console.log("Server started on http://localhost:3200"));
