import "../styles/index.css";
import React from 'react';
import { createRoot } from 'react-dom/client';
import TrafficLight from "./components/traffic-light";

const domNode = document.getElementById('app');
const root = createRoot(domNode);
root.render(<TrafficLight/>);

