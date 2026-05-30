
# URL Shortener Assignment

## Overview

In this assignment, you'll create a URL shortener application. This app should allow users to enter a full URL, generate a unique shortened version, and track how many times each shortened URL has been clicked. The application should:
- Accept full URLs and generate a unique short URL.
- Store these short URLs along with the original URL and click count.
- Redirect users to the full URL when they access the short URL.

## Problem Breakdown

You'll need to complete the following tasks to build the URL shortener:

1. **Form Handling**: Capture the URL input from a form.
2. **Short URL Generation**: Generate a unique short identifier for each URL.
3. **Data Storage**: Store each URL mapping and track click counts.
4. **Redirection Logic**: Redirect users to the full URL when they access the short URL.

## Key Concepts

### URL Parser

A URL parser is a component that breaks a URL string down into components, such as the protocol, hostname, path, and parameters. In this assignment, you’ll work with URLs in Express route parameters to manage URL shortening and redirection.

## Instructions

1. **Set Up Route to Handle Form Input**
   - Create a `POST` route (e.g., `/shortUrls`) to capture the full URL from a form submission.
   - Use `express.urlencoded()` to parse the form data.

2. **Generate a Short URL**
   - Use the `shortid` library or a similar method to create a unique identifier for each URL. This identifier will act as the "short URL".
   - Install `shortid` by running `npm install shortid` and use `shortid.generate()` to create a unique ID.

3. **Store URLs and Click Counts**
   - Implement an in-memory object or data structure to store mappings between the short and full URLs, as well as the click counts.
   - Each entry should store the full URL and initialize a click count to `0`.

4. **Set Up Redirection Logic**
   - Implement a `GET /:shortUrl` route to handle requests for shortened URLs.
   - Look up the short URL in the data structure. If found, increment the click count and redirect to the original full URL.
   - If the short URL is not found, respond with a `404 Not Found` status.

5. **Render Shortened URLs on the Page**
   - Use EJS templates to display the list of shortened URLs, their original URLs, and click counts.
   - Pass the list of URLs from the data structure to the EJS template in the `GET /` route.

## Tips

- **Use Route Parameters**: Use `req.params` in the `GET /:shortUrl` route to capture the short URL and look it up in the in-memory data structure.
- **Increment Click Count**: In the redirection route, increment the click count each time a short URL is accessed.
- **Testing**: Test the app by entering URLs, creating shortened versions, and then using the short URL to verify redirection and click count increment.

This assignment will help you work with form data, route parameters, and in-memory data stores, providing a solid foundation in Express.js.
