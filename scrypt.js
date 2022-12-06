function pow(num, degree) {
  if (num > 1 && !isNaN(degree)) {
    return pow(num ** degree);
  }
  return num;
}

console.log(pow(3, 3));
