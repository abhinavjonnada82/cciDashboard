// With the help of Chart.js, charts were implemented. Code structure, on load the Fetch makes a GET request to REST API
//  Using the data obtained, analysis are performed on each specifc category such as gender, cancer type, age group & more.

function getDashboard(){
    let url = `https://health.data.ny.gov/resource/gnzp-ekau.json?$where=UPPER(ccs_diagnosis_description) like '%25CANCER%25'&$limit=30`;
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(function(result) {
        return result.json();
    }).then(function(json) {
        processData(json)
    });
  }

  function processData(data) {
    getStatsDataProcess(data)
    getAgeGroupDataProcess(data)
    getGenderDataProcess(data)
    getInsuranceDataProcess(data)
    getAdmissionDataProcess(data)
    getCancerTypeDataProcess(data)
  }

// Function to get stats
  function getStatsDataProcess(data) {
    document.getElementById("numPatients").innerHTML = data.length;
    totalCostHolder = 0
    for (i = 0; i < data.length; i++) {
      totalCostHolder = totalCostHolder + parseFloat((data[i].total_costs))
    }
    document.getElementById("totalCosts").innerHTML = totalCostHolder;

  }
// Function to display a chart for various age groups
  function getAgeGroupDataProcess(data) {
    ageGroupHolder = [0,0,0]
    for (i = 0; i < data.length; i++) {
      if (data[i].age_group === '30 to 49') {
        ageGroupHolder[0]++;
      }
      else if (data[i].age_group === '50 to 69') {
        ageGroupHolder[1]++;
      }
      else {
        ageGroupHolder[2]++;
      }
    }
  
  let ctx = $('#myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['30 to 49', '50 to 69', '70 or Older'],
        datasets: [{
            label: 'No. of People',
            data: ageGroupHolder,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});

}

// Function to display a pie chart for gender specifc
  function getGenderDataProcess(data) {
    genderHolder = [0,0]
    for (i = 0; i < data.length; i++) {
      if (data[i].gender === 'F') {
        genderHolder[0]++;
      }
      else if (data[i].gender === 'M') {
        genderHolder[1]++;
      }
  }
    let ctx1 = $('#myChart1');
    var myPieChart = new Chart(ctx1, {
      type: 'pie',
      data: {
        datasets: [{
          data: genderHolder,
          backgroundColor: [
            'rgba(255,105,180,0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
      }],
      labels: [
        'F',
        'M'
    ] 
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
    }
  });
  }

  // Function to display a radar chart for different insurance
  function getInsuranceDataProcess(data) {
    insuranceHolder = [0,0,0,0]
    secondaryInsuranceHolder = [0,0,0,0]
    for (i = 0; i < data.length; i++) {
      if (data[i].payment_typology_1 === 'Medicare') {
        insuranceHolder[0]++;
      }
      else if (data[i].payment_typology_1 === 'Blue Cross/Blue Shield') {
        insuranceHolder[1]++;
      }
      else if (data[i].payment_typology_1 === 'Private Health Insurance') {
        insuranceHolder[2]++;
      }
      else {
        insuranceHolder[3]++;
      }
  }

    for (i = 0; i < data.length; i++) {
      if (data[i].payment_typology_2 !== null) {
        if (data[i].payment_typology_2 === 'Medicare') {
          secondaryInsuranceHolder[0]++;
        }
        else if (data[i].payment_typology_2 === 'Blue Cross/Blue Shield') {
          secondaryInsuranceHolder[1]++;
        }
        else if (data[i].payment_typology_2 === 'Private Health Insurance') {
          secondaryInsuranceHolder[2]++;
        }
        else {
          secondaryInsuranceHolder[3]++;
        }
      }
}
  let ctx2 = $('#myChart2');
  var myRadarChart = new Chart(ctx2, {
    type: 'radar',
    data: {
      labels: ['Medicare', 'Blue Cross/Blue Shield', 'Private Health Insurance', 'Other'],
      datasets: [{
        label: 'Payment Typology 1',
        data: insuranceHolder,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
      ],
    },
    {
      label: 'Payment Typology 2',
      data: secondaryInsuranceHolder,
      backgroundColor: [
        'rgba(0, 255, 00, 0.1)' ],
  }]
   },

   options : {
        scale: {
            angleLines: {
                display: false
            },
            ticks: {
                suggestedMin: 5,
                suggestedMax: 10
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});
 }


// Function to display a doughnut chart for different entry
function getAdmissionDataProcess(data) {
    admissionHolder = [0,0]
    for (i = 0; i < data.length; i++) {
      if (data[i].type_of_admission === 'Emergency') {
        admissionHolder[0]++;
      }
      else if (data[i].type_of_admission === 'Elective') {
        admissionHolder[1]++;
      }
  }

  let ctx3 = $('#myChart3');
  var myPieChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: admissionHolder,
        backgroundColor: [
          'rgba(255,0,0,0.2)',
          'rgba(255,255,0,0.2)'
      ],
    }],
    labels: [
      'Emergency',
      'Elective'
  ] 
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
  }
});
}

// Function to display a bar chart for different cancer types
function getCancerTypeDataProcess(data) {

  // cancerTypeHolder = []
  // cancerTypes = {'Cancer of colon': 0, 'Cancer of pancreas': 1, 'Cancer of stomach': 2, 'Cancer of cervix': 3, 'Cancer of bronchus lung': 4}
  // for (i = 0; i <=  data.length; i++) {   
  //   let val = data[i].ccs_diagnosis_description;
  //   console.log('val', val)   
  //   if(cancerTypes[val]) {   	
  //     console.log('key',cancerTypes[val])
  //     cancerTypeHolder[cancerTypes[val]]++;   
  //   } 
  cancerTypeHolder = [0,0,0,0,0,0]
  for (i = 0; i < data.length; i++) {
    if (data[i].ccs_diagnosis_description === 'Cancer of colon') {
      cancerTypeHolder[0]++;
    }
    else if (data[i].ccs_diagnosis_description === 'Cancer of pancreas') {
      cancerTypeHolder[1]++;
    }
    else if (data[i].ccs_diagnosis_description === 'Cancer of stomach') {
      cancerTypeHolder[2]++;
    }
    else if (data[i].ccs_diagnosis_description === 'Cancer of cervix') {
      cancerTypeHolder[3]++;
    }
    else if (data[i].ccs_diagnosis_description === 'Cancer of bronchus; lung') {
      cancerTypeHolder[4]++;
    }
    else {
      cancerTypeHolder[5]++;
    }
}
  let ctx4 = $('#myChart4');
  let myChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['Cancer of colon', 'Cancer of pancreas', 'Cancer of stomach', 'Cancer of cervix', 'Cancer of bronchus; lung', 'Other'],
        datasets: [{
            label: 'Common Cancer Types',
            data: cancerTypeHolder,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(0, 255, 00, 0.1)',
                'rgba(0,128,128, 0.2)',
                'rgba(0,0,0,0.2)'

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(0, 255, 00, 0.1)',
                'rgba(0,128,128, 0.2)',
                'rgba(0,0,0,0.2)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});
}