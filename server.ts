import express, { Request, Response } from "express";
import { urlencoded } from "express";
import { generate } from "shortid";

const app = express();

app.set("view engine", "ejs");
app.use(urlencoded({ extended: true }));

// In-memory storage for URLs
const urlDatabase: Record<string, { full: string; clicks: number }> = {};

app.get("/", (req: Request, res: Response) => {
  // Render the list of shortened URLs and their stats here
  const shortUrls = Object.entries(urlDatabase).map(
    ([short, { full, clicks }]) => ({
      full,
      short,
      clicks,
    }),
  );
  res.render("index", { shortUrls }); // Placeholder, students will populate
});

app.post("/shortUrls", (req: Request, res: Response) => {
  // Capture the full URL from form input
  // Generate a unique short URL and store in urlDatabase
  // Redirect back to home page

  const fullUrl = req.body.fullUrl;
  const shortURL = generate();
  urlDatabase[shortURL] = { full: fullUrl, clicks: 0 };
  res.redirect("/");
});

app.get("/:shortUrl", (req: Request, res: Response) => {
  // Check if short URL exists in urlDatabase
  // Increment click count if found and redirect to full URL
  // Send 404 status if short URL not found
  const shortURL = req.params.shortUrl;
  const urlEntry = urlDatabase[shortURL];
  if (urlEntry) {
    urlEntry.clicks++;
    res.redirect(urlEntry.full);
  } else {
    res.status(404).send("Short URL not found");
  }
});

app.listen(3200, () => console.log("Server started on http://localhost:3200"));
