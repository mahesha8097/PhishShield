/* ===========================================
   PhishShield v1.0
   Simple Version
=========================================== */

// Current position
let answered = false;

let currentScenario = 0;

// Score
let score = 0;

// Current quiz answered?
let quizAnswered = false;

// DOM Elements
const scoreEl = document.getElementById("score");
const scenarioNumberEl = document.getElementById("scenario-number");
const totalScenarioEl = document.getElementById("total-scenarios");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

const companyEl = document.getElementById("company");
const difficultyEl = document.getElementById("difficulty");
const senderEl = document.getElementById("sender");
const subjectEl = document.getElementById("subject");
const emailBodyEl = document.getElementById("emailBody");
const fakeLinkEl = document.getElementById("fakeLink");

const resultCard = document.getElementById("result-card");
const resultTitle = document.getElementById("result-title");
const resultScore = document.getElementById("result-score");
const resultMessage = document.getElementById("result-message");
const redFlagsList = document.getElementById("redFlagsList");
const securityTip = document.getElementById("securityTip");
const nextButton = document.getElementById("nextButton");

const quizSection = document.getElementById("quiz-section");
const quizQuestion = document.getElementById("quiz-question");
const quizOptions = document.getElementById("quiz-options");
const quizFeedback = document.getElementById("quiz-feedback");

const completionCard = document.getElementById("completion-card");
const finalScore = document.getElementById("finalScore");
const accuracy = document.getElementById("accuracy");
const rank = document.getElementById("rank");

// Security Tips
const securityTips = [
    "Never click suspicious links in emails.",
    "Always verify the sender's email address.",
    "Use Multi-Factor Authentication (MFA).",
    "Never share passwords through email.",
    "Visit websites directly instead of clicking links.",
    "Check for spelling mistakes and fake domains."
];

// Load Scenario
function loadScenario() {

    const scenario = scenarios[currentScenario];

    companyEl.textContent = scenario.company;
    difficultyEl.textContent = scenario.difficulty;
    
    difficultyEl.className = "difficulty";

    if (scenario.difficulty.toLowerCase() === "easy") {
        difficultyEl.classList.add("easy");
    }
    else if (scenario.difficulty.toLowerCase() === "medium") {
        difficultyEl.classList.add("medium");
    }
    else {
        difficultyEl.classList.add("hard");
    }

    senderEl.textContent = scenario.sender;
    subjectEl.textContent = scenario.subject;
    emailBodyEl.innerHTML = scenario.body;
    fakeLinkEl.textContent = scenario.link;

    scoreEl.textContent = score;

    scenarioNumberEl.textContent = currentScenario + 1;
    totalScenarioEl.textContent = scenarios.length;

    let progress = ((currentScenario + 1) / scenarios.length) * 100;

    progressBar.style.width = progress + "%";
    progressText.textContent = Math.round(progress) + "%";

    // Reset UI
    resultCard.style.display = "none";
    quizSection.style.display = "none";
    nextButton.style.display = "none";

    // Restore result card
    resultMessage.style.display = "block";
    redFlagsList.parentElement.style.display = "block";
    securityTip.parentElement.style.display = "block";

    // Clear previous data
    redFlagsList.innerHTML = "";
    quizFeedback.innerHTML = "";

    // Reset states
    quizAnswered = false;
    answered = false;

    // Enable buttons again
    document.querySelector(".report-btn").disabled = false;
    document.querySelector(".click-btn").disabled = false;
}

function showResult(correct) {
    
    // Make sure everything is visible
    resultCard.style.display = "block";
    resultMessage.style.display = "block";
    redFlagsList.parentElement.style.display = "block";
    securityTip.parentElement.style.display = "block";

    const scenario = scenarios[currentScenario];


    if (correct) {

        score += 10;

        resultTitle.textContent = "✅ Correct Decision";
        resultMessage.textContent ="Excellent! You successfully identified the phishing email by recognizing its warning signs.";

    } else {

        resultTitle.textContent = "❌ Incorrect Decision";
        resultMessage.textContent ="This email was a phishing attempt. Clicking suspicious links could expose your personal information.";

    }

    scoreEl.textContent = score;
    resultScore.textContent = `Score: ${score}`;

    // Show Red Flags
    redFlagsList.innerHTML = "";

    scenario.redFlags.forEach(flag => {

        const li = document.createElement("li");
        li.textContent = flag;
        redFlagsList.appendChild(li);

    });

    // Random Security Tip
    const randomTip =
        securityTips[Math.floor(Math.random() * securityTips.length)];

    securityTip.textContent = randomTip;

    // Disable action buttons
    document.querySelector(".report-btn").disabled = true;
    document.querySelector(".click-btn").disabled = true;

    // Show the result for 4 seconds before opening the quiz

    const notice = document.createElement("p");
    notice.id = "quizNotice";
   notice.innerHTML ="🎯 <strong>Great!</strong><br>Review the red flags carefully.<br>A short knowledge check will begin in a few seconds...";
   notice.style.textAlign = "center";
    notice.style.fontWeight = "600";
    notice.style.marginTop = "15px";
    notice.style.color = "#facc15";

    // Remove old notice if it exists
    const oldNotice = document.getElementById("quizNotice");
    if (oldNotice) oldNotice.remove();

    resultCard.appendChild(notice);

    setTimeout(() => {

    notice.remove();
    resultCard.style.display = "none";
    showQuiz();

    }, 10000);
    
    setTimeout(() => {

    resultCard.style.display = "none";
        showQuiz();
    }, 10000);
}

// User clicked Report Phishing
function reportPhishing() {

    if (answered) return;
    
    answered = true;
    
    showResult(true);
}

// User clicked Link
function clickLink() {

    if (answered) return;
    
    answered = true;
    
    showResult(false);

}

function showQuiz() {

    // Hide the complete result card
    resultCard.style.display = "none";

    // Hide Next button until quiz is answered
    nextButton.style.display = "none";

    // Show quiz
    quizSection.style.display = "block";

    const quiz = quizQuestions[currentScenario];

    quizQuestion.textContent = quiz.question;

    quizOptions.innerHTML = "";
    quizFeedback.innerHTML = "";

    quiz.options.forEach((option, index) => {

        const button = document.createElement("button");

        button.textContent = option;
        button.className = "quiz-btn";

        button.onclick = function () {

            if (quizAnswered) return;

            quizAnswered = true;

            if (index === quiz.answer) {

                score += 5;
                scoreEl.textContent = score;

                quizFeedback.innerHTML = "✅ Correct! You earned +5 points.";

            } else {

                quizFeedback.innerHTML =
                    "❌ Incorrect. Review the explanation below.<br><br>" +
                    quiz.explanation;

            }

            // Disable all quiz buttons
            document.querySelectorAll(".quiz-btn").forEach(btn => {
                btn.disabled = true;
            });

            // Show next button
            nextButton.style.display = "block";

        };

        quizOptions.appendChild(button);

    });

}

function nextScenario() {

    currentScenario++;

    if (currentScenario >= scenarios.length) {

        showCompletion();
        return;

    }

    loadScenario();

}

function showCompletion() {

    document.querySelector(".email-card").style.display = "none";
    document.querySelector(".action-buttons").style.display = "none";

    resultCard.style.display = "none";
    quizSection.style.display = "none";

    completionCard.style.display = "block";

    finalScore.textContent = score + " / " + (scenarios.length * 15);

    const percent = Math.round((score / (scenarios.length * 15)) * 100);

    accuracy.textContent = percent + "%";

    if (percent >= 90) {

        rank.textContent = "🛡️ Cyber Guardian";

    } else if (percent >= 75) {

        rank.textContent = "🔐 Security Expert";

    } else if (percent >= 60) {

        rank.textContent = "🕵️ Threat Hunter";

    } else {

        rank.textContent = "📘 Beginner";

    }

}

/* ===========================================
   Restart
=========================================== */

function restartTraining() {

    currentScenario = 0;
    score = 0;
    quizAnswered = false;
    answered = false;

    document.querySelector(".email-card").style.display = "block";
    document.querySelector(".action-buttons").style.display = "flex";

    completionCard.style.display = "none";

    loadScenario();

}

/* ===========================================
   Start
=========================================== */

window.onload = function () {

    loadScenario();

};
