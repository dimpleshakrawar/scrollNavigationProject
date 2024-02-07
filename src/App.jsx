import { useEffect, useState } from "react";
import "./App.css";
import ClientTestimonials from "./components/clientTestimonials";
import testimonials from "../clientTestimonials.json";
import clients from "../clients.json";
import AllClients from "./components/AllClients";
import RoutingData from "./components/RoutingData";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [clientResponse, setClientResponse] = useState([]);

  const moveNextHandler = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % clients.length);
  };

  const movePreviousHandler = () => {
    if (selectedIndex === 0) setSelectedIndex(clients.length);
    setSelectedIndex((prevIndex) => (prevIndex - 1) % clients.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveNextHandler();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const clientData = clients.filter((client) => client.id === selectedIndex);

    const clientResponse = testimonials.filter(
      (client) => client.name === clientData[0].name
    );
    setClientResponse(clientResponse);
  }, [selectedIndex]);

  return (
    <div>
      <div className="max-sm:mb-[9rem] mb-[5rem]">
        <ClientTestimonials
          clientResponse={clientResponse}
          moveNextHandler={moveNextHandler}
          movePreviousHandler={movePreviousHandler}
        />
        <div className="flex flex-wrap justify-center items-center gap-3 relative max-sm:top-[2rem] ">
          {clients?.map((client) => (
            <AllClients
              key={client.id}
              client={client}
              selectedIndex={selectedIndex}
              setSelectedIndex={setSelectedIndex}
            />
          ))}
        </div>
      </div>

      <RoutingData />
    </div>
  );
}

export default App;
