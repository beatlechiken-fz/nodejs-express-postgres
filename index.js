import express from "express";
import productRoute from "./routes/product.route.js";

const app = express();

app.use(express.json());
app.use("/api/v1/products", productRoute);

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(
    `🎄🎄🎄 Servidor escuchando en el puerto ${PORT}: http://localhost:${PORT}`
  );
});
