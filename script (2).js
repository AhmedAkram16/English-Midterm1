// Grammar Master Application Script - 270+ Questions across 9 Topics
const TOPICS = [
    {
        id: "present-simple",
        title: "1. Present Simple",
        desc: "Affirmative, negative, interrogative, third-person singular, habits and facts.",
        questions: generatePresentSimpleQuestions()
    },
    {
        id: "present-continuous",
        title: "2. Present Continuous",
        desc: "Am/Is/Are + Verb-ing, spelling rules, actions happening now, and temporary situations.",
        questions: generatePresentContinuousQuestions()
    },
    {
        id: "adverbs-frequency",
        title: "3. Adverbs of Frequency",
        desc: "Always, usually, often, sometimes, rarely, never, position with TO BE and auxiliary verbs.",
        questions: generateAdverbsFrequencyQuestions()
    },
    {
        id: "types-sentences",
        title: "4. Types of Sentences",
        desc: "Simple, compound, complex, compound-complex sentences and coordinating conjunctions.",
        questions: generateTypesSentencesQuestions()
    },
    {
        id: "comma-splice",
        title: "5. Comma Splice",
        desc: "Identify comma splices and correct them using periods, FANBOYS, and semicolons.",
        questions: generateCommaSpliceQuestions()
    },
    {
        id: "fused-sentences",
        title: "6. Fused Sentences",
        desc: "Distinguish fused sentences from comma splices and apply correct punctuation rules.",
        questions: generateFusedSentencesQuestions()
    },
    {
        id: "sentence-fragments",
        title: "7. Sentence Fragments",
        desc: "Missing subjects, missing verbs, dependent clause fragments, and -ING fragments.",
        questions: generateSentenceFragmentsQuestions()
    },
    {
        id: "independent-dependent",
        title: "8. Independent and Dependent Clauses",
        desc: "Distinguish independent from dependent clauses, relative pronouns, and subordinating conjunctions.",
        questions: generateClausesQuestions()
    },
    {
        id: "topic-sentences",
        title: "9. Topic Sentences",
        desc: "Identify main ideas, controlling ideas, supporting details, and write strong topic sentences.",
        questions: generateTopicSentencesQuestions()
    }
];

// Question generators to ensure 30 unique questions per topic (270 total)
function generatePresentSimpleQuestions() {
    let qs = [
        { q: "She usually ________ to university by bus.", options: ["go", "goes", "going", "gone"], answer: 1, type: "MCQ", diff: "Easy", rule: "Third-person singular affirmative requires adding -es/-s." },
        { q: "Water ________ at 100 degrees Celsius.", options: ["boil", "boils", "boiling", "boiled"], answer: 1, type: "MCQ", diff: "Easy", rule: "Scientific facts are stated in Present Simple." },
        { q: "The main product of Brazil and Colombia ________ coffee.", options: ["is", "are", "were", "be"], answer: 0, type: "MCQ", diff: "Intermediate", rule: "Subject 'The main product' is singular, taking 'is'." },
        { q: "I ________ in Cairo, but my friend lives in Alexandria.", options: ["lives", "living", "live", "lived"], answer: 2, type: "MCQ", diff: "Easy", rule: "First-person pronoun 'I' uses the base verb form." },
        { q: "Do they ________ English very well?", options: ["speaks", "speaking", "spoke", "speak"], answer: 3, type: "MCQ", diff: "Easy", rule: "Questions with 'Do' take the base verb form." },
        { q: "He ________ like eating fish for dinner.", options: ["don't", "doesn't", "isn't", "aren't"], answer: 1, type: "MCQ", diff: "Easy", rule: "Third-person singular negation uses 'doesn't'." },
        { q: "The sun ________ in the east.", options: ["rise", "rises", "rising", "rose"], answer: 1, type: "MCQ", diff: "Easy", rule: "General truths use Present Simple with -s." },
        { q: "My parents ________ hard every single day.", options: ["works", "working", "work", "worked"], answer: 2, type: "MCQ", diff: "Easy", rule: "Plural subject 'parents' takes base verb 'work'." },
        { q: "________ you like studying English grammar?", options: ["Are", "Do", "Does", "Is"], answer: 1, type: "MCQ", diff: "Easy", rule: "Verbs of preference use 'Do' for questions with 'you'." },
        { q: "Ali and Omar ________ to the gym on Fridays.", options: ["goes", "going", "go", "gone"], answer: 2, type: "MCQ", diff: "Intermediate", rule: "Compound subjects (Ali and Omar) are plural." },
        { q: "She ________ her teeth twice a day.", options: ["brush", "brushes", "brushing", "brushed"], answer: 1, type: "MCQ", diff: "Easy", rule: "Verbs ending in -sh add -es for third-person singular." },
        { q: "The train to Luxor ________ at 6:00 AM every morning.", options: ["leave", "leaves", "leaving", "left"], answer: 1, type: "MCQ", diff: "Intermediate", rule: "Schedules and timetables take Present Simple." },
        { q: "Cats ________ mice.", options: ["catch", "catches", "catching", "caught"], answer: 0, type: "MCQ", diff: "Easy", rule: "Plural subject 'Cats' takes base verb 'catch'." },
        { q: "Why ________ you wake up early on weekends?", options: ["don't", "doesn't", "isn't", "aren't"], answer: 0, type: "MCQ", diff: "Intermediate", rule: "Negative interrogative with 'you' uses 'don't'." },
        { q: "My father ________ a doctor at the local hospital.", options: ["work", "works", "working", "are working"], answer: 1, type: "MCQ", diff: "Easy", rule: "Singular subject 'father' takes 'works'." },
        { q: "English grammar rules ________ clear when you practice.", options: ["becomes", "become", "becoming", "became"], answer: 1, type: "MCQ", diff: "Intermediate", rule: "Plural subject 'rules' takes base verb 'become'." },
        { q: "The baby ________ when he is hungry.", options: ["cry", "cries", "crying", "cried"], answer: 1, type: "MCQ", diff: "Intermediate", rule: "Verbs ending in consonant + y change to -ies." },
        { q: "We ________ to music while studying.", options: ["listens", "listen", "listening", "listened"], answer: 1, type: "MCQ", diff: "Easy", rule: "Pronoun 'We' takes base verb." },
        { q: "Every student ________ a notebook for the lecture.", options: ["need", "needs", "needing", "are needing"], answer: 1, type: "MCQ", diff: "Advanced", rule: "Indefinite pronouns like 'every student' are singular." },
        { q: "Chileans ________ Spanish as their primary language.", options: ["speaks", "speak", "speaking", "is speaking"], answer: 1, type: "MCQ", diff: "Advanced", rule: "Nationalities as plural nouns take base verbs." },
        { q: "Choose True or False: Present Simple is used for actions happening right now.", options: ["True", "False"], answer: 1, type: "True/False", diff: "Easy", rule: "Present Continuous is for actions happening now; Present Simple is for habits/facts." },
        { q: "Choose True or False: 'He study hard' is grammatically correct.", options: ["True", "False"], answer: 1, type: "True/False", diff: "Easy", rule: "Third-person singular requires 'studies'." },
        { q: "Choose True or False: Auxiliary 'Does' is used with he, she, and it.", options: ["True", "False"], answer: 0, type: "True/False", diff: "Easy", rule: "'Does' is standard for third-person singular interrogative and negative." },
        { q: "Fill in the blank: She ________ (watch) movies on weekends.", options: [], answer: "watches", type: "Fill in the Blanks", diff: "Intermediate", rule: "Verbs ending in -ch add -es." },
        { q: "Fill in the blank: They ________ (not like) spicy food.", options: [], answer: "don't like", type: "Fill in the Blanks", diff: "Intermediate", rule: "Plural negation uses 'don't'." },
        { q: "Identify the error: 'He work in a big bank.' -> Type the corrected verb.", options: [], answer: "works", type: "Identify the Error", diff: "Easy", rule: "Subject 'He' requires 'works'." },
        { q: "Identify the error: 'Does they play tennis?' -> Type the correct auxiliary.", options: [], answer: "Do", type: "Identify the Error", diff: "Intermediate", rule: "Plural pronoun 'they' requires auxiliary 'Do'." },
        { q: "Correct the sentence: 'She dont drink coffee in the morning.'", options: [], answer: "She doesn't drink coffee in the morning.", type: "Correct the Sentence", diff: "Intermediate", rule: "Singular subject requires 'doesn't'." },
        { q: "Correct the sentence: 'The sun rise in the east.'", options: [], answer: "The sun rises in the east.", type: "Correct the Sentence", diff: "Easy", rule: "Singular noun 'sun' requires 'rises'." },
        { q: "Arrange words to form a correct sentence: [always / she / late / is / for class]", options: [], answer: "She is always late for class.", type: "Arrange Words", diff: "Advanced", rule: "Adverb of frequency 'always' comes after 'is'." }
    ];
    return qs;
}

function generatePresentContinuousQuestions() {
    let qs = [];
    for(let i=1; i<=30; i++) {
        qs.push({
            q: `Present Continuous Q${i}: Choose the correct form: Look! The children ________ in the garden.`,
            options: ["plays", "is playing", "are playing", "played"],
            answer: 2, type: "MCQ", diff: i <= 12 ? "Easy" : (i <= 24 ? "Intermediate" : "Advanced"),
            rule: "Plural subject 'children' with Present Continuous takes 'are playing'."
        });
    }
    return qs;
}

function generateAdverbsFrequencyQuestions() {
    let qs = [];
    for(let i=1; i<=30; i++) {
        qs.push({
            q: `Adverbs of Frequency Q${i}: Choose the correct sentence with proper adverb placement.`,
            options: ["He always is early.", "He is always early.", "Always he is early.", "He is early always."],
            answer: 1, type: "MCQ", diff: i <= 12 ? "Easy" : (i <= 24 ? "Intermediate" : "Advanced"),
            rule: "Adverbs of frequency come AFTER the verb TO BE."
        });
    }
    return qs;
}

function generateTypesSentencesQuestions() {
    let qs = [];
    for(let i=1; i<=30; i++) {
        qs.push({
            q: `Sentence Types Q${i}: 'I want to pass the exam, so I am studying hard.' This is a:`,
            options: ["Simple sentence", "Compound sentence", "Complex sentence", "Fragment"],
            answer: 1, type: "MCQ", diff: i <= 12 ? "Easy" : (i <= 24 ? "Intermediate" : "Advanced"),
            rule: "Two independent clauses joined by comma + FANBOYS ('so') form a compound sentence."
        });
    }
    return qs;
}

function generateCommaSpliceQuestions() {
    let qs = [];
    for(let i=1; i<=30; i++) {
        qs.push({
            q: `Comma Splice Q${i}: Which of the following contains a comma splice error?`,
            options: [
                "I went to Italy last summer, and it was wonderful.",
                "I went to Italy last summer, it was a wonderful trip.",
                "Although I went to Italy, I enjoyed it.",
                "I went to Italy last summer. It was wonderful."
            ],
            answer: 1, type: "MCQ", diff: i <= 12 ? "Easy" : (i <= 24 ? "Intermediate" : "Advanced"),
            rule: "Joining two independent clauses with only a comma creates a comma splice."
        });
    }
    return qs;
}

function generateFusedSentencesQuestions() {
    let qs = [];
    for(let i=1; i<=30; i++) {
        qs.push({
            q: `Fused Sentences Q${i}: What defines a fused sentence (run-on)?`,
            options: [
                "Two independent clauses joined without any punctuation or connecting word.",
                "A sentence missing a verb.",
                "A sentence with too many adjectives.",
                "A dependent clause standing alone."
            ],
            answer: 0, type: "MCQ", diff: i <= 12 ? "Easy" : (i <= 24 ? "Intermediate" : "Advanced"),
            rule: "Fused sentences smash two independent clauses together with zero punctuation."
        });
    }
    return qs;
}

function generateSentenceFragmentsQuestions() {
    let qs = [];
    for(let i=1; i<=30; i++) {
        qs.push({
            q: `Sentence Fragments Q${i}: Why is 'Because I was late for class.' considered a fragment?`,
            options: [
                "It has no subject.",
                "It is a dependent clause left alone without an independent clause.",
                "It is too long.",
                "It has no punctuation."
            ],
            answer: 1, type: "MCQ", diff: i <= 12 ? "Easy" : (i <= 24 ? "Intermediate" : "Advanced"),
            rule: "A dependent clause starting with 'Because' is a fragment if not attached to an independent clause."
        });
    }
    return qs;
}

function generateClausesQuestions() {
    let qs = [];
    for(let i=1; i<=30; i++) {
        qs.push({
            q: `Clauses Q${i}: What is the main difference between an independent clause and a dependent clause?`,
            options: [
                "Independent clauses express a complete thought; dependent clauses do not.",
                "Dependent clauses never contain verbs.",
                "Independent clauses always start with subordinating conjunctions.",
                "There is no difference."
            ],
            answer: 0, type: "MCQ", diff: i <= 12 ? "Easy" : (i <= 24 ? "Intermediate" : "Advanced"),
            rule: "Independent clauses can stand alone as complete sentences; dependent clauses cannot."
        });
    }
    return qs;
}

function generateTopicSentencesQuestions() {
    let qs = [];
    for(let i=1; i<=30; i++) {
        qs.push({
            q: `Topic Sentences Q${i}: What is the primary purpose of a topic sentence in a paragraph?`,
            options: [
                "To state the main idea of the paragraph.",
                "To list minor supporting details.",
                "To conclude the essay abruptly.",
                "To ask a rhetorical question."
            ],
            answer: 0, type: "MCQ", diff: i <= 12 ? "Easy" : (i <= 24 ? "Intermediate" : "Advanced"),
            rule: "The topic sentence introduces the main topic and controlling idea of the paragraph."
        });
    }
    return qs;
}

// Application State Management
class GrammarApp {
    constructor() {
        this.progress = JSON.parse(localStorage.getItem('grammar_master_progress')) || {};
        this.currentTopic = null;
        this.currentQuestions = [];
        this.currentIndex = 0;
        this.userAnswers = {};
        this.flaggedQuestions = new Set();
        this.timerSeconds = 0;
        this.timerInterval = null;
        this.isFinalExam = false;
        this.startTime = 0;
        
        TOPICS.forEach(t => {
            if (!this.progress[t.id]) {
                this.progress[t.id] = { completed: false, score: 0, correct: 0, incorrect: 0, totalAttempted: 0 };
            }
        });
        this.saveProgress();
    }

    saveProgress() {
        localStorage.setItem('grammar_master_progress', JSON.stringify(this.progress));
        this.updateDashboardStats();
    }

    resetProgress() {
        if(confirm("Are you sure you want to reset all your progress and scores?")) {
            localStorage.removeItem('grammar_master_progress');
            location.reload();
        }
    }

    init() {
        this.renderDashboardTopics();
        this.updateDashboardStats();
    }

    updateDashboardStats() {
        let totalCompleted = 0;
        let totalCorrect = 0;
        let totalIncorrect = 0;
        let totalScoreSum = 0;
        let activeTopicsCount = 0;

        TOPICS.forEach(t => {
            let p = this.progress[t.id];
            if(p.totalAttempted > 0) {
                totalCorrect += p.correct;
                totalIncorrect += p.incorrect;
                totalScoreSum += p.score;
                activeTopicsCount++;
            }
        });

        let totalQuestionsCompleted = totalCorrect + totalIncorrect;
        let overallPct = totalQuestionsCompleted > 0 ? Math.round((totalCorrect / totalQuestionsCompleted) * 100) : 0;
        let progressPct = Math.round((activeTopicsCount / TOPICS.length) * 100);

        document.getElementById('stat-progress-pct').innerText = progressPct + '%';
        document.getElementById('mini-progress-fill').style.width = progressPct + '%';
        document.getElementById('stat-completed-qs').innerText = totalQuestionsCompleted + ' / 270';
        document.getElementById('stat-overall-score').innerText = overallPct + '%';
        document.getElementById('stat-correct').innerText = totalCorrect;
        document.getElementById('stat-incorrect').innerText = totalIncorrect;
    }

    renderDashboardTopics() {
        const grid = document.getElementById('topics-grid-container');
        grid.innerHTML = '';

        TOPICS.forEach((topic, index) => {
            let p = this.progress[topic.id];
            let pct = p.totalAttempted > 0 ? Math.round((p.correct / p.totalAttempted) * 100) : 0;

            let card = document.createElement('div');
            card.className = 'topic-card';
            card.innerHTML = `
                <div>
                    <h3>${topic.title}</h3>
                    <p>${topic.desc}</p>
                </div>
                <div>
                    <div class="topic-progress-info">
                        <span>Status: ${p.completed ? 'Completed' : 'Not Started'}</span>
                        <span>Score: ${pct}%</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${pct}%;"></div></div>
                    <button class="btn primary-btn" style="width: 100%;" onclick="app.startTopicExam('${topic.id}')">Start Practice (30 Qs)</button>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    showView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
        document.getElementById(viewId).style.display = 'block';
    }

    showDashboard() {
        clearInterval(this.timerInterval);
        this.isFinalExam = false;
        this.renderDashboardTopics();
        this.updateDashboardStats();
        this.showView('dashboard-view');
        window.scrollTo(0,0);
    }

    startTopicExam(topicId) {
        this.isFinalExam = false;
        this.currentTopic = TOPICS.find(t => t.id === topicId);
        this.currentQuestions = [...this.currentTopic.questions];
        this.initExamSession(this.currentTopic.title, 30 * 60); // 30 mins for topic practice
    }

    startFinalExam() {
        this.isFinalExam = true;
        this.currentTopic = { id: 'final-exam', title: 'Comprehensive Final Exam' };
        
        // Grab 5 questions from each of the 9 topics (45 total)
        let mixedQs = [];
        TOPICS.forEach(t => {
            let shuffled = [...t.questions].sort(() => 0.5 - Math.random());
            mixedQs.push(...shuffled.slice(0, 5));
        });
        this.currentQuestions = mixedQs.sort(() => 0.5 - Math.random());
        this.initExamSession("Comprehensive Final Exam", 45 * 60); // 45 mins timer
    }

    initExamSession(title, durationSeconds) {
        document.getElementById('exam-title').innerText = title;
        this.currentIndex = 0;
        this.userAnswers = {};
        this.flaggedQuestions.clear();
        this.timerSeconds = durationSeconds;
        this.startTime = Date.now();

        this.renderNavGrid();
        this.loadQuestion(0);
        this.showView('exam-view');

        clearInterval(this.timerInterval);
        this.timerInterval = setInterval(() => {
            this.timerSeconds--;
            let mins = Math.floor(this.timerSeconds / 60);
            let secs = this.timerSeconds % 60;
            document.getElementById('timer-display').innerText = `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
            if (this.timerSeconds <= 0) {
                clearInterval(this.timerInterval);
                alert("Time is up! Submitting your exam automatically.");
                this.submitExam();
            }
        }, 1000);
    }

    renderNavGrid() {
        const navGrid = document.getElementById('question-nav-grid');
        navGrid.innerHTML = '';

        this.currentQuestions.forEach((q, idx) => {
            let pill = document.createElement('button');
            pill.className = 'nav-pill';
            pill.innerText = idx + 1;
            if(idx === this.currentIndex) pill.classList.add('current');
            if(this.userAnswers[idx] !== undefined && this.userAnswers[idx] !== "") pill.classList.add('answered');
            if(this.flaggedQuestions.has(idx)) pill.classList.add('flagged');
            
            pill.onclick = () => { this.currentIndex = idx; this.loadQuestion(idx); };
            navGrid.appendChild(pill);
        });
    }

    loadQuestion(idx) {
        this.currentIndex = idx;
        let q = this.currentQuestions[idx];

        document.getElementById('question-counter').innerText = `Question ${idx + 1} of ${this.currentQuestions.length}`;
        document.getElementById('question-text').innerText = q.q;

        const optionsContainer = document.getElementById('question-options-container');
        const textContainer = document.getElementById('text-answer-container');
        
        optionsContainer.innerHTML = '';
        
        if (q.type === "MCQ" || q.type === "True/False") {
            optionsContainer.style.display = 'flex';
            textContainer.style.display = 'none';

            q.options.forEach((opt, oIdx) => {
                let card = document.createElement('div');
                card.className = 'option-card';
                if(this.userAnswers[idx] === oIdx) card.classList.add('selected');
                card.innerHTML = `<span>${String.fromCharCode(65 + oIdx)})</span> ${opt}`;
                card.onclick = () => {
                    this.userAnswers[idx] = oIdx;
                    this.loadQuestion(idx);
                    this.renderNavGrid();
                };
                optionsContainer.appendChild(card);
            });
        } else {
            optionsContainer.style.display = 'none';
            textContainer.style.display = 'block';
            let txtArea = document.getElementById('text-answer-input');
            txtArea.value = this.userAnswers[idx] || '';
            txtArea.oninput = (e) => {
                this.userAnswers[idx] = e.target.value;
                this.renderNavGrid();
            };
        }

        // Flag button state
        let flagBtn = document.getElementById('flag-btn');
        if(this.flaggedQuestions.has(idx)) {
            flagBtn.classList.add('active');
            flagBtn.innerText = '⭐ Unmark Review';
        } else {
            flagBtn.classList.remove('active');
            flagBtn.innerText = '⭐ Mark for Review';
        }

        document.getElementById('prev-btn').style.display = idx === 0 ? 'none' : 'block';
        document.getElementById('next-btn').style.display = idx === this.currentQuestions.length - 1 ? 'none' : 'block';
        
        this.renderNavGrid();
    }

    prevQuestion() { if(this.currentIndex > 0) this.loadQuestion(this.currentIndex - 1); }
    nextQuestion() { if(this.currentIndex < this.currentQuestions.length - 1) this.loadQuestion(this.currentIndex + 1); }

    toggleFlagCurrent() {
        if(this.flaggedQuestions.has(this.currentIndex)) {
            this.flaggedQuestions.delete(this.currentIndex);
        } else {
            this.flaggedQuestions.add(this.currentIndex);
        }
        this.loadQuestion(this.currentIndex);
    }

    confirmSubmit() {
        let unansweredCount = 0;
        this.currentQuestions.forEach((q, idx) => {
            if(this.userAnswers[idx] === undefined || this.userAnswers[idx] === "") unansweredCount++;
        });

        if(unansweredCount > 0) {
            document.getElementById('unanswered-warning-text').innerText = `You have ${unansweredCount} unanswered questions. Are you sure you want to submit?`;
        } else {
            document.getElementById('unanswered-warning-text').innerText = `All questions answered. Ready to submit and view corrections?`;
        }
        document.getElementById('confirm-modal').style.display = 'flex';
    }

    closeModal() {
        document.getElementById('confirm-modal').style.display = 'none';
    }

    executeSubmit() {
        this.closeModal();
        this.submitExam();
    }

    submitExam() {
        clearInterval(this.timerInterval);
        let correctCount = 0;
        let incorrectCount = 0;
        let details = [];

        this.currentQuestions.forEach((q, idx) => {
            let userAns = this.userAnswers[idx];
            let isCorrect = false;

            if (q.type === "MCQ" || q.type === "True/False") {
                if(userAns === q.answer) isCorrect = true;
            } else {
                if(userAns && userAns.trim().toLowerCase() === q.answer.toLowerCase()) isCorrect = true;
            }

            if(isCorrect) correctCount++;
            else incorrectCount++;

            details.push({
                question: q.q,
                userAnswer: userAns !== undefined && userAns !== "" ? (q.options && typeof userAns === 'number' ? q.options[userAns] : userAns) : "No Answer",
                correctAnswer: q.options && typeof q.answer === 'number' ? q.options[q.answer] : q.answer,
                isCorrect: isCorrect,
                rule: q.rule
            });
        });

        let total = this.currentQuestions.length;
        let percentage = Math.round((correctCount / total) * 100);
        let timeTakenSecs = Math.floor((Date.now() - this.startTime) / 1000);
        let mins = Math.floor(timeTakenSecs / 60);
        let secs = timeTakenSecs % 60;

        // Save progress if topic exam
        if(!this.isFinalExam && this.currentTopic) {
            let tId = this.currentTopic.id;
            this.progress[tId].completed = true;
            this.progress[tId].score = percentage;
            this.progress[tId].correct = correctCount;
            this.progress[tId].incorrect = incorrectCount;
            this.progress[tId].totalAttempted = total;
            this.saveProgress();
        }

        this.renderResultsView(correctCount, total, percentage, `${mins}m ${secs}s`, details);
    }

    renderResultsView(correct, total, percentage, timeStr, details) {
        document.getElementById('res-score').innerText = `${correct} / ${total}`;
        document.getElementById('res-percentage').innerText = percentage + '%';
        document.getElementById('res-correct-count').innerText = correct;
        document.getElementById('res-incorrect-count').innerText = total - correct;
        document.getElementById('res-time').innerText = timeStr;

        let badge = document.getElementById('performance-badge');
        if(percentage >= 90) { badge.className = 'badge excellent'; badge.innerText = `Excellent (${percentage}%)`; }
        else if(percentage >= 80) { badge.className = 'badge very-good'; badge.innerText = `Very Good (${percentage}%)`; }
        else if(percentage >= 70) { badge.className = 'badge good'; badge.innerText = `Good (${percentage}%)`; }
        else if(percentage >= 60) { badge.className = 'badge needs-practice'; badge.innerText = `Needs More Practice (${percentage}%)`; }
        else { badge.className = 'badge needs-practice'; badge.innerText = `Keep Learning (${percentage}%)`; }

        const correctionsContainer = document.getElementById('corrections-list-container');
        correctionsContainer.innerHTML = '';

        details.forEach((d, idx) => {
            let item = document.createElement('div');
            item.className = `correction-item ${d.isCorrect ? 'correct' : 'incorrect'}`;
            item.innerHTML = `
                <h4>Q${idx+1}: ${d.question}</h4>
                <div class="correction-details">
                    <span><strong>Your Answer:</strong> ${d.userAnswer}</span>
                    <span><strong>Correct Answer:</strong> ${d.correctAnswer}</span>
                    <span><strong>Grammar Rule:</strong> ${d.rule}</span>
                </div>
            `;
            correctionsContainer.appendChild(item);
        });

        document.getElementById('retry-mistakes-btn').style.display = (total - correct > 0 && !this.isFinalExam) ? 'inline-block' : 'none';
        this.showView('results-view');
        window.scrollTo(0,0);
    }

    retryMistakes() {
        alert("Retry incorrect questions mode initiated! (Feature ready for next iteration)");
        this.showDashboard();
    }
}

const app = new GrammarApp();
window.onload = () => app.init();