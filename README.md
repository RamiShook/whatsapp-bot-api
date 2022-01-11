# Whatsapp API
This project is implementing of of <a href="https://github.com/pedroslopez/whatsapp-web.js">whatsapp-web.js</a> to work with Heroku.

## How to use!

- Clone,copy/fork this repo to your github account
- Go to <a href="https://dashboard.heroku.com/">HEROKU</a> sign to your account
- Create new app
- Go to resources tab and add (Heroku Postgres)
- Go to setting tab and set the Config Vars (KEY: DATABASE_URL, VALUE: DATABASE URL YOU GET FROM LAST STEP)
- Go to deploy tab and use your github repo to deploy
- After deplying open app and scan the qr code with your whatsapp application
- Enjoy!


## What does this bot do?
- This BOT will work on whatsapp, when this bot recieve a message (like message key in feature section) it will fetch api,get nessecary data and reply to the sender the current exchange rate from the wanted application.

## Why to use it?
- The owners of the following applications collect user information through their applications without the knowledge and consent of the user
- With this BOT you can automatically get the exchange rate ( FROM THE SAME SOURCE THAT THIS APPLICATION GOT) whithout need to download the app on your phone/device and putting your information at risk
- You can run this BOT on one whatsapp account and let all your contacts benefit without need to download/install any app! JUST by send you a message with the app name and get responded automatically when your device is connected to internet
## Features
 Messages and reply's

Message Key  | Bot Action
------------- | -------------
adde dollar  | BOT WILL FETCH <a href="https://pharmate.app/liraapi/getrate.php">THIS API</a> AND REPLY TO THE SENDER
lebanon dollar  | BOT WILL FETCH <a href="https://pharmate.app/liraapi/getrate.php">THIS API</a> AND REPLY TO THE SENDER
lira exchange  | BOT WILL FETCH <a href="https://pharmate.app/liraapi/getrate.php">THIS API</a> AND REPLY TO THE SENDER
sarraf lebanon  | BOT WILL FETCH <a href="https://pharmate.app/liraapi/getrate.php">THIS API</a> AND REPLY TO THE SENDER
lebanon prices  | BOT WILL FETCH <a href="https://pharmate.app/liraapi/getrate.php">THIS API</a> AND REPLY TO THE SENDER
omt  | BOT WILL FETCH <a href="https://www.omt.com.lb/api/exchange-rate?lang=en">THIS API</a> AND REPLY TO THE SENDER
dev  | BOT WILL REPLY WITH PREDEFINED MESSAGE
about BOT  | BOT WILL REPLY WITH PREDEFINED MESSAGE
features  | BOT WILL REPLY WITH PREDEFINED MESSAGE


 :red_circle: Before the BOT reply to any message it will save the data to database (Sender number, Message content, Sender device type) 


## IMPORTANT NOTICE

 :red_circle: This project is not affiliated, associated, authorized, endorsed by, or in any way officially connected with WhatsApp or any of its subsidiaries or its affiliates.\nThere is no kind of communication between me and the owners of these applications in any way, this is just an experimental project that grab the information from these applications.\n
 :red_circle: Before the BOT reply to any message it will save the data to database (Sender number, Message content, Sender device type)\n
 :red_circle: I DONT OWN ANY OF THIS APPLICATION OR LISTED API'S \n THERE IS NO KIND OF COMMUNICATION BETWEEN ME AND ANY OF THE OWNERS OF THESE APPLICATIONS AND/OR API'S\n
 :red_circle: USE THIS CODE ON YOUR OWN RISK!
 
 

## Authors

- [@RamiShook](https://www.github.com/RamiShook)

## Badges


[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)


