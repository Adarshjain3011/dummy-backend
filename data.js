const candidateData = [
    {
      "email": "john.doe@example.com",
      "appliedCompanies": [
        {
          "org_name": {
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
    }
    // Add more entries to make up to 40
  ]
  

module.exports =  candidateData;


