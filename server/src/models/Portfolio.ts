import db from "mongoose";
import bcrypt from "bcrypt";

export interface IPortfolioSchema extends db.Document {
  id: string;
  title: string;
  fromData: Date;
  toDate: Date;
  githubLink: string;
  siteUrl: string;
  participation: string;
  skill: string;
  mainFunction: string;
  detail: string;
}

const portfolioSchema = new db.Schema({
  id: {
    type: String,
    maxlength: 10,
  },
  title: { type: String, maxlength: 20 },
  fromData: { type: Date, maxlength: 10 },
  toDate: { type: Date, maxlength: 10 },
  githubLink: { type: String },
  siteUrl: { type: String },
  participation: { type: String },
  skill: { type: String },
  mainFunction: { type: String },
  detail: { type: String },
});

const Portfolio = db.model<IPortfolioSchema>("Portfolio", portfolioSchema);

export default Portfolio;
