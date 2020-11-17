
// const AUTH_TOKEN = 'LP84l7c8EfxIN4x3xJE5cfZjI';
// const SECRET_TOKEN = 'PRDWsMDGmw6jgBvTR-rLOIL2GjC7acZfJtM4';
// const baseURL = 'https://soda.demo.socrata.com/oauth/access_token'
// const redirectUri = 'https://localhost:8080/callback'

$(document).ready(function(){
  // $("button").click(function(){
  // let url = baseURL + '?client_id' + AUTH_TOKEN + '&client_secret' + SECRET_TOKEN + '&grant_type=authorization_code'+ '&redirect_uri=' + redirectUri;
  // //  let url = `https://health.data.ny.gov/resource/gnzp-ekau.json?$where=UPPER(ccs_diagnosis_description) like '%25CANCER%25'&$limit=10`;
  // // message: "No such app token"
  //   console.log('url', url)
  //   fetch(url, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   }).then(function(result) {
  //     console.log('url', result)
  //     return result.json();
  // }).then(function(json) {
  //     console.log('json', json);
  // });
  // });

    let url = `https://health.data.ny.gov/resource/gnzp-ekau.json?$where=UPPER(ccs_diagnosis_description) like '%25CANCER%25'&$limit=30`;
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then(function(result) {
        return result.json();
    }).then(function(json) {
        console.log('json', json);
        processData(json)
    });
 

  function processData(data) {
    console.log('process', data)
    getStatsDataProcess(data)
    getAgeGroupDataProcess(data)
    getGenderDataProcess(data)
    getInsuranceDataProcess(data)
    getAdmissionDataProcess(data)
    getCancerTypeDataProcess(data)
  }

  function getStatsDataProcess(data) {
    $(".content .value").html(data.length);
    totalCostHolder = 0
    for (i = 0; i < data.length; i++) {
      console.log('tc22',(data[i].total_costs))
      totalCostHolder = totalCostHolder + parseFloat((data[i].total_costs))
    }
    console.log('tc',totalCostHolder)
    $(".content .value1").html(totalCostHolder);

  }

  function getAgeGroupDataProcess(data) {
    ageGroupHolder = [0,0,0]
    for (i = 0; i < data.length; i++) {
      if (data[i].age_group === '30 to 49') {
        ageGroupHolder[0] += 1
      }
      else if (data[i].age_group === '50 to 69') {
        ageGroupHolder[1] += 1
      }
      else {
        ageGroupHolder[2] += 1
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

  function getGenderDataProcess(data) {
    genderHolder = [0,0]
    for (i = 0; i < data.length; i++) {
      if (data[i].gender === 'F') {
        genderHolder[0] += 1
      }
      else if (data[i].gender === 'M') {
        genderHolder[1] += 1
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

  function getInsuranceDataProcess(data) {
    insuranceHolder = [0,0,0,0]
    secondaryInsuranceHolder = [0,0,0,0]
    for (i = 0; i < data.length; i++) {
      if (data[i].payment_typology_1 === 'Medicare') {
        insuranceHolder[0] += 1
      }
      else if (data[i].payment_typology_1 === 'Blue Cross/Blue Shield') {
        insuranceHolder[1] += 1
      }
      else if (data[i].payment_typology_1 === 'Private Health Insurance') {
        insuranceHolder[2] += 1
      }
      else {
        insuranceHolder[3] += 1
      }
  }
  for (i = 0; i < data.length; i++) {
    if (data[i].payment_typology_2 && data[i].payment_typology_2 === 'Medicare') {
      secondaryInsuranceHolder[0] += 1
    }
    else if (data[i].payment_typology_2 && data[i].payment_typology_2 === 'Blue Cross/Blue Shield') {
      secondaryInsuranceHolder[1] += 1
    }
    else if (data[i].payment_typology_2 && data[i].payment_typology_2 === 'Private Health Insurance') {
      secondaryInsuranceHolder[2] += 1
    }
    else {
      secondaryInsuranceHolder[3] += 1
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

function getAdmissionDataProcess(data) {
    admissionHolder = [0,0]
    for (i = 0; i < data.length; i++) {
      if (data[i].type_of_admission === 'Emergency') {
        admissionHolder[0] += 1
      }
      else if (data[i].type_of_admission === 'Elective') {
        admissionHolder[1] += 1
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

function getCancerTypeDataProcess(data) {
  cancerTypeHolder = [0,0,0,0,0,0]
  for (i = 0; i < data.length; i++) {
    if (data[i].ccs_diagnosis_description === 'Cancer of colon') {
      cancerTypeHolder[0] += 1
    }
    else if (data[i].ccs_diagnosis_description === 'Cancer of pancreas') {
      cancerTypeHolder[1] += 1
    }
    else if (data[i].ccs_diagnosis_description === 'Cancer of stomach') {
      cancerTypeHolder[2] += 1
    }
    else if (data[i].ccs_diagnosis_description === 'Cancer of cervix') {
      cancerTypeHolder[3] += 1
    }
    else if (data[i].ccs_diagnosis_description === 'Cancer of bronchus; lung') {
      cancerTypeHolder[4] += 1
    }
    else {
      cancerTypeHolder[5] += 1
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
})