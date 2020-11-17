# cciDashboard

- [x] Use Vanilla JS and plotting libraries like plotyly.js or chart.js
- [x] Interactions with the API and the queries used
- [x] Any filtering of the data
- [x] How the visualizations from the data
- [x] Quality of the code and analyses you run
- [x] Interactive visualizations
- [x] Deploy on Heroku or Google Cloud


Using jQuery, Bootstrap library and FetchAPI in JS following data analysis was performed.
With the help of Chart.js, charts were implemented.
Code structure, on load the Fetch API makes a GET request to following (REST API)[https://health.data.ny.gov/resource/gnzp-ekau.json?$where=UPPER(ccs_diagnosis_description) like '%25CANCER%25'&$limit=10]
Using the data obtained, analysis are performed on each specifc category such as gender, cancer type, age group & more.



Live Version: https://cci-dashboard-nci.herokuapp.com/index.html
