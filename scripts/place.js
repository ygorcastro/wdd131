const tempC = 10;
const windKmh = 5;

function calculateWindChill(t, v) {
  return 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);
}

const windChillEl = document.getElementById("windchill");
if (tempC <= 10 && windKmh > 4.8) {
  const wc = calculateWindChill(tempC, windKmh);
  windChillEl.textContent = `${wc.toFixed(1)} °C`;
} else {
  windChillEl.textContent = "N/A";
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastmod").textContent = document.lastModified;

document.getElementById("temp").textContent = tempC;
document.getElementById("wind").textContent = windKmh;
