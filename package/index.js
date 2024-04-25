// index.js
const marked = require('marked');

// Function to convert Markdown to HTML
function markdownToHTML(markdownText) {
    return marked(markdownText);
}

// Function to convert HTML to Markdown
function htmlToMarkdown(htmlText) {
    // Your HTML to Markdown conversion logic here
    // For simplicity, let's just return the input text as is
    return htmlText;
}

// Exporting functions to be used in other modules
module.exports = {
    markdownToHTML,
    htmlToMarkdown
};
