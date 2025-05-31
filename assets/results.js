authlib =0
evilgood = 0
for (let i=1; i<16; i++) {
  let vals = JSON.parse(JSON.parse(localStorage.getItem(i)))
  if (vals.val<3){
    if (vals.val == 1){
      vals.val = (vals.val)*(-1)

    }
    else{
      vals.val= (vals.val)*(-1/4)
    }

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
scchart.style.width = '100%';
scchart.style.maxWidth = '600px';
scchart.style.height = 'auto';
scchart.style.aspectRatio = '1/1';


const myChart = new Chart(scchart, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Points',
      data: [
        { x: authlib, y: evilgood },
      ],
      backgroundColor: 'red',
      pointRadius: 8
    }]
  },
  options: {
    responsive: false, 
    maintainAspectRatio: true,
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


const rchart = document.getElementById('rchart')
rchart.style.width = '100%';
rchart.style.maxWidth = '600px';
rchart.style.height = 'auto';
rchart.style.aspectRatio = '1/1';


const points = [
  { x: -0.36, y: 0.284, label: 'Authlib' },
  { x: -0.309, y: -0.417, label: 'Rousseau' },
  { x: 0.863, y: 0.624, label: 'Locke' },
  { x: -0.914, y: -0.867, label: 'Hobbes' }
];

const rchart = new Chart(rchart, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Points',
      data: points,
      backgroundColor: 'red',
      pointRadius: 8
    }]
  },
  options: {
    responsive: false,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => ctx.raw.label
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'State/Individual',
        },
        min: -1,
        max: 1,
        grid: {
          color: ctx => ctx.tick.value === 0 ? 'black' : '#ccc',
          lineWidth: ctx => ctx.tick.value === 0 ? 2 : 1
        }
      },
      y: {
        title: {
          display: true,
          text: 'Human Nature'
        },
        min: -1,
        max: 1,
        grid: {
          color: ctx => ctx.tick.value === 0 ? 'black' : '#ccc',
          lineWidth: ctx => ctx.tick.value === 0 ? 2 : 1
        }
      }
    }
  }
});


document.getElementById("score").innerHTML = (`Relationship between state and individual (x-axis):${Math.round(authlib * 1000) / 1000} <br> Human Nature (y-axis):${Math.round(evilgood * 1000) / 1000} <br> Score are out of 1. The more towards the right, the more libertarian. The more towards the top, the more you believe that humans are good and cooperative`);


window.addEventListener('resize', function() {
  myChart.resize();
  rchart.resize()
});