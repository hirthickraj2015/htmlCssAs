var flag= true

function navbar(){
    console.log("hello");
    if(flag){
        document.getElementById('men1').style.left="-250px"
        document.getElementById('men2').style.marginLeft='0px'
        console.log("hello");
        flag= false
    }else{
        document.getElementById('men1').style.left="0px"
        document.getElementById('men2').style.marginLeft='250px'
        flag=true
    }

}


const xValues = [50,60,70,80,90,100,110,120,130,140,150];
const yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      lineTension: 0,
      backgroundColor: "rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],
    }
  }
});

