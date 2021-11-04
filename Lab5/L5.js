function randomArray(count, min, max) {
    if (count > (max - min)) return;
    var arr = [], t;
    var maxOfArray = Math.min.apply(Math, arr);
    while (count) {
      t = Math.floor(Math.random() * (max - min) + min);
      if (arr.indexOf(t) === -1) {
        arr.push(t);
        count--;
      }
    }
  
    return arr;
  }
function getMin(){
    j = 0;
    i=0;
    var help = randomArray(10,1,100)
    var minOfArray = Math.min.apply(null, help);
    console.log(help);
    console.log(minOfArray);
    document.forms[0].tabList.options[j]= new Option(help);
    document.forms[0].tabList1.options[i]= new Option(minOfArray);
    i++;
    j++;

}

