const mcDonalds = {
  bigMac: 26.90,
  bigTasty: 39.90,
  mcFritasMedia: 13.90,
  topSundayChocolate: 11.90,
  isDelicious: true,
  city: 'Curitiba',
  unit: 'Park Shopping Barigui',
};

// console.log(mcDonalds);

mcDonalds.bigMac = 78.75;
mcDonalds['bigMac'] = 178.01;
mcDonalds.xablau = 'Renan olhos de águia';

// console.log(Object.keys(mcDonalds));
// console.log(Object.values(mcDonalds));
// console.log(Object.entries(mcDonalds));

const cloneMcDonalds = Object.assign({}, mcDonalds);

// console.log(cloneMcDonalds);

// console.log(mcDonalds);


const xablau = [12, 323, 54];
console.log(typeof xablau);