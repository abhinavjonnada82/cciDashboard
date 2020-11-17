
const AUTH_TOKEN = 'LP84l7c8EfxIN4x3xJE5cfZjI';
const SECRET_TOKEN = 'PRDWsMDGmw6jgBvTR-rLOIL2GjC7acZfJtM4';
const baseURL = 'https://soda.demo.socrata.com/oauth/access_token'
const redirectUri = 'https://localhost:8080/callback'

const testData = [
	{
	"abortion_edit_indicator": "N",
	"age_group": "70 or Older",
	"apr_drg_code": "281",
	"apr_drg_description": "Malignancy of hepatobiliary system & pancreas",
	"apr_mdc_code": "7",
	"apr_mdc_description": "Diseases and Disorders of the Hepatobiliary System and Pancreas",
	"apr_medical_surgical_description": "Medical",
	"apr_risk_of_mortality": "Major",
	"apr_severity_of_illness_code": "2",
	"apr_severity_of_illness_description": "Moderate",
	"birth_weight": "0",
	"ccs_diagnosis_code": "17",
	"ccs_diagnosis_description": "Cancer of pancreas",
	"ccs_procedure_code": "0",
	"ccs_procedure_description": "NO PROC",
	"discharge_year": "2016",
	"emergency_department_indicator": "Y",
	"ethnicity": "Not Span/Hispanic",
	"facility_id": "39",
	"facility_name": "Memorial Hosp of Wm F & Gertrude F Jones A/K/A Jones Memorial Hosp",
	"gender": "M",
	"health_service_area": "Western NY",
	"hospital_county": "Allegany",
	"length_of_stay": "4",
	"operating_certificate_number": "0228000",
	"patient_disposition": "Home or Self Care",
	"payment_typology_1": "Medicare",
	"payment_typology_2": "Medicare",
	"payment_typology_3": "Medicaid",
	"race": "White",
	"total_charges": "10402.25",
	"total_costs": "5158.47",
	"type_of_admission": "Emergency",
	"zip_code_3_digits": "148"
	},

    {
        "abortion_edit_indicator": "N",
        "age_group": "30 to 49",
        "apr_drg_code": "281",
        "apr_drg_description": "Malignancy of hepatobiliary system & pancreas",
        "apr_mdc_code": "7",
        "apr_mdc_description": "Diseases and Disorders of the Hepatobiliary System and Pancreas",
        "apr_medical_surgical_description": "Medical",
        "apr_risk_of_mortality": "Major",
        "apr_severity_of_illness_code": "2",
        "apr_severity_of_illness_description": "Moderate",
        "birth_weight": "0",
        "ccs_diagnosis_code": "17",
        "ccs_diagnosis_description": "Cancer of pancreas",
        "ccs_procedure_code": "0",
        "ccs_procedure_description": "NO PROC",
        "discharge_year": "2016",
        "emergency_department_indicator": "Y",
        "ethnicity": "Not Span/Hispanic",
        "facility_id": "39",
        "facility_name": "Memorial Hosp of Wm F & Gertrude F Jones A/K/A Jones Memorial Hosp",
        "gender": "F",
        "health_service_area": "Western NY",
        "hospital_county": "Allegany",
        "length_of_stay": "4",
        "operating_certificate_number": "0228000",
        "patient_disposition": "Home or Self Care",
        "payment_typology_1": "Medicare",
        "payment_typology_2": "Medicare",
        "payment_typology_3": "Medicaid",
        "race": "White",
        "total_charges": "10402.25",
        "total_costs": "5158.47",
        "type_of_admission": "Emergency",
        "zip_code_3_digits": "148"
        },
        {
            "abortion_edit_indicator": "N",
            "age_group": "70 or Older",
            "apr_drg_code": "281",
            "apr_drg_description": "Malignancy of hepatobiliary system & pancreas",
            "apr_mdc_code": "7",
            "apr_mdc_description": "Diseases and Disorders of the Hepatobiliary System and Pancreas",
            "apr_medical_surgical_description": "Medical",
            "apr_risk_of_mortality": "Major",
            "apr_severity_of_illness_code": "2",
            "apr_severity_of_illness_description": "Moderate",
            "birth_weight": "0",
            "ccs_diagnosis_code": "17",
            "ccs_diagnosis_description": "Cancer of pancreas",
            "ccs_procedure_code": "0",
            "ccs_procedure_description": "NO PROC",
            "discharge_year": "2016",
            "emergency_department_indicator": "Y",
            "ethnicity": "Not Span/Hispanic",
            "facility_id": "39",
            "facility_name": "Memorial Hosp of Wm F & Gertrude F Jones A/K/A Jones Memorial Hosp",
            "gender": "M",
            "health_service_area": "Western NY",
            "hospital_county": "Allegany",
            "length_of_stay": "4",
            "operating_certificate_number": "0228000",
            "patient_disposition": "Home or Self Care",
            "payment_typology_1": "Medicare",
            "payment_typology_2": "Medicare",
            "payment_typology_3": "Medicaid",
            "race": "White",
            "total_charges": "10402.25",
            "total_costs": "5158.47",
            "type_of_admission": "Emergency",
            "zip_code_3_digits": "148"
            },
	
            {
                "abortion_edit_indicator": "N",
                "age_group": "50 to 69",
                "apr_drg_code": "281",
                "apr_drg_description": "Malignancy of hepatobiliary system & pancreas",
                "apr_mdc_code": "7",
                "apr_mdc_description": "Diseases and Disorders of the Hepatobiliary System and Pancreas",
                "apr_medical_surgical_description": "Medical",
                "apr_risk_of_mortality": "Major",
                "apr_severity_of_illness_code": "2",
                "apr_severity_of_illness_description": "Moderate",
                "birth_weight": "0",
                "ccs_diagnosis_code": "17",
                "ccs_diagnosis_description": "Cancer of pancreas",
                "ccs_procedure_code": "0",
                "ccs_procedure_description": "NO PROC",
                "discharge_year": "2016",
                "emergency_department_indicator": "Y",
                "ethnicity": "Not Span/Hispanic",
                "facility_id": "39",
                "facility_name": "Memorial Hosp of Wm F & Gertrude F Jones A/K/A Jones Memorial Hosp",
                "gender": "F",
                "health_service_area": "Western NY",
                "hospital_county": "Allegany",
                "length_of_stay": "4",
                "operating_certificate_number": "0228000",
                "patient_disposition": "Home or Self Care",
                "payment_typology_1": "Medicare",
                "payment_typology_2": "Medicare",
                "payment_typology_3": "Medicaid",
                "race": "White",
                "total_charges": "10402.25",
                "total_costs": "5158.47",
                "type_of_admission": "Emergency",
                "zip_code_3_digits": "148"
                },
]

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
  $("button").click(function(){
   // processData(testData)
    let url = `https://health.data.ny.gov/resource/gnzp-ekau.json?$where=UPPER(ccs_diagnosis_description) like '%25CANCER%25'&$limit=20`;
      console.log('url', url)
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
    });

  function processData(data) {
    console.log('process', data)
    // targetAgeGroupDataProcess(data)
    // targetGenderDataProcess(data)
  }

  function targetAgeGroupDataProcess(data) {
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
            label: 'Age group',
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
        }
    }
});

console.log('mc!', myChart)
  }
})