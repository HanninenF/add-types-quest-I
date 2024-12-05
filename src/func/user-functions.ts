import User from "./user";

export const averageAge = (allUsers: User) => {
  let allAges = 0;
  allUsers.forEach((u) => {
    allAges += u.age;
  });
  return allAges / allUsers.length;
};

export const averageNumberOfHobbies = (allUsers: User) => {
  let AllHobbies = 0;
  allUsers.forEach((u) => {
    AllHobbies += u.hobby.length;
  });
  return AllHobbies / allUsers.length;
};

export const getPersonWithMostHobbies = (people: User) => {
  let maxPerson: User[0] = { name: "", hobby: [], age: 0 };
  people.forEach((person) => {
    if (person.hobby.length > maxPerson.hobby.length) {
      maxPerson = person;
    }
  });
  return `Person med flest hobbys är:\n${maxPerson.name}, ${maxPerson.age} år\nsom gillar ${maxPerson.hobby.join(", ")}`;
};

export const getOldestPerson = (people: User) => {
  let oldestPerson: User[0] = { name: "", hobby: [], age: 0 };
  people.forEach((person) => {
    if (person.age > oldestPerson.age) {
      oldestPerson = person;
    }
  });

  return `Den äldsta personen är:\n${oldestPerson.name}, ${oldestPerson.age} år\nsom gillar att ${oldestPerson.hobby.join(", ")}`;
};
