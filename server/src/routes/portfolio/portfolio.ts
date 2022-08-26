import express from "express";
import portfolioController from "../../controllers/portfolio-controller";

const portfolioRouter = express.Router();

// portfolioRouter.post("/create-portfolio", portfolioController.createPortfolio);
// portfolioRouter.put("/update-portfolio", portfolioController.updatePortfolio);
// portfolioRouter.delete(
//   "/delete-portfolio",
//   portfolioController.deletePortfolio
// );
// portfolioRouter.get("/delete-portfolio", portfolioController.selectPortfolio);

export { portfolioRouter };
