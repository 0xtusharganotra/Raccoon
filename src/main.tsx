import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Signin from "./Components/Signin.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={import.meta.env.VITE_DOMAIN}
        clientId={import.meta.env.VITE_CLIENT_ID}
        authorizationParams={{
          redirect_uri: window.location.origin + "/app",
        }}
        cacheLocation="localstorage" // 👈 Important
        useRefreshTokens={true}
      >
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/app" element={<App />} />
        </Routes>
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);
