document.addEventListener('DOMContentLoaded', function() {

  const inputA = document.querySelector('input')
  const typeIn = document.querySelector('.result');

  inputA.addEventListener('input', function(e) {
    typeIn.textContent = '你剛剛輸入了：' + e.target.value
  })
})

// 以這個單純的例子來說，可以把 updateValue 直接綁進 addEventListener 裡


/* <input placeholder="Enter some text" name="name"/>
<p id="values"></p> */

// const input = document.querySelector('input');
// const log = document.getElementById('values');

// input.addEventListener('input', updateValue);

// function updateValue(e) {
//   log.textContent = e.srcElement.value;
// }




// Wrote by Alex

// document.querySelector('input').addEventListener('input', function(){

// const typeIn = document.getElementById('input').value
// document.addEventListener('input', function(){
//     document.querySelector('.result').innerHTML = '你剛剛輸入了：' + typeIn
//   })
// })


// document.addEventListener('DOMContentLoaded', function() {
//   document.querySelector('input').addEventListener('input', function(){

//   const typeIn = document.getElementById('input').value
//   document.querySelector('.result').innerHTML = '你剛剛輸入了：' + typeIn

//   })
// })