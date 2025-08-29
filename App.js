import express from "express";

const app = express();
const PORT = 4000;

// Example route
app.get("/", (req, res) => {
  res.send("Backend running on port 4000 🚀");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`✅ Backend running at http://0.0.0.0:${PORT}`);
});
