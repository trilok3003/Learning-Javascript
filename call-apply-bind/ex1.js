const info = {
    name: 'Trilok',
    surname: 'Singh',
  };
  
  const obj = {
    name: 'Amit',
    surname: 'Kumar',
    getFullName: function (age, gender) {
      console.log(this.name + ' ' + this.surname + ' ' + age + ' ' + gender);
    },
  };
  
  // CALL
  obj.getFullName.call(info, 21, 'male'); // => Trilok Singh 21 female
  
  // APPLY
  obj.getFullName.apply(info, [21, 'male']); // => Trilok Singh 21 male
  
  // BIND
  const func = obj.getFullName.bind(info, 21, 'male');
  
  func(); // => Trilok Singh 21 male