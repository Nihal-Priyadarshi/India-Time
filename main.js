var body=document.getElementById("body"),button=document.getElementById("button"),topbody=document.getElementById("top-body"),heading=document.getElementById("heading"),time=document.getElementById("time"),click=!0;function night(){body.className="night",button.style.backgroundColor="white",button.style.backgroundImage="url(./images/Day-Button.jpeg)",button.style.backgroundSize="cover",button.style.boxShadow="10px 10px 10px yellow, 10px -10px 10px yellow, -10px -10px 10px yellow, -10px 10px 10px yellow, 10px 10px 20px red, 10px -10px 20px red, -10px -10px 20px red, -10px 10px 20px red, 10px 10px 30px yellow, 10px -10px 30px yellow, -10px -10px 30px yellow, -10px 10px 30px yellow, 10px 10px 40px red, 10px -10px 40px red, -10px -10px 40px red, -10px 10px 40px red",topbody.style.backgroundImage="url(./images/Night-Back-Cover-Image.webp)",topbody.style.backgroundSize="cover",topbody.style.backgroundRepeat="no-repeat",heading.style.color="white",time.style.color="white"}function day(){body.className="day",button.style.backgroundColor="black",button.style.backgroundImage="url(./images/Night-Button.jpg)",button.style.backgroundSize="cover",button.style.boxShadow="10px 10px 10px cornflowerblue, 10px -10px 10px cornflowerblue, -10px -10px 10px cornflowerblue, -10px 10px 10px cornflowerblue, 10px 10px 20px darkblue, 10px -10px 20px darkblue, -10px -10px 20px darkblue, -10px 10px 20px darkblue, 10px 10px 30px cornflowerblue, 10px -10px 30px cornflowerblue, -10px -10px 30px cornflowerblue, -10px 10px 30px cornflowerblue, 10px 10px 40px darkblue, 10px -10px 40px darkblue, -10px -10px 40px darkblue, -10px 10px 40px darkblue",topbody.style.backgroundImage="url(./images/Day-Back-Cover-Image.jpeg)",topbody.style.backgroundSize="cover",topbody.style.backgroundRepeat="no-repeat",heading.style.color="black",time.style.color="black"}day(),button.onclick=function(){click?(night(),getTime(),setInterval(getTime,1e3),click=!1):(day(),getTime(),setInterval(getTime,1e3),click=!0)};var getTime=function(){time.innerHTML=(new Date).toLocaleString("en-US",{timeZone:"Asia/Kolkata",timeStyle:"long",hourCycle:"h12",dateStyle:"full"})};getTime(),setInterval(getTime,1e3);
