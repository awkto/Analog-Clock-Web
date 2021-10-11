 // get current time from system
 var dateInfo = new Date();
 var hr = dateInfo.getHours() > 12 ? dateInfo.getHours() - 12 : dateInfo.getHours(),
   min = dateInfo.getMinutes(),
   sec = dateInfo.getSeconds(),
   milsec = dateInfo.getMilliseconds();

// one hour   is equal to 30 degrees (1 hr = 30°)
// one minute is equal to 6 degrees (1 min = 6°) 
// one second is equal to 6 degrees (1 sec = 6°)


//This places the clock hands at the right place based on current time
var hrAngle = hr * 30 + (min * 6 / 12),
    minAngle = min * 6 + (sec * 6 / 60),
    secAngle = sec * 6 + (milsec * 0.36 / 1000);

// sets initial angles of the hand wrappers
function setAngle(wrapper, angle) {
  document.querySelector("." + wrapper).style.transform = "rotate(" + angle + "deg)";
}
setAngle("hr-wrapper", hrAngle);
setAngle("min-wrapper", minAngle);
setAngle("sec-wrapper", secAngle);