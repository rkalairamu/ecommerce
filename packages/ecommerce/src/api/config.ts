import { cache } from "react";

const configCache: Map<string, Promise<any>> = new Map();

function fetchHeaderConfig() {
  const API_URL = "http://localhost:3005/config/nav";
  return fetch(API_URL)
    .then((res) => {
      return res.json();
    })
    .then((res) => res)
    .catch(() => console.error("failed to fetch the configuration"));
}

const getHeaderConfig = cache(async () => {
  if (configCache.has("config")) {
    return configCache.get("config");
  }
  configCache.set("config", fetchHeaderConfig());
});

export { getHeaderConfig };
