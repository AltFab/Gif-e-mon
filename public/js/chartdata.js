
//Polar Area chart
let myChart = document.getElementById('myChart').getContext('2d');

//Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontColor = '#777';

let gameChart = new Chart(myChart, {
    type: 'polarArea', // can use bar, horizontal, line, pie, etc.
    data: {
        labels: ['Attack', 'Defend', 'Balance'],
        datasets: [{
            label: 'Skills Used',
            data: [
                20,
                10,
                5,

            ],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(153, 102, 255)'
            ],
            hoverBorderColor: '#000',
            hoverBorderWidth: 3,
        }]
    },
    //Gif-E-Mon title
    options: {
        title: {
            display: false,
            text: 'Gif-E-Mon Chart',
            fontSize: 25,
        },
        legend: {
            position: 'left',
            labels: {
                fontColor: '#000',
            }
        },
        //Chart Layout
        layout: {
            padding: {
                left: 50,
                right: 50,
            }
        }
    }
});



