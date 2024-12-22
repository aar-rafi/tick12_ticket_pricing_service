/* eslint-disable no-unused-vars */
import app from "./app.js";
const PORT = 8002;

app.listen(PORT, (req, res) => {
  console.log(`Pricing service server is running at http://localhost:${PORT}`);
});