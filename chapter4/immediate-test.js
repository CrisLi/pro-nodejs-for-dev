var i = 0;

function compute() {
  if (i < 10) {
    i++;
    console.log(i);
    setImmediate(compute);
  }
}

compute();
console.log("compute() still working");
