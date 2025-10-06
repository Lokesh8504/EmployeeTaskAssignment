const employees = [
  {
    "id": 1,
    "firstName": "Aryan",
    "email": "aryan@ex.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Finalize Q3 Sales Report",
        "taskDescription": "Compile all sales data from the last quarter and create the final report for the board meeting.",
        "category": "Reporting",
        "taskDate": "2025-09-28"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop New Homepage Mockup",
        "taskDescription": "Create a new design mockup for the company homepage based on the new branding guidelines.",
        "category": "Design",
        "taskDate": "2025-10-05"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Fix Login Authentication Bug",
        "taskDescription": "Investigate and resolve the authentication issue reported in ticket #78A-1.",
        "category": "Development",
        "taskDate": "2025-09-25"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Lokesh",
    "email": "lokesh@ex.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Follow-up Calls",
        "taskDescription": "Call clients from the provided list to follow up on their recent inquiries.",
        "category": "Client Relations",
        "taskDate": "2025-10-01"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Social Media Calendar",
        "taskDescription": "Plan and schedule all social media posts for the month of October.",
        "category": "Marketing",
        "taskDate": "2025-09-30"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "User Acceptance Testing (UAT)",
        "taskDescription": "Perform UAT on the new beta feature before its public release.",
        "category": "QA",
        "taskDate": "2025-10-08"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Khanjan",
    "email": "khanjan@ex.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "completed": 2,
      "failed": 0,
      "newTask": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Submit Expense Reports",
        "taskDescription": "Finalize and submit all expense reports for September.",
        "category": "Operations",
        "taskDate": "2025-09-29"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Database Migration Prep",
        "taskDescription": "Prepare the staging environment for the upcoming database migration.",
        "category": "Backend",
        "taskDate": "2025-10-15"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Research Competitor APIs",
        "taskDescription": "Analyze the APIs of our top three competitors to identify key features.",
        "category": "Research",
        "taskDate": "2025-10-10"
      },
       {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Documentation",
        "taskDescription": "Document the new authentication flow for the internal knowledge base.",
        "category": "Development",
        "taskDate": "2025-09-24"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Rohit",
    "email": "rohit@ex.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "completed": 1,
      "failed": 1,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Marketing Campaign Brief",
        "taskDescription": "Write a detailed brief for the upcoming holiday marketing campaign.",
        "category": "Marketing",
        "taskDate": "2025-10-04"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code Review for Feature X",
        "taskDescription": "Perform a thorough code review on the pull request for the new filtering feature.",
        "category": "Development",
        "taskDate": "2025-09-29"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Prepare Presentation for Stakeholders",
        "taskDescription": "Slides were corrupted, need to restart. Create a slide deck summarizing project progress.",
        "category": "Project Management",
        "taskDate": "2025-10-02"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Harish",
    "email": "harish@ex.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    },
    "tasks": [
        {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Inventory Audit",
        "taskDescription": "Complete the physical audit of all IT hardware assets.",
        "category": "Operations",
        "taskDate": "2025-09-20"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Refactor Legacy UI Component",
        "taskDescription": "Update the old navigation bar component to use the new design system standards.",
        "category": "Frontend",
        "taskDate": "2025-10-12"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Draft Q4 Company Goals",
        "taskDescription": "Work with team leads to draft preliminary goals for the next quarter.",
        "category": "Strategy",
        "taskDate": "2025-10-18"
      }
    ]
  },
  {
    "id": 6,
    "firstName": "Raghvendra",
    "email": "raghu@ex.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "completed": 1,
      "failed": 0,
      "newTask": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Deploy Staging Server Updates",
        "taskDescription": "Push the latest build to the staging server for final QA.",
        "category": "DevOps",
        "taskDate": "2025-10-06"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Review Security Audit",
        "taskDescription": "Review the findings from the Q3 security audit and create tickets for any vulnerabilities.",
        "category": "Security",
        "taskDate": "2025-09-30"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Interview Backend Candidate",
        "taskDescription": "Conduct technical interview for the senior backend developer position.",
        "category": "HR",
        "taskDate": "2025-10-07"
      }
    ]
  }
]

const admin = [
    {
  "id": 101,
  "email": "admin@example.com",
  "password": "123"
}
]


export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))   // Storing employees array in local storage and using JSON.stringify to convert it into a string
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))  //retrieving the data from local storage
    const admin = JSON.parse(localStorage.getItem('admin'))  //retrieving the data from local storage
    
    return {employees, admin} //returning the data as an object
}