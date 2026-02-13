📊 Play Store Analytics – Master Dashboard
🚀 Internship Extension Project | Advanced Interactive Analytics
<p align="center"> <img src="https://img.shields.io/badge/Python-Data%20Analysis-blue?style=for-the-badge&logo=python"/> <img src="https://img.shields.io/badge/Plotly-Interactive%20Charts-3F4F75?style=for-the-badge&logo=plotly"/> <img src="https://img.shields.io/badge/GitHub%20Pages-Live%20Deployed-success?style=for-the-badge&logo=github"/> <img src="https://img.shields.io/badge/Status-Internship%20Submission-green?style=for-the-badge"/> </p>
🌐 Live Dashboard

🔗 Live Project:
👉 https://abhinaVK0220.github.io/YOUR-REPO-NAME

(Replace with your actual deployed link)

🧠 Project Overview

This project extends the original Google Play Store dataset analysis completed during training and implements six advanced analytical dashboards as part of internship tasks.

The project demonstrates:

End-to-end data cleaning

Advanced filtering logic

Multi-condition analytical dashboards

Time-gated rendering logic

Professional frontend architecture

GitHub Pages deployment

📦 Dataset

Dataset Used: Google Play Store Dataset (Same dataset used during training project)
Source: Kaggle
Records: ~10,000+ Apps

Key Features Used:

App

Category

Rating

Reviews

Size

Installs

Type (Free / Paid)

Price

Content Rating

Android Version

Last Updated

Sentiment Subjectivity

⚠ Important:
No new dataset was introduced.
All internship tasks were implemented strictly on the original training dataset.

🏗 System Architecture
flowchart TD
    A[Google Play Store Dataset] --> B[Python Data Cleaning & Filtering]
    B --> C[Plotly Figure Generation]
    C --> D[Export as JSON]
    D --> E[HTML + CSS + JavaScript Dashboard]
    E --> F[GitHub Pages Deployment]

⚙️ Data Processing & Transformations
✔ Cleaning Steps

Converted Installs from string to numeric

Removed + and commas

Extracted numeric Android version

Parsed Size into MB

Filtered invalid ratings

Applied strict multi-condition filters per task

📊 Dashboard Modules
1️⃣ Grouped Bar Chart

Average Rating vs Total Reviews (Top 10 Categories)

Filtered by:

Rating ≥ 4.0

Size ≥ 10 MB

Last updated in January

Dual-axis comparison

Time restricted rendering

2️⃣ Choropleth Chart

Top Categories by Global Installs

⚠ Important Design Decision

The dataset does NOT contain country-level distribution.

To maintain data integrity:

❌ No artificial country mapping was introduced

❌ No fabricated geographic assumptions

✔ The visualization strictly reflects dataset truth

This ensures analytical correctness and ethical data handling.

3️⃣ Dual Axis Chart

Free vs Paid – Average Installs & Revenue

Filters Applied:

Installs ≥ 10,000

Revenue ≥ $10,000

Android Version > 4.0

Size > 15 MB

Content Rating = Everyone

App name ≤ 30 characters

Insights:

Paid apps generate significantly higher revenue

Free apps dominate installs but low monetization

4️⃣ Time Series Chart

Monthly Install Trends with Growth Highlights

Category prefix filtering

Month-over-month growth detection (>20%)

Dynamic shading

Language translations applied

5️⃣ Bubble Chart

App Size vs Rating (Bubble Size = Installs)

Advanced filters:

Rating > 3.5

Reviews > 500

Sentiment Subjectivity > 0.5

Installs > 50k

Category translations applied

Game category highlighted in pink.

6️⃣ Stacked Area Chart

Cumulative Installs Over Time

Filters:

Rating ≥ 4.2

No numbers in app name

Categories starting with T or P

Reviews > 1,000

Size between 20–80 MB

Month-over-month growth > 25% highlighted

🎨 Frontend Features

✔ Dark Professional UI
✔ Card-based dashboard layout
✔ Static preview images
✔ Time-gated chart availability
✔ Separate chart pages
✔ Responsive layout
✔ JSON-driven rendering

🖼 Dashboard Preview
🖥 Master Dashboard

(Add screenshot here)

/previews/dashboard.png

📊 Sample Chart Preview

(Add one example screenshot)

/previews/task3.png

⏳ Time-Based Rendering Logic

Each chart is accessible only during specific IST time intervals as per task requirements.

Logic implemented using:

Asia/Kolkata timezone
Dynamic availability check
Conditional rendering


Unavailable charts display:

“Preview available at [Time Slot]”

🛠 Tech Stack
Layer	Technology
Data Cleaning	Python (Pandas)
Visualization	Plotly
Frontend	HTML5
Styling	CSS3 (Dark Theme)
Logic	Vanilla JavaScript
Hosting	GitHub Pages
📁 Repository Structure
📦 play-store-dashboard
 ┣ 📂 previews
 ┣ 📂 data
 ┣ index.html
 ┣ chart.html
 ┣ script.js
 ┣ styles.css
 ┣ task1.json
 ┣ task2.json
 ┣ task3.json
 ┣ task4.json
 ┣ task5.json
 ┣ task6.json
 ┗ README.md

🎯 Key Insights Derived

Revenue distribution is heavily skewed toward paid apps.

Install growth spikes correlate with certain categories.

Larger apps do not necessarily have better ratings.

High-review categories maintain rating stability.

Growth-based highlighting reveals adoption bursts.

📚 Internship Compliance Checklist

✔ Built on training dataset
✔ Hosted live project
✔ Interactive dashboards
✔ Clean UI & structure
✔ Proper documentation
✔ No artificial assumptions
✔ Advanced filtering logic
✔ Professional presentation

👨‍💻 Author

Abhinav Kumar
B.Tech – Artificial Intelligence & Data Science
AI Engineer | Applied AI Systems

🔗 LinkedIn: (Add your link here)

🚀 Conclusion

This project demonstrates:

Analytical rigor

Clean architecture

Data integrity

UI/UX polish

Deployment skills

Production-level thinking

It bridges:

Data Science × Frontend Engineering × Deployment Strategy
