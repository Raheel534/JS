const randomcolor = function(){
  const hex = "0123456789ABCDEF"

  let color = "#";
  for(i=0; i<6; i++){
     color += hex[Math.floor(Math.random()* 16)]
  }
  return color;
};
let intervalid;
const startchangingColor = function () {
   intervalid = setInterval(changeBGcolor, 1000);

  function changeBGcolor () {

   document.body.style.backgroundColor = randomcolor();
  }
};
const stopchangingcolor = function (){
   clearInterval(intervalid);
        

    
};

document.querySelector('#start').addEventListener
('click', startchangingColor)

document.querySelector('#stop').addEventListener
('click', stopchangingcolor)