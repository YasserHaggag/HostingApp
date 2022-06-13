## Infrastructure Descriptions

### AWS

#### RDS Postgres

Postgres database hosted on AWS RDS for storing information.

- RDS - Database Host: database-1.czpmybbqwycj.us-east-1.rds.amazonaws.com
- RDS - Database Port: 5432
- RDS - Database Name: postgres

#### Elastic Beanstalk

The backend API is hosted on AWS Elastic Beanstalk

Elastic Beanstalk Endpoint: `udagram-api-dev.eba-snp8pzhz.us-east-1.elasticbeanstalk.com/`

#### S3 Bucket

The frontend application hosted on AWS S3 Bucket.

S3 Bucket Endpoint: `http://yasser-udagram.s3-website-us-east-1.amazonaws.com/`


## Environment Variables

Setup the following variables in the .env file or in the cloud environments:
```
- PORT                = 8080
- POSTGRES_HOST       = <Database_IP_Address>
- POSTGRES_PORT       = <Database_Port>
- POSTGRES_DB         = <Database_Name>
- POSTGRES_USERNAME   = <Database_Username>
- POSTGRES_PASSWORD   = <Database_Password>
- URL                 = <Url>
- JWT_SECRET          = <Any_PassPhrase>
- AWS_REGION          = <us-east-1>
- AWS_PROFILE         = <Profile>
- AWS_BUCKET          = <Bucket_Name>
```
