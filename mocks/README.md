# URBA MOCK SERVER

## Route Creation

When creating a new endpoint, add it to an existing route or create a new route if necessary.

* Example:

```javascript
const companyGeneralInformationData = require('../data/company/company-general-information-data.json');

module.exports = [
  {
    id: "get-company-general-information", // (1)
    url: "/urba/order-results/company", // (2)
    method: "GET", // (3)
    variants: [ // (4)
      {
        id: "success", // (5)
        response: (req, res) => {
          res.status(200); // (6)
          res.send(companyGeneralInformationData); // (7)
        }
      }
    ]
  }
]

```

#### Legend

* (1) Route ID
* (2) URI to listen to
* (3) HTTP verb
* (4) Variants: Array of values representing the different response types (identified by their ID) to be returned
* (5) Variant ID
* (6) Status to be returned in the HTTP response
* (7) Body to be returned in the HTTP response (here in JSON format)

## Associating a New Route with its Variants

To do this, modify the `mocks.json` file located in the mocks directory.

```javascript
[
  {
    "id": "base", // (1)
    "routesVariants": [ // (2)
      "post-company-search:success", // (3)
    ]
  }
]
```

#### Legend

* (1) Mock ID (You can define multiple mock presets, and this ID is configurable in the server configuration `mocks.config.js`
* (2) List of endpoints to be listened
* (3) Route/endpoint declaration with its variant (always written as `[route ID]:[variant ID]`)

## Route Naming Convention

```javascript
"get-monitoring-status:success"
```

It is recommended to follow the convention of starting with the HTTP verb, followed by the domain (usually corresponding
to the folder structure), and finally describing the purpose of the route.

## URBA Routes Table

| File          | URL                               | HTTP verb | Route ID                          | Variant ID(s)                         |
|---------------|-----------------------------------|-----------|-----------------------------------|---------------------------------------|
| company.js    | /urba/company/search              | POST      | post-company-search               | success                               |
| company.js    | /urba/company/details             | GET       | get-company-details               | success                               |
| company.js    | /urba/order-results/company       | GET       | get-company-general-information   | success                               |
| country.js    | /country/auth/availableCountries  | GET       | get-available-countries           | [success, error-terms-and-conditions] |
| monitoring.js | /urba/monitoring/status           | GET       | get-monitoring-status             | [success, error]                      |
| monitoring.js | /urba/order/place-monitoring      | POST      | post-place-monitoring             | [success, error, error-subscription]  |
| monitoring.js | /urba/order-results/updates       | GET       | get-monitoring-notifications      | success                               |
| portfolio.js  | /urba/portfolios                  | GET       | get-portfolio-kpi                 | [success, error]                      |
| portfolio.js  | /urba/portfolios/companies        | GET       | get-portfolio-companies           | success                               |
| portfolio.js  | /urba/portfolios/companies/search | GET       | get-portfolio-companies-search    | success                               |
| portfolio.js  | /urba/order/place                 | POST      | post-portfolio-add-company        | [success, error, error-subscription]  |
| products.js   | /urba/order-results/assessments   | GET       | get-product-assessments           | [success, error]                      |
| products.js   | /urba/order-results/financials    | GET       | get-product-financials            | [success, error]                      |
| products.js   | /urba/order-results/extra-ao      | GET       | get-product-credit-opinion-result | [success, error]                      |
| products.js   | /urba/order/place-extra/ao        | POST      | post-product-credit-opinion       | [success, error, error-subscription]  |
| report.js     | /order/downloadBusinessReport/*   | GET       | get-report-download-file          | [success]                             |
| report.js     | /urba/order-results/extra         | GET       | get-report-status                 | [success]                             |
| report.js     | /urba/order/place-extra           | POST      | post-report                       | [success, error-subscription]         |

## Configuration file

At the root of the application, you will find a configuration file named `mocks.config.js`.<br>
This file contains various parameters that can be uncommented and customized according to your specific needs.

For more information please refer to the `mocks-server` documentation:

* https://mocks-server.org/docs/configuration-options
* https://mocks-server.org/docs/configuration-methods

-----------
Please note that this table provides an overview of the URBA routes. Adjust the file, URL, and other details as
necessary for your specific implementation.


