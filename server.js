"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_2 = require("express");
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.use((0, express_2.urlencoded)({ extended: true }));
// In-memory storage for URLs
// const urlDatabase: Record<string, { full: string; clicks: number }> = {};
app.get('/', (req, res) => {
    // Render the list of shortened URLs and their stats here
    // const shortUrls = Object.entries(urlDatabase).map(([short, { full, clicks }]) => ({
    //   full,
    //   short,
    //   clicks
    // }));
    res.render('index', { shortUrls: [] }); // Placeholder, students will populate
});
app.post('/shortUrls', (req, res) => {
    // Capture the full URL from form input
    // Generate a unique short URL and store in urlDatabase
    // Redirect back to home page
});
app.get('/:shortUrl', (req, res) => {
    // Check if short URL exists in urlDatabase
    // Increment click count if found and redirect to full URL
    // Send 404 status if short URL not found
});
app.listen(3200, () => console.log('Server started on port 3200'));
