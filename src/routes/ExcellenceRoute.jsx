import { Route, Routes, Navigate } from "react-router-dom";
import RouteContentDisplay from "../components/RouteContentDisplay";

const routeData = [
  {
    id: 1,
    label: "Strategize",
    color: "#eeb405",
    gifLink:
      "https://s3.amazonaws.com/blog.invisionapp.com/uploads/2017/04/running-gif.gif",
    subHeading: "Plan and position a successful product in the market",
    data: [
      "Target Market and Customer Segmentation",
      "Competitive Analysis",
      "Product Roadmap and Development",
      "Go-To-Market Strategy",
    ],
  },
  {
    id: 2,
    label: "Design",
    subHeading:
      "Experience the magic of our UX-UI designers for lovable and scalable designs.",
    gifLink:
      "https://cdn.dribbble.com/users/2603762/screenshots/5424794/design_800x600.gif",

    color: "#5893ff",
    data: [
      "Innovation Consulting",
      "User Research",
      "Market Research",
      "Product Strategy",
      "Experience Design (CX /UX /UI)",
      "Service Design",
    ],
  },
  {
    id: 3,
    label: "Build",
    subHeading:
      "Build on cutting-edge technology to create scalable solutions.",
    gifLink: "https://i.gifer.com/OFAF.gif",

    color: "#00c558",
    data: [
      "Mobile Application",
      "Web Application",
      "Enterprise Application",
      "Front-End Development",
      "ECommerce Application",
      "Custom Application",
    ],
  },
  {
    id: 4,
    label: "Secure",
    subHeading:
      "Guard your digital products with our security solutions from cyber threats.",
    gifLink:
      "https://i.pinimg.com/originals/63/fe/24/63fe24d4c052e81630459c64fc2f8c84.gif",

    color: "#ff2400",
    data: [
      "Malware Detection Removal",
      "24/7 Security Support",
      "Testing Cyber Security",
      "SIEM Threat Detection",
      "Content Delivery Network",
      "Website Hack Repair",
      "Security Management",
      "Identifying Threats",
      "Server Security",
      "Managing Cloud Security",
    ],
  },
  {
    id: 5,
    label: "Support",
    subHeading: "Support and maintenance solutions for smooth operation.",
    gifLink:
      "https://i.pinimg.com/originals/50/a8/57/50a857a7bbe36010c73c07792f1004f4.gif",

    color: "#5631ff",
    data: [
      "Troubleshooting",
      "System upgrades",
      "Bug fixes",
      "Security patches",
      "Performance optimization",
      "Proactive monitoring",
    ],
  },
];

const ExcellenceRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/strategize" />} />
      <Route
        path="/strategize"
        element={
          <RouteContentDisplay label={"Strategize"} routeData={routeData[0]} />
        }
      />
      <Route
        path="/design"
        element={
          <RouteContentDisplay label={"Design"} routeData={routeData[1]} />
        }
      />
      <Route
        path="/build"
        element={
          <RouteContentDisplay label={"Build"} routeData={routeData[2]} />
        }
      />
      <Route
        path="/secure"
        element={
          <RouteContentDisplay label={"Secure"} routeData={routeData[3]} />
        }
      />
      <Route
        path="/support"
        element={
          <RouteContentDisplay label={"Support"} routeData={routeData[4]} />
        }
      />
    </Routes>
  );
};

export default ExcellenceRoute;
