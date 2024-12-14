
/*

function greetings(){
  console.log('hello');
}
greetings();


const name = 3;
 const function1 = function greeting(){
  console.log('hello too');
 };
 console.log(function1);
 function1();

 const object1 = {num: 2, 
  fun: function greeting(){
    console.log('vickie');
  }
 }
 object1.fun();

 function display(param){
  console.log(param);
 }
 display(2);

 function run(param){
param();
 }
 run(function(){console.log('victor busami');});
 

 

 setTimeout(function(){console.log('victor');}, 5000);

 setInterval(function() {
  console.log('interval');
 }, 3000);

 console.log('next line 2');
 

 
[
  'make dinner',
  'wash dishes',
  'watch youtube'
]
.forEach(function(value, index){

  if(value === 'wash dishes'){return;}
  console.log(index);
console.log(value);
});


const arrowFunction = () => {
  console.log('hello');
}
arrowFunction();

*/
const buttonElement = document.querySelector('.js-button');


const eventListener = () => {console.log('click');}
buttonElement.addEventListener('click', eventListener);

buttonElement.addEventListener('click', () => {console.log('click2');});

buttonElement.removeEventListener('click', eventListener);






console.log([1, -3, 5].filter((value, index) => {

  if(value >= 0){return true}
  else{return false;}
  return true;
}));