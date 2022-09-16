        // chart 2

        const labels2 = [
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
          ];

      const data2 = {
            labels: labels2,
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              data: [0, 10, 80, 3, 10, 60, 100,20,5,15,3,6],
            }]
          };


          const DATA_COUNT = 12;
          const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

          const data = {
          labels: labels2,
          datasets: [
              {
              label: 'Dataset 1',
              data: data2,
              borderColor: "red",
              tension: 0.4,
              },
              {
              label: 'Dataset 2',
              data: data2,
              borderColor:" blue",
              tension: 0.2,
              }
          ]
          };

      const config2 = {
          type: 'line',
          data: data2,
          options: {
              animations: {
              radius: {
                  duration: 400,
                  easing: 'linear',
                  loop: (context) => context.active
              }
              },
              hoverRadius: 12,
              hoverBackgroundColor: 'yellow',
              interaction: {
              mode: 'nearest',
              intersect: false,
              axis: 'x'
              },
              plugins: {
              tooltip: {
                  enabled: false
              }
              }
          },
          };

      const myChart2 = new Chart(
            document.getElementById('myChart2'),
            config2
          );


          // chart 3
          const labels3 = [
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
            '00',
          ];

          const data3 = {
                labels: labels3,
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'blue',
                  borderColor: 'rgb(255, 99, 132)',
                  data: [13, 10, 5, 2, 20, 30, 45,10,5,15,20],
                }]
              };

          const config3 = {
                type: 'bar',
                data: data3,
                options: {}
              };

          
          const myChart3 = new Chart(
            document.getElementById('myChart3'),
            config3
          );