import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Test from "./components/test";
import Header from "./components/header";
import Footer from "./components/footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <App />
    <Footer />
  </StrictMode>
);
