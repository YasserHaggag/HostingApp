## Pipeline Process

### Continuous Integration

#### GitHub

GitHub Repository is used to store code and to be trigger CircleCI automated process.
Github link : https://github.com/YasserHaggag/HostingApp.git

#### CircleCI

CircleCI uses the configuartion file to know the scripts to be ran. We have to scripts here, one for building and deploying the frontend,
and the other for building and deploying the backend.

CircleCi link : https://app.circleci.com/pipelines/github/YasserHaggag/HostingApp

## Pipeline

From the root of the project:
- `npm run frontend:install`    - To install frontend dependencies.
- `npm run frontend:build`      - To build the Angular/Frontend.
- `npm run frontend:deploy`     - To deploy the project to S3 using `./udagram-frontend/bin/deploy.sh` deploy script.
- `npm run api:install`     - To install backend dependencies.
- `npm run api:change-main` - To change the main entry point in the package.json from `src/server.js` to `server.js` using `./udagram-api/bin/edit-main-entry.sh` with the help of jq and sponge.
- `npm run api:build`       - To transpile the Typescript/Backend.

## CircleCi

The order of the run jobs:
- Setting Env Variables.
- Install NodeJS.
- Checkout Code & Cloning the Repo.
- Install AWS CLI v2.
- Check & Disable AWS pager.
- Configure AWS AccessKeyID.
- Configure AWS Region.
- Frontend:
  - Install dependencies.
  - Build the angular.
  - Deploy the site to AWS S3.
- Backend:
  - Install dependencies.
  - Change The main entry point in package.json.
  - Transpile the typescript/ build the app.
  - Install AWS Elastic Beanstalk CLI.
  - Deploy the app to AWS Elastic Beanstalk.

