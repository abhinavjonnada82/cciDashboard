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
    document.getElementById("totalCosts").innerHTML = Math.floor(totalCostHolder);

  }

// Function to display a chart for various age groups
  function getAgeGroupDataProcess(data) {
    let ageGroupHolder = {}
    data.map(response => {
      (response.age_group in ageGroupHolder) ? 
        ageGroupHolder[response.age_group]++ : ageGroupHolder[response.age_group] = 1
  })

  const numOfAgeGroupCases = Object.keys(ageGroupHolder).map(i => ageGroupHolder[i]);
  const ageGroupLabels = Object.keys(ageGroupHolder).map(i => i);
  
  let ctx = document.getElementById('myChart');
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ageGroupLabels,
        datasets: [{
            label: 'No. of People',
            data: numOfAgeGroupCases,
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
    let genderHolder = {}
    data.map(response => {
      (response.gender in genderHolder) ? 
        genderHolder[response.gender]++ : genderHolder[response.gender] = 1
  })

    const numOfGenderCases = Object.keys(genderHolder).map(i => genderHolder[i]);
    const genderLabels = Object.keys(genderHolder).map(i => i);

    let ctx1 = document.getElementById('myChart1');
    var myPieChart = new Chart(ctx1, {
      type: 'pie',
      data: {
        datasets: [{
          data: numOfGenderCases,
          backgroundColor: [
            'rgba(255,105,180,0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
      }],
      labels: genderLabels
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
    }
  });
  }


  // Function to display a radar chart for different insurance
  function getInsuranceDataProcess(data) {
    let insuranceHolder = {}
    let secondaryInsuranceHolder = {}

    data.map(response => {
      (response.payment_typology_1 in insuranceHolder) ? 
       insuranceHolder[response.payment_typology_1]++ : insuranceHolder[response.payment_typology_1] = 1
  })

    data.map(response => {
      (response.payment_typology_2 in secondaryInsuranceHolder) ? 
      secondaryInsuranceHolder[response.payment_typology_2]++ : secondaryInsuranceHolder[response.payment_typology_2] = 1
  })

  const insuranceLabels = Object.keys(insuranceHolder).map(i => i);
  const numOfInsuranceUsers = Object.keys(insuranceHolder).map(i => insuranceHolder[i]);
  const numOfSecondaryInsuranceUsers = Object.keys(secondaryInsuranceHolder).map(i => secondaryInsuranceHolder[i]);

  let ctx2 = document.getElementById('myChart2');
  var myRadarChart = new Chart(ctx2, {
    type: 'radar',
    data: {
      labels: insuranceLabels,
      datasets: [{
        label: 'Payment Typology 1',
        data: numOfInsuranceUsers,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
      ],
    },
    {
      label: 'Payment Typology 2',
      data: numOfSecondaryInsuranceUsers,
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
    let admissionHolder = {}
    data.map(response => {
      (response.type_of_admission in admissionHolder) ? 
      admissionHolder[response.type_of_admission]++ : admissionHolder[response.type_of_admission] = 1
  })

  const numOfAdmissionTypes = Object.keys(admissionHolder).map(i => admissionHolder[i]);
  const admissionLabels = Object.keys(admissionHolder).map(i => i);

  let ctx3 = document.getElementById('myChart3');
  var myPieChart = new Chart(ctx3, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: numOfAdmissionTypes,
        backgroundColor: [
          'rgba(255,0,0,0.2)',
          'rgba(255,255,0,0.2)',
          'rgba(128,0,0,0.2)',
      ],
    }],
    labels: admissionLabels
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
  }
});
}


// Function to display a bar chart for different cancer types
function getCancerTypeDataProcess(data) {
  let cancerTypes = {}
  data.map(response => {
      (response.ccs_diagnosis_description in cancerTypes) ? 
        cancerTypes[response.ccs_diagnosis_description]++ : cancerTypes[response.ccs_diagnosis_description] = 1
  })

  const numOfCancerCases = Object.keys(cancerTypes).map(i => cancerTypes[i]);
  const cancerLabels = Object.keys(cancerTypes).map(i => i);

  let ctx4 = document.getElementById('myChart4');
  let myChart = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: cancerLabels,
        datasets: [{
            label: 'Common Cancer Types',
            data: numOfCancerCases,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(0, 255, 00, 0.1)',
                'rgba(0,128,128, 0.2)',
                'rgba(0,0,0,0.2)',
                'rgba(128,0,0,0.2)',
                'rgba(0,128,128,0.2)'

            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(0, 255, 00, 0.1)',
                'rgba(0,128,128, 0.2)',
                'rgba(0,0,0,0.2)',
                'rgba(128,0,0,0.2)',
                'rgba(0,128,128,0.2)'
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