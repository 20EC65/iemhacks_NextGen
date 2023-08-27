#Endpoints
    - Create User/Docter
        - Path : /api/v1/signup
        - Method : POST
        - Body : {
            "name": "tushar",
            "phoneNumber": "8619602183",
            "password" : "123"
        }
        - Response : {
            data: user_details,
            success: true,
            message: 'Successfully created the user',
            err: {}
        }
        Note : It shhould be sent in json.
    - Login User/Docter
        - Path : /api/v1/login
        - Method : POST
        - Body : {
            "name" : "tushar",
            "password" : "123"
        }
        - Response : {
            data: token,
            success: true,
            message: 'Successfully logged in!',
            err: {}
        }
    - Create Reports
        - Path : /api/v1/reports
        - Method : POST
        - Body : {
            "RBC" : "23",
            "WBC" : "23",
            "Platelets" : "23",
            "Hemoglobin" : "23"
        }
        Note : It should be in json.
        - Response : {
            data: sent data,
            success: true,
            message: 'Successfully created the Report',
            err: {}
        }
    - Get all Reports
        - Path : /api/v1/reports
        - Method : GET
        - Body : {
            // Empty
        }
        - Response : {
            data: all_reports_here,
            success: true,
            message: 'Successfully fetched the reports',
            err: {}
        }