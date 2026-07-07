require("dotenv").config({
    path: `.env.${process.env.NODE_ENV || "development"}`,
});
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const contactRoutes = require("./routes/contactRoutes");

const app = express();

const allowedOrigins = [
    "http://localhost:5173", // local dev
    "https://zehankhan.in",
    "https://www.zehankhan.in",
    "http://zehankhan.in",
    "https://zehan-portfolio.vercel.app",
];

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    })
);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", contactRoutes);

// Serve frontend build in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")));
    app.get(/.*/, (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });
}


app.listen(process.env.PORT, () => {
    console.log(
        `✅ Server running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    );
});