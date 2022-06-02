import * as dotenv from "dotenv";
dotenv.config();
// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  username: "postgres",
  password: "password123",
  database: process.env.POSTGRES_DB,
  port: Number(5432),
  host: "database-2.czpmybbqwycj.us-east-1.rds.amazonaws.com",
  dialect: "postgres",
  aws_region: process.env.AWS_REGION,
  aws_profile: process.env.AWS_PROFILE,
  aws_media_bucket: process.env.AWS_BUCKET,
  url: process.env.URL,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
};
