function calculateAverage() {
    let archi_td = parseFloat(document.getElementsByName('archi_td')[0].value) || 0;
    let archi_exam = parseFloat(document.getElementsByName('archi_exam')[0].value) || 0;
    let algo_td = parseFloat(document.getElementsByName('algo_td')[0].value) || 0;
    let algo_tp = parseFloat(document.getElementsByName('algo_tp')[0].value) || 0;
    let algo_exam = parseFloat(document.getElementsByName('algo_exam')[0].value) || 0;
    let sys_td = parseFloat(document.getElementsByName('sys_td')[0].value) || 0;
    let sys_exam = parseFloat(document.getElementsByName('sys_exam')[0].value) || 0;
    let analyse_td = parseFloat(document.getElementsByName('analyse_td')[0].value) || 0;
    let analyse_exam = parseFloat(document.getElementsByName('analyse_exam')[0].value) || 0;
    let stats_td = parseFloat(document.getElementsByName('stats_td')[0].value) || 0;
    let stats_exam = parseFloat(document.getElementsByName('stats_exam')[0].value) || 0;
    let log_td = parseFloat(document.getElementsByName('log_td')[0].value) || 0;
    let log_exam = parseFloat(document.getElementsByName('log_exam')[0].value) || 0;
    let ang_td = parseFloat(document.getElementsByName('ang_td')[0].value) || 0;
    let ang_exam = parseFloat(document.getElementsByName('ang_exam')[0].value) || 0;

    let archi_avg = archi_td * 0.4 + archi_exam * 0.6;
    let algo_avg = algo_td * 0.2 + algo_tp * 0.2 + algo_exam * 0.6;
    let sys_avg = sys_td * 0.4 + sys_exam * 0.6;
    let analyse_avg = analyse_td * 0.4 + analyse_exam * 0.6;
    let stats_avg = stats_td * 0.4 + stats_exam * 0.6;
    let log_avg = log_td * 0.4 + log_exam * 0.6;
    let ang_avg = ang_td * 0.4 + ang_exam * 0.6;

    let archi_coef = 3;
    let algo_coef = 3;
    let sys_coef = 3;
    let analyse_coef = 3;
    let stats_coef = 3;
    let log_coef = 3;
    let ang_coef = 2;

    let weighted_sum =
        archi_avg * archi_coef +
        algo_avg * algo_coef +
        sys_avg * sys_coef +
        analyse_avg * analyse_coef +
        stats_avg * stats_coef +
        log_avg * log_coef +
        ang_avg * ang_coef;

    let semester_average = parseFloat((weighted_sum / 20).toFixed(2));

    if (semester_average < 0 || semester_average > 20) {
        console.log("ERROR");
        document.getElementById("averageResult").innerHTML = "ERROR: Average must be between 0 and 20";
        document.getElementById("averageResult").style.color = "red";
        document.getElementById("averageResult").classList.remove("result-bad", "result-mid", "result-good", "result-excellent");
        return;
    }

    let comment = "", emoji = "", resultClass = "";

    if (semester_average < 5) {
        comment = "yeah you're cooked!";
        emoji = "🥀";
        resultClass = "result-bad";
    } else if (semester_average < 10) {
        comment = "zeyer rohak hbibi!";
        emoji = "😔";
        resultClass = "result-mid";
    } else if (semester_average < 14) {
        comment = "gg you did well!";
        emoji = "👏";
        resultClass = "result-good";
    } else if (semester_average <= 20) {
        comment = "KHABACH!";
        emoji = "☝️🤓";
        resultClass = "result-excellent";
    }

    const resultDiv = document.getElementById('averageResult');
    resultDiv.classList.remove("result-bad", "result-mid", "result-good", "result-excellent", "result-animate");
    resultDiv.classList.add(resultClass, "result-animate");

    resultDiv.innerHTML = "Semester Average: " + semester_average + "<br><span>" + comment + " " + emoji + "</span>";
    resultDiv.style.color = "";
    setTimeout(() => resultDiv.classList.remove("result-animate"), 450);
}
