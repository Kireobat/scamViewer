import express from 'express';
import {handler} from "../frontend/build/handler.js";
import * as analyze from "./analyze/analyze.js";

const app = express();
const port = 81;

app.use(express.json());

app.get("/api", (req, res) => {
    res.send("Hello World!");
});

app.post("/api/analyze", async (req, res) => {
    try {
      const ip = await analyze.getIP(req.body.url);
      const hostInfo = await analyze.getHostInfo(req.body.url);

      const meta = {
        "date": new Date().toISOString(),
        "url": req.body.url,
      }
      res.json({
        meta: meta,
        ip: ip,
        hostInfo: {
          domainName: hostInfo.domainName,
          audit: hostInfo.audit,
          registrarName: hostInfo.registrarName,
          registrarWebsite: hostInfo.registrarWebsite,
          registryData: hostInfo.registryData,
          nameServers: hostInfo.registryData.nameServers,
        },
      });
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "An error occurred while analyzing the website." });
    }
  });

app.use(handler);

app.listen(port, () => {
    console.log(`Server is listening on port: ${port}`);
});
