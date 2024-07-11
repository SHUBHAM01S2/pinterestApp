const ejs = require("ejs");
const fs = require("fs");
const path = require("path");

// Define paths
const templatesDir = path.join(__dirname, "views");
const outputDir = path.join(__dirname, "dist");

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Render EJS files to HTML
const renderFile = (template) => {
  const templatePath = path.join(templatesDir, template);
  const outputPath = path.join(outputDir, template.replace(".ejs", ".html"));

  ejs.renderFile(templatePath, {}, (err, str) => {
    if (err) throw err;
    fs.writeFileSync(outputPath, str);
  });
};

// Render all templates
fs.readdirSync(templatesDir).forEach((file) => {
  if (file.endsWith(".ejs")) {
    renderFile(file);
  }
});

console.log("EJS templates rendered to HTML");
