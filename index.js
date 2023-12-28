// Check if it's a working day and time
document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
    const currentHour = currentDate.getHours();

    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
        // Web app is available during working hours
        document.body.style.display = "block";
    } else {
        // Web app is not available
        document.body.style.display = "none";
        alert("The web application is only available during working hours (Monday to Friday, from 9 to 17).");
    }
});