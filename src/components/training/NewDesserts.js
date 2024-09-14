const desserts = [
  {
    tittle: 'Chocolate Cake',
    calories: 400,
    createdAt: '2022-09-01',
  },
];

const newDesserts = desserts.map((dessert) => {
  return {
    tittle: dessert.tittle.toUpperCase(),
    ...dessert,
    kCal: dessert.calories / 1000,
  };
});

console.log(newDesserts);
