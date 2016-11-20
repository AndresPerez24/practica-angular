(function(){

  var apiUrl = 'https://koombea-dummy-api.herokuapp.com/people';

  var app = angular.module('contact', []);

  app.controller('contactController', ['$http', function ($http) { 
    var query = this;
    query.contact = [];
    query.contactList = [];
    $http.get(apiUrl).then(function (data) {
      query.contact = data;
      query.contactList = query.contact.data.people;
      console.log(query.contactList);
    });
  }]);
})(); 































// (function(){

//   var apiUrl = 'https://koombea-dummy-api.herokuapp.com/people',
//       list = document.getElementsByClassName('addresbook-list');

//   function httpGetJSON(url) {
//     return new Promise(function(resolve, reject) {
//       var req = new XMLHttpRequest();
//       req.open('GET', url, true);
//       req.onload = function() {
//         if (req.status == 200) {
//           var response = JSON.parse(req.response);
//           resolve(response);
//         }
//         else {
//           reject(Error(req.statusText));
//         }
//       };
//       req.onerror = function() {
//         reject(Error("Network Error"));
//       };
//       req.send();
//     });
//   }

//   function displayContacts(data) {
//     data.people.map(appendView);
//   }

//   function appendView(contact) {
//     var view = `<li class="addresbook-list__item">
//                   <div class="addresbook-list__image" style="background-image: url(${contact.avatar_url})"></div>
//                   ${contact.first_name} ${contact.last_name} (${contact.birthdate}) - ${contact.phone}
//                 </li>`
//     list[0].insertAdjacentHTML('beforeend', view);
//   }

//   function consoleError(error) {
//     console.log(error);
//   }

//   httpGetJSON(apiUrl)
//     .then(displayContacts)
//     .catch(consoleError);

// })(); 


