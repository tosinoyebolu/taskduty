import app from "./app.js";
import { connectedToDb } from "./config/connectToDb.js";

const PORT = process.env.PORT || 4000;

if (!PORT) {
  throw new Error("Please ensure there is a port number assigned");
}

connectedToDb()
  .then(() => startServer())
  .catch((error) => {
    console.error("Invalid database connection");
  });

function startServer() {
  app.listen(PORT, (error) => {
    if (error) {
      console.log("Cannot connect to server", error);
    } else {
      console.log(`Server is connected to port ${PORT}`);
    }
  });
}
