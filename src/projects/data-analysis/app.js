import { faker } from 'https://cdn.jsdelivr.net/npm/@faker-js/faker/+esm';

let storedData = localStorage.getItem('fakeUser');

if (!storedData) {
  const users = Array.from({ length: 150 }, () => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    address: {
      street: faker.location.streetAddress(),
      city: faker.location.city(),
    },
  }));
  localStorage.setItem('fakeUser', JSON.stringify(users));
  console.log('Novos usuários salvos');
} else {
  let userData = JSON.parse(storedData);
  console.log('Dados recuperados', userData);
}
let userData = JSON.parse(storedData);

function onlyNames(person) {
  const justNames = person.map((p) => p.name);
  return justNames;
}
//console.log(onlyNames(userData));

function onlyCity(cities) {
  const filtered = cities.filter((c) => c.address.city === 'South Rebecca');
  return filtered;
}
//console.log(onlyCity(userData));

function firstGmail(datas) {
  const first = datas.find((data) => data.email.includes('@gmail.com'));
  return first;
}
//console.log(firstGmail(userData));

function inRio(datas) {
  const search = datas.some((data) => data.address.city === 'Nadershire');
  return search;
}
//console.log(inRio(userData));

function searchEmails(datas) {
  const search = datas.every((data) => data.email.includes('@'));
  return search;
}
//console.log(searchEmails(userData));

function forCities(datas) {
  const search = datas.reduce((acc, data) => {
    if (acc[data.address.city]) {
      acc[data.address.city]++;
    } else {
      acc[data.address.city] = 1;
    }
    return acc;
  }, {});
  return search;
}
//console.log(forCities(userData));
