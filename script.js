/* ==========================================
   TASK CONFIGURATION
========================================== */

const tasks = [
    { id: 1, title: "Grouped Bar Chart", description: "Average Rating vs Total Reviews", time: [0, 24] },
    { id: 2, title: "Choropleth Chart", description: "Top Categories by Global Installs", time: [0, 24] },
    { id: 3, title: "Dual Axis Chart", description: "Free vs Paid Installs & Revenue", time: [0, 24] },
    { id: 4, title: "Time Series Chart", description: "Install Trends with Growth Highlights", time: [0, 24] },
    { id: 5, title: "Bubble Chart", description: "App Size vs Rating Analysis", time: [0, 24] },
    { id: 6, title: "Stacked Area Chart", description: "Cumulative Installs Over Time", time: [0, 24] }
];


/* ==========================================
   TIME UTILITIES
========================================== */

function getISTHour() {
    const now = new Date();
    const istTime = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
    );
    return istTime.getHours();
}

function isActive(start, end) {
    const hour = getISTHour();
    return hour >= start && hour < end;
}

function formatTime(hour) {
    let suffix = hour >= 12 ? "PM" : "AM";
    let formatted = hour > 12 ? hour - 12 : hour;
    if (formatted === 0) formatted = 12;
    return `${formatted} ${suffix}`;
}


/* ==========================================
   HOMEPAGE CARD CREATION
========================================== */

function createCards() {

    const grid = document.getElementById("card-grid");

    // 🚨 IMPORTANT FIX
    if (!grid) return;

    grid.innerHTML = "";

    tasks.forEach(task => {

        const [start, end] = task.time;
        const active = isActive(start, end);

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>

            <div class="preview-wrapper">
                <img src="previews/task${task.id}.png" class="preview-image">
                ${!active ? `
                    <div class="overlay">
                        Preview available at ${formatTime(start)} – ${formatTime(end)} IST
                    </div>
                ` : ""}
            </div>

            <div class="status ${active ? "active" : "inactive"}">
                ${active ? "🟢 Available Now" : "🔒 Locked"}
            </div>
        `;

        card.onclick = () => {
            if (active) {
                window.open(`chart.html?task=${task.id}`, "_blank");
            }
        };

        grid.appendChild(card);
    });
}


/* ==========================================
   CHART PAGE RENDERING
========================================== */

const chartTitles = {
    1: "Grouped Bar Chart – Average Rating vs Reviews",
    2: "Choropleth Chart – Global Installs",
    3: "Dual Axis Chart – Free vs Paid Revenue",
    4: "Time Series Chart – Install Trends",
    5: "Bubble Chart – Size vs Rating",
    6: "Stacked Area Chart – Cumulative Installs"
};

function loadChartPage() {

    const chartDiv = document.getElementById("chart");

    // 🚨 IMPORTANT FIX
    if (!chartDiv) return;

    const params = new URLSearchParams(window.location.search);
    const taskId = params.get("task");

    if (!taskId) return;

    const titleElement = document.getElementById("chart-title");
    if (titleElement) {
        titleElement.innerText = chartTitles[taskId];
    }

    fetch(`task${taskId}.json`)
        .then(res => res.json())
        .then(fig => {

            // Remove title from JSON completely
            if (fig.layout) {
                fig.layout.title = null;
                fig.layout.margin = { t: 30, l: 50, r: 30, b: 50 };
                fig.layout.paper_bgcolor = "#1e293b";
                fig.layout.plot_bgcolor = "#1e293b";
                fig.layout.font = { color: "white" };

                fig.layout.legend = {
                    orientation: "h",
                    y: 1.05,
                    x: 0.5,
                    xanchor: "center"
                };
            }

            Plotly.newPlot("chart", fig.data, fig.layout, {
                responsive: true,
                displaylogo: false
            });
        })
        .catch(error => {
            console.error("Chart load failed:", error);
        });
}


/* ==========================================
   SAFE PAGE INITIALIZATION
========================================== */

document.addEventListener("DOMContentLoaded", function () {
    createCards();
    loadChartPage();
});
