const TOTAL_QUESTIONS_PER_ROUND = 15;

const QUESTION_BANK = [
  {
    type: 'Contextual Vocabulary',
    prompt: 'By the time the meeting ended, we had reached a ______ agreement that still needed legal review.',
    options: ['tentative', 'reckless', 'literal', 'fragile'],
    answer: 'tentative',
    explanation: 'Tentative means provisional or not final yet, which matches an agreement awaiting legal review.',
  },
  {
    type: 'Contextual Vocabulary',
    prompt: 'Although the report was detailed, its main argument remained rather ______ and hard to apply in practice.',
    options: ['abstract', 'reliable', 'steady', 'vivid'],
    answer: 'abstract',
    explanation: 'Abstract ideas are theoretical and not directly practical, so they can be difficult to apply.',
  },
  {
    type: 'Contextual Vocabulary',
    prompt: 'Her apology sounded sincere, but her actions did not ______ with her words.',
    options: ['align', 'scatter', 'postpone', 'collapse'],
    answer: 'align',
    explanation: 'To align means to match or correspond, which fits the contrast between words and actions.',
  },
  {
    type: 'Contextual Vocabulary',
    prompt: 'The team had to ______ their strategy after customer feedback highlighted several issues.',
    options: ['revise', 'ignore', 'inherit', 'celebrate'],
    answer: 'revise',
    explanation: 'Revise means to change or improve something based on new information.',
  },
  {
    type: 'Contextual Vocabulary',
    prompt: 'The manager praised Carlos for his ______ response under pressure; he solved the problem calmly.',
    options: ['composed', 'casual', 'impulsive', 'artificial'],
    answer: 'composed',
    explanation: 'Composed describes someone calm and self-controlled, especially in stressful situations.',
  },
  {
    type: 'Phrasal Verbs & Collocations',
    prompt: 'If sales continue to grow, the company plans to ______ two new offices next year.',
    options: ['set up', 'set off', 'set aside', 'set down'],
    answer: 'set up',
    explanation: 'Set up means establish or create, which is the correct collocation for opening offices.',
  },
  {
    type: 'Phrasal Verbs & Collocations',
    prompt: 'I meant to mention the budget issue, but it completely ______ my mind during the call.',
    options: ['slipped', 'dropped', 'faded', 'passed'],
    answer: 'slipped',
    explanation: 'The fixed expression is "slipped my mind," meaning you forgot something temporarily.',
  },
  {
    type: 'Phrasal Verbs & Collocations',
    prompt: 'Could you ______ what happened in yesterday’s workshop for those who were absent?',
    options: ['fill us in on', 'put us up with', 'break us up from', 'carry us out of'],
    answer: 'fill us in on',
    explanation: 'Fill someone in on something means to give them missing details or updates.',
  },
  {
    type: 'Phrasal Verbs & Collocations',
    prompt: 'The scientist’s results ______ the theory that sleep improves memory retention.',
    options: ['lend support to', 'take place in', 'run out of', 'look down on'],
    answer: 'lend support to',
    explanation: 'Lend support to is a common collocation meaning provide evidence for an idea.',
  },
  {
    type: 'Phrasal Verbs & Collocations',
    prompt: 'After several delays, the concert finally ______ at 8:30 p.m.',
    options: ['kicked off', 'kicked up', 'kicked over', 'kicked in'],
    answer: 'kicked off',
    explanation: 'Kick off means begin, often used for events or campaigns.',
  },
  {
    type: 'Sentence Transformation & Grammar',
    prompt: 'Choose the sentence closest in meaning: "It wasn’t necessary for us to arrive so early."',
    options: [
      'We needn’t have arrived so early.',
      'We must not arrive so early.',
      'We didn’t need arriving so early.',
      'We hadn’t to arrive so early.',
    ],
    answer: 'We needn’t have arrived so early.',
    explanation: 'Needn’t have + past participle expresses an unnecessary completed action in the past.',
  },
  {
    type: 'Sentence Transformation & Grammar',
    prompt: 'Choose the best option: "Had I known about the strike, I ______ an earlier train."',
    options: ['would have taken', 'will take', 'had taken', 'would take'],
    answer: 'would have taken',
    explanation: 'This is a third conditional structure: Had + past participle, would have + past participle.',
  },
  {
    type: 'Sentence Transformation & Grammar',
    prompt: 'Choose the correct sentence.',
    options: [
      'Hardly had she sat down when the phone rang.',
      'Hardly she had sat down when the phone rang.',
      'Hardly had she sat down than the phone rang.',
      'Hardly she sat down when the phone rang.',
    ],
    answer: 'Hardly had she sat down when the phone rang.',
    explanation: 'After “hardly,” formal inversion is used: Hardly had + subject + past participle + when.',
  },
  {
    type: 'Sentence Transformation & Grammar',
    prompt: 'Choose the option that best completes the sentence: "No sooner ______ the announcement than everyone started asking questions."',
    options: ['had the speaker finished', 'the speaker had finished', 'did the speaker finish', 'has the speaker finished'],
    answer: 'had the speaker finished',
    explanation: 'The fixed pattern is “No sooner had + subject + past participle than …”.',
  },
  {
    type: 'Sentence Transformation & Grammar',
    prompt: 'Select the sentence that keeps the original meaning: "People believe that the painting was stolen in 1998."',
    options: [
      'The painting is believed to have been stolen in 1998.',
      'The painting believed to be stolen in 1998.',
      'The painting is believing to have stolen in 1998.',
      'The painting was believed stealing in 1998.',
    ],
    answer: 'The painting is believed to have been stolen in 1998.',
    explanation: '“Is believed to have been stolen” is the standard reporting passive structure for past events.',
  },
  {
    type: 'Contextual Vocabulary',
    prompt: 'The proposal was initially rejected, but later accepted after a few ______ revisions.',
    options: ['minor', 'stiff', 'scarce', 'faint'],
    answer: 'minor',
    explanation: 'Minor revisions are small changes, which explains why the proposal could then be accepted.',
  },
  {
    type: 'Phrasal Verbs & Collocations',
    prompt: 'During the interview, she managed to ______ confidence without sounding arrogant.',
    options: ['project', 'transmit', 'cast', 'spread'],
    answer: 'project',
    explanation: 'Project confidence is a common collocation for giving an impression of confidence.',
  },
  {
    type: 'Sentence Transformation & Grammar',
    prompt: 'Choose the correct option: "I’d rather you ______ me before making changes to the final draft."',
    options: ['had consulted', 'consult', 'will consult', 'have consulted'],
    answer: 'had consulted',
    explanation: 'After “I’d rather” for past regret, we use past perfect: “I’d rather you had consulted …”.',
  },
];

const gameRegion = document.getElementById('game-region');
const srStatus = document.getElementById('sr-status');

if (!gameRegion || !srStatus) {
  // Keep compatibility if script is loaded on a different page.
} else {
  const state = {
    questions: [],
    currentIndex: 0,
    selectedOption: null,
    hasSubmitted: false,
    score: 0,
    streak: 0,
    maxStreak: 0,
    correctCount: 0,
    feedback: null,
  };

  function shuffle(array) {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function currentQuestion() {
    return state.questions[state.currentIndex];
  }

  function announce(message) {
    srStatus.textContent = message;
  }

  function getMultiplier() {
    return Math.min(3, 1 + Math.floor(state.streak / 3) * 0.5);
  }

  function startGame() {
    const deck = shuffle(QUESTION_BANK).slice(0, TOTAL_QUESTIONS_PER_ROUND).map((question) => {
      const options = shuffle(question.options);
      return {
        ...question,
        options,
      };
    });

    state.questions = deck;
    state.currentIndex = 0;
    state.selectedOption = null;
    state.hasSubmitted = false;
    state.score = 0;
    state.streak = 0;
    state.maxStreak = 0;
    state.correctCount = 0;
    state.feedback = null;
    announce('New round started. Good luck!');
    renderQuestion();
  }

  function renderStart() {
    gameRegion.innerHTML = `
      <h2>Ready for a B2 challenge?</h2>
      <p class="start-copy">
        You will play ${TOTAL_QUESTIONS_PER_ROUND} rounds with context-based vocabulary, collocations, and grammar transformations.
        Build your streak to increase your score multiplier.
      </p>
      <div class="actions">
        <button class="primary-btn" type="button" id="start-btn">Start game</button>
      </div>
    `;

    document.getElementById('start-btn')?.addEventListener('click', startGame);
  }

  function renderQuestion() {
    const question = currentQuestion();
    const progressText = `Question ${state.currentIndex + 1} of ${state.questions.length}`;
    const progressPercent = Math.round(((state.currentIndex + 1) / state.questions.length) * 100);
    const currentMultiplier = getMultiplier().toFixed(1);

    const optionsMarkup = question.options
      .map((option) => {
        const isSelected = state.selectedOption === option;
        const isCorrect = state.hasSubmitted && option === question.answer;
        const isIncorrect = state.hasSubmitted && isSelected && option !== question.answer;
        const stateClass = isCorrect ? 'correct' : isIncorrect ? 'incorrect' : isSelected ? 'selected' : '';

        return `
          <button
            type="button"
            class="option-btn ${stateClass}"
            data-option="${encodeURIComponent(option)}"
            aria-pressed="${isSelected}"
            ${state.hasSubmitted ? 'disabled' : ''}
          >
            ${option}
          </button>
        `;
      })
      .join('');

    const feedbackMarkup =
      state.feedback === null
        ? ''
        : `<div class="feedback ${state.feedback.correct ? 'success' : 'error'}" role="status">
             <strong>${state.feedback.correct ? '✅ Correct answer!' : '❌ Not quite this time.'}</strong>
             <span>${question.explanation}</span>
           </div>`;

    gameRegion.innerHTML = `
      <div class="status-row" aria-label="Current game status">
        <div class="status-item"><span class="status-label">Score</span><span class="status-value">${state.score}</span></div>
        <div class="status-item"><span class="status-label">Streak</span><span class="status-value">${state.streak}</span></div>
        <div class="status-item"><span class="status-label">Multiplier</span><span class="status-value">x${currentMultiplier}</span></div>
      </div>
      <div class="progress-meta">
        <span>${progressText}</span>
        <span>${state.correctCount} correct</span>
      </div>
      <div class="progress-track" aria-hidden="true"><div class="progress-fill" style="width:${progressPercent}%;"></div></div>
      <p class="question-type">${question.type}</p>
      <p class="question-text">${question.prompt}</p>
      <div class="answers" role="group" aria-label="Answer choices">
        ${optionsMarkup}
      </div>
      ${feedbackMarkup}
      <div class="actions">
        ${
          state.hasSubmitted
            ? '<button class="primary-btn" type="button" id="next-btn">Next question</button>'
            : '<button class="primary-btn" type="button" id="submit-btn" disabled>Submit answer</button>'
        }
      </div>
    `;

    gameRegion.querySelectorAll('.option-btn').forEach((button) => {
      button.addEventListener('click', () => {
        state.selectedOption = decodeURIComponent(button.dataset.option || '');
        renderQuestion();
      });
    });

    if (!state.hasSubmitted) {
      document.getElementById('submit-btn')?.addEventListener('click', submitAnswer);
    } else {
      document.getElementById('next-btn')?.addEventListener('click', goToNextQuestion);
    }
  }

  function submitAnswer() {
    const question = currentQuestion();
    if (!state.selectedOption) {
      return;
    }

    const correct = state.selectedOption === question.answer;
    state.hasSubmitted = true;

    if (correct) {
      const points = Math.round(10 * getMultiplier());
      state.score += points;
      state.streak += 1;
      state.correctCount += 1;
      state.maxStreak = Math.max(state.maxStreak, state.streak);
      state.feedback = { correct };
      announce(`Correct. ${points} points gained. Current streak ${state.streak}.`);
    } else {
      state.streak = 0;
      state.feedback = { correct };
      announce('Not this time. Keep going!');
    }

    renderQuestion();
  }

  function goToNextQuestion() {
    state.currentIndex += 1;
    if (state.currentIndex >= state.questions.length) {
      renderResults();
      return;
    }

    state.selectedOption = null;
    state.hasSubmitted = false;
    state.feedback = null;
    renderQuestion();
  }

  function resultMessage(accuracy) {
    if (accuracy >= 85) {
      return 'Outstanding work! You showed strong B2 control across vocabulary and grammar.';
    }
    if (accuracy >= 65) {
      return 'Great progress! Your B2 foundations are solid—keep refining precision and collocations.';
    }
    return 'Good effort! Review the explanations and try again to build confidence step by step.';
  }

  function renderResults() {
    const total = state.questions.length;
    const accuracy = Math.round((state.correctCount / total) * 100);

    gameRegion.innerHTML = `
      <h2>Round complete 🎉</h2>
      <p class="results-copy">${resultMessage(accuracy)}</p>
      <div class="results-grid" aria-label="Final game results">
        <div class="results-stat"><span>Final score</span><span>${state.score}</span></div>
        <div class="results-stat"><span>Correct answers</span><span>${state.correctCount}/${total}</span></div>
        <div class="results-stat"><span>Accuracy</span><span>${accuracy}%</span></div>
        <div class="results-stat"><span>Best streak</span><span>${state.maxStreak}</span></div>
      </div>
      <div class="actions">
        <button class="primary-btn" type="button" id="restart-btn">Play again</button>
      </div>
    `;

    announce(`Round complete. Accuracy ${accuracy} percent. Activate Play again to restart.`);
    document.getElementById('restart-btn')?.addEventListener('click', startGame);
  }

  renderStart();
}
