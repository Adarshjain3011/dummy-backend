const candidateData =[
    {
      "email": "john.doe@example.com",
      "appliedCompanies": [
        {
          "org_name": {
            "applicantName":"John",
            "companyName": "Company XYZ",
            "appliedAt": "2024-11-01",
            "jobTitle": "Software Engineer",
            "applicationStatus": "Pending",
            "rounds": [
              {
                "roundName": "Round 1 - Technical Interview",
                "date": "2024-11-05",
                "status": "Completed",
                "feedback": "Passed technical interview, waiting for the final round."
              },
              {
                "roundName": "Round 2 - HR Interview",
                "date": "2024-11-10",
                "status": "Pending"
              }
            ],
            "currentRound": "Round 2 - HR Interview",
            "currentStatus": "Pending"
          }
        }
      ]
    },
    {
      "email": "jane.smith@example.com",
      "appliedCompanies": [
        {
          "org_name": {
            "applicantName":"John",
            "companyName": "Company ABC",
            "appliedAt": "2024-10-20",
            "jobTitle": "Frontend Developer",
            "applicationStatus": "In Progress",
            "rounds": [
              {
                "roundName": "Round 1 - Online Assessment",
                "date": "2024-10-25",
                "status": "Completed",
                "feedback": "Good problem-solving skills, recommended for next round."
              },
              {
                "roundName": "Round 2 - Technical Interview",
                "date": "2024-10-30",
                "status": "Pending"
              }
            ],
            "currentRound": "Round 2 - Technical Interview",
            "currentStatus": "Pending"
          }
        }
      ]
    },
    {
      "email": "alice.brown@example.com",
      "appliedCompanies": [
        {
          "org_name": {
            "applicantName":"John",
            "companyName": "Company DEF",
            "appliedAt": "2024-09-15",
            "jobTitle": "Backend Developer",
            "applicationStatus": "Rejected",
            "rounds": [
              {
                "roundName": "Round 1 - Technical Interview",
                "date": "2024-09-20",
                "status": "Completed",
                "feedback": "Strong technical skills but not a cultural fit."
              }
            ],
            "currentRound": null,
            "currentStatus": "Rejected"
          }
        }
      ]
    },
    {
      "email": "bob.martin@example.com",
      "appliedCompanies": [
        {
          "org_name": {
            "applicantName":"John",
            "companyName": "Company GHI",
            "appliedAt": "2024-10-10",
            "jobTitle": "Full Stack Developer",
            "applicationStatus": "Offer Extended",
            "rounds": [
              {
                "roundName": "Round 1 - Online Assessment",
                "date": "2024-10-12",
                "status": "Completed",
                "feedback": "Excellent coding skills."
              },
              {
                "roundName": "Round 2 - Technical Interview",
                "date": "2024-10-15",
                "status": "Completed",
                "feedback": "Well-rounded skills in frontend and backend."
              },
              {
                "roundName": "Round 3 - HR Interview",
                "date": "2024-10-18",
                "status": "Completed",
                "feedback": "Good communication and team player."
              }
            ],
            "currentRound": null,
            "currentStatus": "Offer Extended"
          }
        }
      ]
    },
    {
      "email": "charlie.kane@example.com",
      "appliedCompanies": [
        {
          "org_name": {

            "applicantName":"John",
            "companyName": "Company JKL",
            "appliedAt": "2024-08-01",
            "jobTitle": "Data Scientist",
            "applicationStatus": "Pending",
            "rounds": [
              {
                "roundName": "Round 1 - Aptitude Test",
                "date": "2024-08-05",
                "status": "Completed",
                "feedback": "Passed with high scores."
              },
              {
                "roundName": "Round 2 - Technical Interview",
                "date": "2024-08-10",
                "status": "Pending"
              }
            ],
            "currentRound": "Round 2 - Technical Interview",
            "currentStatus": "Pending"
          }
        }
      ]
    },
    {
      "email": "lisa.jones@example.com",
      "appliedCompanies": [
        {
          "org_name": {

            "applicantName":"John",
            "companyName": "Company MNO",
            "appliedAt": "2024-07-20",
            "jobTitle": "UI/UX Designer",
            "applicationStatus": "In Progress",
            "rounds": [
              {
                "roundName": "Round 1 - Portfolio Review",
                "date": "2024-07-25",
                "status": "Completed",
                "feedback": "Excellent portfolio showcasing creativity."
              },
              {
                "roundName": "Round 2 - Design Challenge",
                "date": "2024-07-30",
                "status": "Pending"
              }
            ],
            "currentRound": "Round 2 - Design Challenge",
            "currentStatus": "Pending"
          }
        }
      ]
    },
    {
      "email": "mark.wright@example.com",
      "appliedCompanies": [
        {
          "org_name": {

            "applicantName":"John",
            "companyName": "Company PQR",
            "appliedAt": "2024-06-15",
            "jobTitle": "DevOps Engineer",
            "applicationStatus": "Rejected",
            "rounds": [
              {
                "roundName": "Round 1 - Technical Interview",
                "date": "2024-06-20",
                "status": "Completed",
                "feedback": "Good technical knowledge, but lacked hands-on experience."
              }
            ],
            "currentRound": null,
            "currentStatus": "Rejected"
          }
        }
      ]
    },
    {
      "email": "emily.clark@example.com",
      "appliedCompanies": [
        {
          "org_name": {
            "applicantName":"John",
            "companyName": "Company STU",
            "appliedAt": "2024-05-10",
            "jobTitle": "Product Manager",
            "applicationStatus": "Offer Accepted",
            "rounds": [
              {
                "roundName": "Round 1 - Leadership Assessment",
                "date": "2024-05-15",
                "status": "Completed",
                "feedback": "Strong leadership skills."
              },
              {
                "roundName": "Round 2 - Final Interview",
                "date": "2024-05-20",
                "status": "Completed",
                "feedback": "Excellent overall fit for the role."
              }
            ],
            "currentRound": null,
            "currentStatus": "Offer Accepted"
          }
        }
      ]
    },
    {
      "email": "noah.hughes@example.com",
      "appliedCompanies": [
        {
          "org_name": {

            "applicantName":"John",
            "companyName": "Company VWX",
            "appliedAt": "2024-04-01",
            "jobTitle": "Cloud Engineer",
            "applicationStatus": "In Progress",
            "rounds": [
              {
                "roundName": "Round 1 - Online Assessment",
                "date": "2024-04-05",
                "status": "Completed",
                "feedback": "Good understanding of cloud platforms."
              },
              {
                "roundName": "Round 2 - Technical Interview",
                "date": "2024-04-10",
                "status": "Pending"
              }
            ],
            "currentRound": "Round 2 - Technical Interview",
            "currentStatus": "Pending"
          }
        }
      ]
    },
    {
      "email": "sophia.lee@example.com",
      "appliedCompanies": [
        {
          "org_name": {
            "applicantName":"John",
            "companyName": "Company YZA",
            "appliedAt": "2024-03-15",
            "jobTitle": "Machine Learning Engineer",
            "applicationStatus": "Pending",
            "rounds": [
              {
                "roundName": "Round 1 - Coding Challenge",
                "date": "2024-03-20",
                "status": "Completed",
                "feedback": "Impressive ML knowledge."
              },
              {
                "roundName": "Round 2 - Technical Interview",
                "date": "2024-03-25",
                "status": "Pending"
              }
            ],
            "currentRound": "Round 2 - Technical Interview",
            "currentStatus": "Pending"
          }
        }
      ]
    }
  ]
  

  module.exports = candidateData;

