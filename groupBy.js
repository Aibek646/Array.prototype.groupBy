Array.prototype.groupBy = function (fn) {
  const res = {};
  for (const item of this) {
    const key = fn(item);
    res[key] = res[key] || [];
    res[key].push(item);
  }
  return res;
};

const arr1 = [{ id: "1" }, { id: "1" }, { id: "2" }];

const arr2 = [
  [1, 2, 3],
  [1, 3, 5],
  [1, 5, 9],
];

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const fn1 = (item) => {
  return String(item.id);
};
const fn2 = (list) => {
  return String(list[0]);
};

const fn3 = function (n) {
  return String(n > 5);
};

arr3.groupBy(fn3);
