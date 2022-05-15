## 🏃‍♂️ Run project locally

```
>> npm i -g yarn

>> git clone https://github.com/jd-apprentice/Node-TS.git

>> cd ./Node-TS

>> yarn install

>> yarn dev
```

## 🧪 Test locally

```
- These are the routes with insomnia

>> GET {{ _.BASE_URL }}/users

>> POST {{ _.BASE_URL }}/users

>> GET {{ _.BASE_URL }}/users/:id

>> DELETE {{ _.BASE_URL }}/users/:id

>> PUT {{ _.BASE_URL }}/users/:id
```

- Create
  ![CREATE](https://cdn.discordapp.com/attachments/875262629516546089/975128172502847640/unknown.png)
- Find
  ![USERS](https://cdn.discordapp.com/attachments/875262629516546089/975129797401378866/unknown.png)
- FindOne
  ![USER](https://cdn.discordapp.com/attachments/875262629516546089/975130152558293072/unknown.png)
- Update
  ![PUT](https://cdn.discordapp.com/attachments/875262629516546089/975132183616430110/unknown.png)
- Delete
  ![DELETE](https://cdn.discordapp.com/attachments/875262629516546089/975132448339918849/unknown.png)

## 🍇 Heroku deploy

- Go ahead to https://www.heroku.com/ create an account then log in into the dashboard

![DASHBOARD](https://cdn.discordapp.com/attachments/875262629516546089/975137204596768768/unknown.png)

- Once there create a new app

![NEWAPP](https://cdn.discordapp.com/attachments/875262629516546089/975137989690802237/unknown.png)

- Go to the settings page and select buildpacks then choose nodejs

![BUILDPACK](https://cdn.discordapp.com/attachments/875262629516546089/975139047720763452/unknown.png)

- After that you can go into deploys and deploy the app, for this method you have multiple options I often use github

![DEPLOY](https://cdn.discordapp.com/attachments/875262629516546089/975139525263261796/unknown.png)

- And below that there is the option for automatic deploys (when you push something to your selected branch ej main it will automatically deploy to heroku)

![ADEPLOY](https://cdn.discordapp.com/attachments/875262629516546089/975139885776261191/unknown.png)

- And for last if u haven't done already there is the manual deploy where you select the branch and deploy the app

![MANUAL](https://cdn.discordapp.com/attachments/875262629516546089/975140221509312532/unknown.png)

## 🏁 Finish

- And we are done! if everything was done correctly your app should be up and running on heroku, you can check it in the `Open App` button on their dashboard

- Here are some example apps i've build in the past with this structure

- A simple crud app [CRUD-BE](https://github.com/jd-apprentice/MEAN-APP-BE)
- Get news from Infobae [Infobae-API](https://github.com/jd-apprentice/infobae-api)
- Get random waifus [Waifuland](https://github.com/jd-apprentice/waifuland-api)

## 📂 Folder structure

```src
|--> @types
|--> config
|--> controllers
    >user-controller.ts
|--> models
    |--> interfaces
    >user.ts
|--> routes
    >user-route.ts
    >index.ts
|--> services
>database.ts (Connection with the database)
>index.ts (Run the app)
>server.ts (App instance)
```

## 📚 Stack & Technologies

- Nodejs
- Typescript
- Express
- Mongodb
- Mongoose
- Heroku
