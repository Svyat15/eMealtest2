const burger = document.querySelector('.header_menu') 
const sidebar = document.querySelector('.sidebar')
burger.addEventListener('click',()=>{ 
    if(burger.classList.contains('active')){ 
        burger.classList.remove('active')
        sidebar.classList.remove('active')
    }else{ 
        burger.classList.add('active') 
        sidebar.classList.add('active')
    } 
})


const dedLine = '2022-05-13'
  function getTimeRemaining(endTime){
    const t = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor(t/(1000*60*60*24));
    const hours = Math.floor((t/(1000*60*60))%24);
    const minutes = Math.floor((t/(1000*60))%60);
    const seconds = Math.floor((t/1000)%60);
    return{
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }
  function setClock(selector,endTime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector("#days");
    const hours = timer.querySelector("#hours");
    const minutes = timer.querySelector("#minutes");
    const seconds = timer.querySelector("#seconds");
    const setinterval = setInterval(updateClock,1000);
    updateClock();

    function addZero(num){
      if (num > 0 && num < 10){
        return `0${num}`
      }else{
        return num
      }
    }

    function updateClock(){
      const t = getTimeRemaining(endTime);
      days.innerHTML = addZero(t.days);
      hours.innerHTML = addZero(t.hours);
      minutes.innerHTML = addZero(t.minutes);
      seconds.innerHTML = addZero(t.seconds);
      if (t.total <= 0){
        clearInterval(setinterval)
      }
    }

  
};
setClock('.timer',dedLine)

// const but1 = document.querySelector('.but1')
// const but2 = document.querySelector('.but2')
// const nameObj = document.querySelector('.name-object')
// localStorage.setItem(nameObj.value,)


