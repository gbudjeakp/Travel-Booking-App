# Travel Booking
This is a trips planning application that let's users book flights, hotels and rents cars for their trips. The apllication uses the SkyScanner API. The application was built in an Agile team with a group of 4 developers.

# App features
Let's Users Book flights, Rent Hotels and Cars to different cities around the world. The app let's users make payment via Stripe. It allows users to select their favourite cities, edit that account details. It has a section that stores the users itinerary and past trips.


# Preview of App ![travel-booking](https://user-images.githubusercontent.com/61554248/116787663-04949100-aa6b-11eb-9155-fe597eb4dfab.gif)


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

# obtain from mongoDB
MONGO_URL= ''

# obtain from SkyscannerAPI
RAPID_API_KEY= ''
RAPID_API_HOST= ''

# obtain from Sengrid API
SENDGRID_API_KEY= ''
EMAIL= ''

# obtain from AWS
AWS_SECRET_ACCESS_KEY=''
AWS_ACCESS_KEY_ID=''

# obtain from Stripe
STRIPE_SK=''
STRIPE_PK=''
```
You must also create a .env file in /client
```bash
# obtain from Stripe
REACT_APP_STRIPE_SK= ''
REACT_APP_STRIPE_PK

# email used in Sengrid account
REACT_APP_EMAIL= ''
```

