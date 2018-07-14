# Hometask "Node.js Academy2018". Bohdan Koldun

## Користувачі чату

* `POST /api/user` - створити нового користувача [Скріншот Postman](http://prntscr.com/k6gpwv)

* `GET /api/user` - отримати список всіх користувачів [Скріншот Postman](http://prntscr.com/k6gqsz)

* `GET /api/user/:id` - отримати користувача з конкретним id [Скріншот Postman](http://prntscr.com/k6grjj)

* `GET /api/user/interlocutors/:id` - отримати список всіх співрозмовників користувача з конкретним id [Скріншот Postman](http://prntscr.com/k6gsud)


```function getInterlocutors(id, callback) {
  let model = this.model;

  Message.find(
    { senderId: id }
  )
    .distinct('receiverId',
      (error, ids) => {
        let transformedIDs = ids.map(obgId => { return obgId._id; });
        model.find(
          { '_id': { $in: transformedIDs } },
          callback
        );
      });

}```

     
* `PUT  /api/user/:id` - змінити дані користувача з конкретним id [Скріншот Postman](http://prntscr.com/k6gtts)

* `DELETE /api/user/:id` - видалити користувача з конкретним id [Скріншот Postman](http://prntscr.com/k6gue3)


## Повідомлення

* `POST /api/message` - створити нове повідомлення [Скріншот Postman](http://prntscr.com/k6gxml)

* `GET /api/message` - отримати список всіх повідомлень [Скріншот Postman](http://prntscr.com/k6gy5b)

* `GET /api/message/:id` - отримати повідомлення з конкретним id [Скріншот Postman](http://prntscr.com/k6gyra)

     
* `PUT  /api/message/:id` - змінити дані повідомлення з конкретним id [Скріншот Postman](http://prntscr.com/k6gzlo)

* `DELETE /api/message/:id` - видалити повідомлення з конкретним id [Скріншот Postman](http://prntscr.com/k6h0ho)


---
## [Postman Запити](https://documenter.getpostman.com/view/4815819/RWMCtpF1)


![alt text](https://res.cloudinary.com/postman/image/upload/w_152,h_56,c_fit,f_auto,t_team_logo/v1/team/768118b36f06c94b0306958b980558e6915839447e859fe16906e29d683976f0 "Postman")
