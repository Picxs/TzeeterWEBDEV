document.getElementById("month").addEventListener("change", updateDays);
document.getElementById("year").addEventListener("change", updateDays);

let currentDay = ''; 
let currentMonth = ''; 
let currentYear = ''; 

// Função para atualizar os dias disponíveis com base no mês e ano selecionados
function updateDays() {
    currentMonth = document.getElementById("month").value;
    currentYear = document.getElementById("year").value;
    const daySelect = document.getElementById("day");
    daySelect.innerHTML = '<option value="" disabled selected>Dia</option>'; 

    if (currentMonth === '') return; 

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);

    for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement("option");
        option.value = i < 10 ? '0' + i : i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    if (currentMonth === "02" && currentDay == "29") {
        filterLeapYears();
    } else {
        resetYearOptions(); 
    }
}


function getDaysInMonth(month, year) {
    const thirtyDayMonths = ["04", "06", "09", "11"];
    if (thirtyDayMonths.includes(month)) return 30;
    if (month === "02") {
        return isLeapYear(year) ? 29 : 28;
    }
    return 31;
}


function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}


function filterLeapYears() {
    const yearSelect = document.getElementById("year");
    const years = yearSelect.getElementsByTagName("option");

    for (let option of years) {
        const year = parseInt(option.value);
        if (!isLeapYear(year)) {
            option.style.display = 'none'; // Oculta os anos não bissextos
        } else {
            option.style.display = 'block'; // Exibe os anos bissextos
        }
    }
}

function resetYearOptions() {
    const yearSelect = document.getElementById("year");
    const years = yearSelect.getElementsByTagName("option");

    for (let option of years) {
        option.style.display = 'block'; // Restaura todos os anos
    }
}
