# Travel Booking
This is a trips planning application that let's users book flights, hotels and rents cars for their trips. The apllication uses the SkyScanner API. The application was built in an Agile team with a group of 4 developers.

# Contributing Developers
Built by  [Sebastian](https://github.com/gbudjeakp), [Shay](https://github.com/newCodeWriter) [Ray](https://github.com/BoomBoomRay), [Tojonirina](https://github.com/Tojonirina4)


# Technologies Used 
<li>React</li>
<li>React-Context API</li>
<li>Node</li>
<li>MongoDB</li>
<li>Express</li>
<li>Material-UI</li>
<li>JWT</li>
<li>STRIPE API</li>

## How to run Server Locally
Run `npm run dev ` to start the server and establish Database connection. 

## How to Front-End Server Locally
Change directory to `client` and run `npm start ` to start the front-end server.

## How to set up application environment
`First You need to add an env file to the root of the application.`
```bash
# You can make this whatever
JWT_SECRET= ''

# obtained from mongoDB
MONGO_URL= ''

# obtained from SkyscannerAPI
RAPID_API_KEY= ''
RAPID_API_HOST= ''

# obtained from Sengrid API(see Adding API Key Dependencies)
SENDGRID_API_KEY= ''
EMAIL= ''

# obtained from AWS
AWS_SECRET_ACCESS_KEY=''
AWS_ACCESS_KEY_ID=''

# obtained from Stripe
STRIPE_SK=''
STRIPE_PK=''
```
You must also create a .env file in /client
```bash
# obtained from Stripe
REACT_APP_STRIPE_SK= ''
REACT_APP_STRIPE_PK

# email used in Sengrid account
REACT_APP_EMAIL= ''
```


# App features
Let's Users Book flights, Rent Hotels and Cars to different cities around the world. The APp let's users make payment via Stripe

# Preview of App ![travel-booking](https://user-images.githubusercontent.com/61554248/116787663-04949100-aa6b-11eb-9155-fe597eb4dfab.gif)


