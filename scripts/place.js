const yearSpan = document.getElementById('year');
const lastmodSpan = document.getElementById('lastmod');
if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (lastmodSpan) lastmodSpan.textContent = document.lastModified;

const tempEl = document.getElementById('temp');
const windEl = document.getElementById('wind');
const windchillEl = document.getElementById('windchill');

const temp = tempEl ? parseFloat(tempEl.textContent) : null; // °C
const wind = windEl ? parseFloat(windEl.textContent) : null; // km/h

function calculateWindChill(t, w) { return (13.12 + 0.6215*t - 11.37*Math.pow(w,0.16) + 0.3965*t*Math.pow(w,0.16)).toFixed(1); }


if (temp !== null && wind !== null) {
  if (temp <= 10 && wind > 4.8) {
    windchillEl.textContent = calculateWindChill(temp, wind) + ' °C';
  } else {
    windchillEl.textContent = 'N/A';
  }
}