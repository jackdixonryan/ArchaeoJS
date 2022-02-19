import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import Mainframe from "../game/lib/mainframe";

(async function main() {
  console.log("Starting Archaeo API...");
  const app = express();
  const port = process.env.PORT || 2140;

  app.use(cors());
  app.use(helmet());
  app.use(morgan("dev"));

  app.use(express.json());

  console.log("Generating mainframe...");
  const mainframe: Mainframe = getMainframe();

  app.get("/pages/:locationId", (req: Request, res: Response) => {
    const { params } = req;
    const { locationId } = params;
    const page = mainframe.pages.find((page) => page.location === locationId);
    if (!page) {
      res.status(404).send({ 
        error: "Page not found."
      });
    } else {
      // serve the page. 
      res.status(200).send({ page });
    }
  });

  app.get("/directory", (req: Request, res: Response) => {
    const { pages } = mainframe;
    res.send({ pages });
  });

  app.listen(port, () => {
    console.log("ArchaeoJS API listening on port", port);
  });
})();

function getMainframe(): Mainframe {
  // placeholder: get a single mainframe and use it to serve. 
  const mainframe = new Mainframe(); 
  return mainframe;
}


