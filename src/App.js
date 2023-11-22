import { Typography } from "@mui/material";
import "./App.css";
import RestaurantList from "./component/RestaurantList";

function App() {
  return (
    <div className="App">
      <Typography variant="h4" gutterBottom>
        Restaurant App
      </Typography>
      <RestaurantList />
    </div>
  );
}

export default App;
