let counter = 0;
myFun();

function myFun() {
  wait_Fun(1000).then(() => {
    console.log(counter++);
    myFun();
  });
}

function wait_Fun(duration) {
  let p = new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
  return p;
}
