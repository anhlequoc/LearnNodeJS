var friends = new Object();
friends.bill = {
  firstName: 'Bill',
  lastName: 'Lee',
  number: 000000
}
friends.steve = {
}
friends.steve.firstName = 'Steve';
friends.steve.lastName = 'Caron';
friends.steve.number = 1111111111;

friends.bill.address = ['11', '409/30', 'Kim Ma'];
friends.steve.address = ['12', '410/30', 'Doi Can'];

//console.log(friends.steve);
//console.log(typeof(friends));
//console.log(typeof(friends.bill));

var list = function(objFriends) {
  for (var obj in objFriends) {
    //console.log(obj);
  }
};

var search = function(name) {
  console.log(name);
  for (var obj in friends){
    console.log(friends[obj].firstName === name);
    if (friends[obj].firstName === name) {
      console.log(friends[obj]);
      return friends[obj];
    }
  }
};

search('Steve');
//list(friends);