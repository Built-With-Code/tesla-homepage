import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';

import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import Accessories from './assets/Desktop-Accessories.jpeg';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="sectionsContainer">
        <Section title="Lowest Cost Solar Panels in America" description="Money-back guarantee" image={SolarPanels} leftButton="Order Now" rightButton="Learn More" scrollIndicator />
        <Section title="Model S" description="Starting at $69,420" image={ModelS} leftButton="Custom Order" rightButton="Existing Inventory" />
        <Section title="Model 3" image={Model3} leftButton="Custom Order" rightButton="Existing Inventory" />
        <Section title="Model X" image={ModelX} leftButton="Custom Order" rightButton="Existing Inventory" />
        <Section title="Model Y" image={ModelY} leftButton="Custom Order" rightButton="Learn More" />
        <Section title="Solar for New Roofs" description="Solar Roof Costs Less Than a New Roof Plus Solar Panels" image={SolarRoof} leftButton="Order Now" rightButton="Learn More" />
        <Section title="Accessories" description=" " image={Accessories} leftButton="Shop Now" />
      </div>

    </div>
  );
}

export default App;
