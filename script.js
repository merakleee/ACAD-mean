function calculateAverage3() {
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

    let weighted_sum3 =
        archi_avg * archi_coef +
        algo_avg * algo_coef +
        sys_avg * sys_coef +
        analyse_avg * analyse_coef +
        stats_avg * stats_coef +
        log_avg * log_coef +
        ang_avg * ang_coef;

    let semester_average3 = parseFloat((weighted_sum3 / 20).toFixed(2));

    if (semester_average3 < 0 || semester_average3 > 20) {
        console.log("ERROR");
        document.getElementById("averageResult3").innerHTML = "ERROR: Average must be between 0 and 20";
        document.getElementById("averageResult3").style.color = "red";
        document.getElementById("averageResult3").classList.remove("result-bad", "result-mid", "result-good", "result-excellent");
        return;
    }

    let comment = "", emoji = "", resultClass = "";

    if (semester_average3 < 5) {
        comment = "yeah you're cooked!";
        emoji = "🥀";
        resultClass = "result-bad";
    } else if (semester_average3 < 10) {
        comment = "zeyer rohak hbibi!";
        emoji = "😔";
        resultClass = "result-mid";
    } else if (semester_average3 < 14) {
        comment = "gg you did well!";
        emoji = "👏";
        resultClass = "result-good";
    } else if (semester_average3 <= 20) {
        comment = "KHABACH!";
        emoji = "☝️🤓";
        resultClass = "result-excellent";
    }

    const resultDiv = document.getElementById('averageResult3');
    resultDiv.classList.remove("result-bad", "result-mid", "result-good", "result-excellent", "result-animate");
    resultDiv.classList.add(resultClass, "result-animate");

    resultDiv.innerHTML = "Semester Average: " + semester_average3 + "<br><span>" + comment + " " + emoji + "</span>";
    resultDiv.style.color = "";
    setTimeout(() => resultDiv.classList.remove("result-animate"), 450);
}

// Adding Semester 4 calculation functionality
function calculateAverage4() {
    let thl_td = parseFloat(document.getElementsByName('thl_td')[0].value) || 0;
    let thl_exam = parseFloat(document.getElementsByName('thl_exam')[0].value) || 0;
    let poo_td = parseFloat(document.getElementsByName('poo_td')[0].value) || 0;
    let poo_tp = parseFloat(document.getElementsByName('poo_tp')[0].value) || 0;
    let poo_exam = parseFloat(document.getElementsByName('poo_exam')[0].value) || 0;
    let se_td = parseFloat(document.getElementsByName('se_td')[0].value) || 0;
    let se_tp = parseFloat(document.getElementsByName('se_tp')[0].value) || 0;
    let se_exam = parseFloat(document.getElementsByName('se_exam')[0].value) || 0;
    let bdd_td = parseFloat(document.getElementsByName('bdd_td')[0].value) || 0;
    let bdd_tp = parseFloat(document.getElementsByName('bdd_tp')[0].value) || 0;
    let bdd_exam = parseFloat(document.getElementsByName('bdd_exam')[0].value) || 0;
    let archi2_td = parseFloat(document.getElementsByName('archi2_td')[0].value) || 0;
    let archi2_exam = parseFloat(document.getElementsByName('archi2_exam')[0].value) || 0;
    let py_exam = parseFloat(document.getElementsByName('py_exam')[0].value) || 0;
    let py_td = parseFloat(document.getElementsByName('py_td')[0].value) || 0;
    let ang2_td = parseFloat(document.getElementsByName('ang2_td')[0].value) || 0;
    let ang2_exam = parseFloat(document.getElementsByName('ang2_exam')[0].value) || 0;

    let thl_avg = thl_td * 0.4 + thl_exam * 0.6;
    let poo_avg = poo_td * 0.2 + poo_tp * 0.2 + poo_exam * 0.6;
    let se_avg = se_td * 0.2 + se_tp * 0.2 + se_exam * 0.6;
    let bdd_avg = bdd_td * 0.2 + bdd_tp * 0.2 + bdd_exam * 0.6;
    let archi2_avg = archi2_td * 0.4 + archi2_exam * 0.6;
    let py_avg = py_td * 0.4 + py_exam * 0.6;
    let ang2_avg = ang2_td * 0.4 + ang2_exam * 0.6;

    let thl_coef = 3;
    let poo_coef = 3;
    let se_coef = 3;
    let bdd_coef = 3;
    let archi2_coef = 3;
    let py_coef = 2;
    let ang2_coef = 2;

    let weighted_sum4 =
        thl_avg * thl_coef +
        poo_avg * poo_coef +
        se_avg * se_coef +
        bdd_avg * bdd_coef +
        archi2_avg * archi2_coef +
        py_avg * py_coef +
        ang2_avg * ang2_coef;

    let semester_average4 = parseFloat((weighted_sum4 / 20).toFixed(2));

    if (semester_average4 < 0 || semester_average4 > 20) {
        console.log("ERROR");
        document.getElementById("averageResult4").innerHTML = "ERROR: Average must be between 0 and 20";
        document.getElementById("averageResult4").style.color = "red";
        document.getElementById("averageResult4").classList.remove("result-bad", "result-mid", "result-good", "result-excellent");
        return;
    }

    let comment4 = "", emoji4 = "", resultClass4 = "";

    if (semester_average4 < 5) {
        comment4 = "yeah you're cooked!";
        emoji4 = "🥀";
        resultClass4 = "result-bad";
    } else if (semester_average4 < 10) {
        comment4 = "zeyer rohak hbibi!";
        emoji4 = "😔";
        resultClass4 = "result-mid";
    } else if (semester_average4 < 14) {
        comment4 = "gg you did well!";
        emoji4 = "👏";
        resultClass4 = "result-good";
    } else if (semester_average4 <= 20) {
        comment4 = "KHABACH!";
        emoji4 = "☝️🤓";
        resultClass4 = "result-excellent";
    }

    const resultDiv4 = document.getElementById('averageResult4');
    resultDiv4.classList.remove("result-bad", "result-mid", "result-good", "result-excellent", "result-animate");
    resultDiv4.classList.add(resultClass4, "result-animate");

    resultDiv4.innerHTML = "Semester Average: " + semester_average4 + "<br><span>" + comment4 + " " + emoji4 + "</span>";
    resultDiv4.style.color = "";
    setTimeout(() => resultDiv4.classList.remove("result-animate"), 450);
}