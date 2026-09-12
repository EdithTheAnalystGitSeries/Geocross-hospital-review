

# Geocross Hospital Review

A full-stack hospital patient review application built with React, Node.js, Express, and Docker.
Patients can submit reviews and ratings, and all reviews are displayed in real-time.

Deployed on AWS EC2 with Docker Compose.

## 🚀 Live Demo
`http://16.52.83.209:3002`

## ✨ Features
- **Submit Reviews**: Patients can submit name, rating, and comment
- **View Reviews**: All patient reviews displayed with timestamp
- **5-Star Rating System**
- **Dockerized**: Frontend + Backend + Docker Compose for easy deployment
- **REST API**: Simple Express API to handle reviews

## 🛠️ Tech Stack
**Frontend**: React, JavaScript, CSS
**Backend**: Node.js, Express.js
**DevOps**: Docker, Docker Compose, AWS EC2
**Port**: Frontend `3002`, Backend `3001`

## 📦 Project Structure

geocross-app/
├── docker-compose.yml
├── backend/
│ ├── Dockerfile
│ ├── app.js
│ └── package.json
└── frontend/
 ├── Dockerfile
 ├── package.json
 └── src


## 🏃‍♂️ Run Locally with Docker

### 1. Clone the repo
```bash
git clone https://github.com/EdithTheAnalystGitSeries/Geocross-hospital-review.git
cd Geocross-hospital-review

2. Build and start containers

docker-compose up -d --build

3. Open in browser
- Frontend: `http://localhost:3002`
- API: `http://localhost:3001/api/reviews`

4. Stop containers

docker-compose down

☁️ Deploy to AWS EC2
1. SSH into EC2: `ssh -i your-key.pem ubuntu@16.52.83.209`
2. Install Docker + Docker Compose
3. Clone repo and run `docker-compose up -d --build`
4. Open ports 3001 and 3002 in EC2 Security Group
5. Access: `http://16.52.83.209:3002`

📝 API Endpoints

Method	Endpoint	Description
`GET`	`/api/reviews`	Get all reviews
`POST`	`/api/reviews`	Submit a new review

Example POST body:

{
 "name": "Michael",
 "rating": 5,
 "comment": "very good"
}

🔧 Environment
No `.env` needed yet. Data is stored in-memory. 
For production, connect a database like MongoDB or Postgres.

👨‍💻 Author
*Michael Njideka*

📄 License
MIT License



