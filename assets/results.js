authlib =0
evilgood = 0
for (let i=1; i<16; i++) {
  let vals = JSON.parse(JSON.parse(localStorage.getItem(i)))
  if (vals.val<3){
    vals.val = (vals.val)*(-1/2)

  }
  else{
    vals.val = Math.trunc((vals.val)/2)/2

  }
  authlib += ((vals.val)*(vals.mag.x))
  evilgood += ((vals.val)*(vals.mag.y))
}
authlib = (authlib/9.3)
evilgood =(evilgood/5.45)




console.log(authlib+"---"+evilgood)




const scchart = document.getElementById('scchart')
const myChart = new Chart(scchart, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Points',
      data: [
        {x: authlib, y: evilgood},
        
      ],
      backgroundColor: 'red',
      pointRadius: 8  // makes dots larger
    }]
  },
  options: {
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Human Nature',
        },
        min: -1,
        max: 1,
        grid: {
          color: (ctx) => ctx.tick.value === 0 ? 'black' : '#ccc',
          lineWidth: (ctx) => ctx.tick.value === 0 ? 2 : 1
        }
      },
      y: {
        title: {
          display: true,
          text: 'State/Individual'
        },
        min: -1,
        max: 1,
        grid: {
          color: (ctx) => ctx.tick.value === 0 ? 'black' : '#ccc',
          lineWidth: (ctx) => ctx.tick.value === 0 ? 2 : 1
        }
      }
    }
  }
});


document.getElementById("score").innerHTML=(`Relationship between state and individual (x-axis):${Math.round(authlib*1000)/1000} <br> Human Nature (x-axis):${Math.round(evilgood*1000)/1000} <br> Score are out of 1`)