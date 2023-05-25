const numberfun = () => {
  let numberBox = [];
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      numberBox.push(i);
    }
  }
  return numberBox;
};
