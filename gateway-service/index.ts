import express from "express";
import httpProxy from "http-proxy";

const app = express();
const proxy = httpProxy.createProxyServer();
const port = 8080;
const services: Record<string, string | undefined> = {
  example: "http://localhost:3001",
  service2: process.env.SERVICE2_URL,
  service3: process.env.SERVICE3_URL,
  service4: process.env.SERVICE4_URL,
  service5: process.env.SERVICE5_URL,
};

// Route requests to the appropriate service
app.all("/:service/*", (req, res) => {
  try {
    const service = services[req.params.service as string];
    if (service) {
      const url = req.url.replace(`/${req.params.service}`, "");
      req.url = url;
      proxy.web(req, res, { target: service });
    } else {
      res.status(400).send({ error: "Invalid service" });
    }
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`gateway-service running on port ${port}...`);
});
