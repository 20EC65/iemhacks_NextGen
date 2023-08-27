# iemhacks_NextGen
Sunil Prajapat (ECE 3rd year )  , Tushar Tak  (CSE 3rd year ) , Sakshi Gupta (ECE 3rd year )

# Endpoints
    - Create User/Docter
        - Path : /api/v1/signup
        - Method : POST
        - Body : {
            "name": "tushar",
            "email": "tushartak54@gmail.com",
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
            "RBC": "34",
            "MCV": "34",
            "Platelets": "34",
            "hemoglobin": "34",
            "monocycle": "34",
            "MCH": "34",
            "Neutrophilis":"34",
            "TLC": "34",
            "HCT": "34",
            "MCHC": "34",
            "lymphosytes": "34",
            "eosinophis": "34"
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
    - Create a Professional Health Docter
        - Path : /api/v1/professionals
        - Method : POST
        - Body: {
            "name" : "Tushar",
            "email": "tushar45@gmail.com",
            "address": "ajmer",
            "currAddress": "ajmer",
            "age": 21,
            "expertise": "Heart"
        }
        - Response : {
            data: newly Created user here,
            success: true,
            message: 'Successfully created the professional',
            err: {}
        }
    
    - Get All Professional Health Docter Details
        - Path : /api/v1/professionals
        - Method : GET
        - Body : {
            //Empty
        } 
        - Response : {
            data: all_reports_here,
            success: true,
            message: 'Successfully fetched the Details',
            err: {}
        }