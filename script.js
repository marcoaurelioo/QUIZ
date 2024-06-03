const studyFlashcards = [
    "Compreender a importância da equidade de oportunidades na redução das disparidades socioeconômicas.",
    "Reconhecer o papel das políticas de inclusão na promoção da diversidade e igualdade.",
    "Entender como as políticas de redistribuição de renda podem contribuir para uma sociedade mais justa.",
    "Refletir sobre os impactos econômicos e sociais da desigualdade de renda.",
    "Analisar como a educação pode ser uma ferramenta poderosa na redução das disparidades sociais.",
    "Explorar os efeitos da desigualdade de gênero nas oportunidades econômicas e na produtividade."
];

const flashcards = [
    {
        question: "O que é o Coeficiente de Gini?",
        options: {
            A: "Uma medida de desigualdade econômica.",
            B: "Uma medida de crescimento populacional.",
            C: "Uma medida de produtividade industrial.",
            D: "Uma medida de alfabetização."
        },
        answer: "A"
    },
    {
        question: "Qual é o objetivo da Ação Afirmativa?",
        options: {
            A: "Reduzir os impostos.",
            B: "Aumentar a segurança pública.",
            C: "Aumentar oportunidades para grupos historicamente excluídos.",
            D: "Promover o comércio internacional."
        },
        answer: "C"
    },
    {
        question: "O que são políticas de redistribuição de renda?",
        options: {
            A: "Políticas que visam aumentar a desigualdade de renda.",
            B: "Políticas que buscam distribuir de forma mais equitativa a renda entre os indivíduos.",
            C: "Políticas que visam manter a renda concentrada em determinados grupos.",
            D: "Políticas que não têm impacto na distribuição de renda."
        },
        answer: "B"
    },
    {
        question: "Quais são algumas das principais causas da desigualdade de renda?",
        options: {
            A: "Globalização e avanços tecnológicos.",
            B: "Estabilidade econômica e igualdade de oportunidades.",
            C: "Desenvolvimento sustentável e investimentos em infraestrutura.",
            D: "Acesso igualitário à educação e serviços de saúde."
        },
        answer: "A"
    },
    {
        question: "O que é pobreza multidimensional?",
        options: {
            A: "Um conceito que se refere apenas à falta de renda.",
            B: "Um conceito que considera a pobreza em várias dimensões, como saúde, educação e padrões de vida.",
            C: "Um conceito que exclui a pobreza em áreas rurais.",
            D: "Um conceito que não leva em conta as condições de vida das pessoas."
        },
        answer: "B"
    },
    {
        question: "Quais são os efeitos da desigualdade de gênero na economia?",
        options: {
            A: "Não há efeitos significativos.",
            B: "Redução da produtividade e limitação do potencial de crescimento econômico.",
            C: "Aumento da produtividade e expansão do mercado de trabalho.",
            D: "A desigualdade de gênero não tem relação com a economia."
        },
        answer: "B"
    },
    {
        question: "Por que a desigualdade de renda é considerada um obstáculo ao desenvolvimento sustentável?",
        options: {
            A: "Porque não afeta a distribuição de recursos naturais.",
            B: "Porque limita o acesso das pessoas a oportunidades econômicas, educacionais e de saúde.",
            C: "Porque promove a estabilidade econômica.",
            D: "Porque não tem impacto sobre a pobreza."
        },
        answer: "B"
    },
    {
        question: "O que são políticas de inclusão social?",
        options: {
            A: "Políticas que promovem a exclusão de grupos minoritários.",
            B: "Políticas que visam marginalizar certos segmentos da sociedade.",
            C: "Políticas que buscam integrar grupos marginalizados, como pessoas com deficiência e minorias étnicas.",
            D: "Políticas que não têm impacto na coesão social."
        },
        answer: "C"
    },
    {
        question: "Qual é a relação entre educação e desigualdade social?",
        options: {
            A: "A educação não tem impacto na desigualdade social.",
            B: "A educação pode servir como um meio para reduzir a desigualdade social, fornecendo oportunidades iguais para todos.",
            C: "A educação aumenta naturalmente a desigualdade social.",
            D: "A educação contribui para a manutenção da desigualdade social, concentrando o conhecimento em determinados grupos."
        },
        answer: "B"
    },
    {
        question: "O que são programas de transferência de renda?",
        options: {
            A: "Programas que visam aumentar a desigualdade de renda.",
            B: "Programas que transferem recursos financeiros diretamente para indivíduos ou famílias de baixa renda.",
            C: "Programas que têm como objetivo aumentar a concentração de renda em determinados grupos.",
            D: "Programas que não têm impacto na redistribuição de renda."
        },
        answer: "B"
    },
    {
        question: "Qual é o papel das empresas na redução das desigualdades?",
        options: {
            A: "As empresas não têm responsabilidade em relação à desigualdade.",
            B: "As empresas podem contribuir para a redução das desigualdades por meio de práticas de responsabilidade social corporativa e criação de empregos de qualidade.",
            C: "As empresas devem focar exclusivamente no lucro e não se envolver em questões sociais.",
            D: "As empresas devem aumentar a desigualdade para garantir seu próprio crescimento econômico."
        },
        answer: "B"
    },
    {
        question: "Quais são os benefícios da diversidade nas organizações?",
        options: {
            A: "Não há benefícios significativos.",
            B: "A diversidade pode levar a uma maior inovação e criatividade.",
            C: "A diversidade sempre causa conflitos e problemas nas organizações.",
            D: "A diversidade não tem impacto nas organizações."
        },
        answer: "B"
    },
    {
        question: "Qual é o impacto da desigualdade de renda na saúde das populações?",
        options: {
            A: "Não há impacto na saúde.",
            B: "A desigualdade de renda pode levar a disparidades na saúde, incluindo acesso limitado a cuidados médicos.",
            C: "A desigualdade de renda sempre leva a melhores condições de saúde.",
            D: "A desigualdade de renda apenas afeta a saúde mental, não a saúde física."
        },
        answer: "B"
    },
    {
        question: "Como as políticas tributárias podem influenciar a desigualdade de renda?",
        options: {
            A: "As políticas tributárias não têm impacto na desigualdade de renda.",
            B: "Políticas tributárias progressivas podem ajudar a reduzir a desigualdade de renda, enquanto políticas regressivas podem aumentá-la.",
            C: "Políticas tributárias regressivas sempre ajudam a reduzir a desigualdade de renda.",
            D: "Políticas tributárias progressivas sempre aumentam a desigualdade de renda."
        },
        answer: "B"
    },
    {
        question: "Por que a educação é considerada uma ferramenta importante na redução das desigualdades?",
        options: {
            A: "A educação não tem impacto na redução das desigualdades.",
            B: "A educação pode fornecer habilidades e oportunidades que ajudam a superar desigualdades de origem socioeconômica.",
            C: "A educação apenas perpetua as desigualdades existentes.",
            D: "A educação não é relevante para a redução das desigualdades."
        },
        answer: "B"
    },
    {
        question: "O que é igualdade de oportunidades?",
        options: {
            A: "Garantir que todos tenham os mesmos resultados, independentemente de circunstâncias individuais.",
            B: "Garantir que todos tenham a mesma quantidade de recursos.",
            C: "Garantir que todos tenham as mesmas oportunidades de sucesso, independentemente de circunstâncias individuais.",
            D: "Ignorar as diferenças individuais na busca da igualdade."
        },
        answer: "C"
    },
    {
        question: "Quais são os impactos econômicos da exclusão social?",
        options: {
            A: "A exclusão social não tem impacto econômico.",
            B: "A exclusão social pode levar a menor produtividade e crescimento econômico mais lento.",
            C: "A exclusão social sempre beneficia a economia.",
            D: "A exclusão social só afeta indivíduos, não a economia como um todo."
        },
        answer: "B"
    },
    {
        question: "O que são 'ghettos' e como contribuem para as desigualdades?",
        options: {
            A: "Áreas urbanas de alta renda que promovem a igualdade.",
            B: "Áreas urbanas segregadas com alta concentração de grupos marginalizados, contribuindo para desigualdades sociais e econômicas.",
            C: "Áreas urbanas que não têm impacto na desigualdade.",
            D: "Áreas urbanas que não existem mais nas sociedades modernas."
        },
        answer: "B"
    },
    {
        question: "Como a desigualdade de gênero afeta a economia global?",
        options: {
            A: "A desigualdade de gênero não tem impacto na economia global.",
            B: "A desigualdade de gênero pode limitar o crescimento econômico ao restringir o potencial de produtividade das mulheres.",
            C: "A desigualdade de gênero sempre beneficia a economia global.",
            D: "A desigualdade de gênero só afeta as economias locais, não a economia global."
        },
        answer: "B"
    },
    {
        question: "Quais são algumas soluções propostas para reduzir as desigualdades globais?",
        options: {
            A: "Nenhuma solução é viável para reduzir as desigualdades.",
            B: "Investimentos em educação e saúde, políticas fiscais progressivas, e programas de inclusão social são algumas das soluções propostas.",
            C: "Aumentar as desigualdades é a única solução viável.",
            D: "Reduzir a educação e os serviços de saúde é a única solução viável."
        },
        answer: "B"
    }
    ];

    let currentCardIndex = 0;
    let score = 0;
    let studyTimer;
    let questionTimer;
    let studyTimeLeft = 20;
    let questionTimeLeft = 30;
    let shuffledFlashcards = [];
    let lives = 3;
    let errors = 0; 
    
    const startButton = document.getElementById('start-button');
    const flashcardContainer = document.getElementById('flashcard-container');
    const flashcard1 = document.getElementById('flashcard-1');
    const flashcard2 = document.getElementById('flashcard-2');
    const flashcard3 = document.getElementById('flashcard-3');
    const questionContainer = document.getElementById('question-container');
    const questionTextElement = document.getElementById('question-text');
    const optionsElement = document.getElementById('options');
    const scoreElement = document.getElementById('score');
    const nextButton = document.getElementById('next-button');
    const timerElement = document.getElementById('timer');
    const timeLeftElement = document.getElementById('time-left');
    const questionTimerElement = document.getElementById('question-timer');
    const questionTimeLeftElement = document.getElementById('question-time-left');
    const startQuestionsButton = document.getElementById('start-questions-button');

function showStudyFlashcards() {
    flashcard1.textContent = studyFlashcards[0];
    flashcard2.textContent = studyFlashcards[1];
    flashcard3.textContent = studyFlashcards[2];
    studyTimeLeft = 20;
    timeLeftElement.textContent = studyTimeLeft;
    startStudyTimer();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion(index) {
    const flashcard = shuffledFlashcards[index];
    questionTextElement.textContent = `${index + 1}. ${flashcard.question}`;
    optionsElement.innerHTML = '';

    let optionsArray = [];
    for (let option in flashcard.options) {
        optionsArray.push({ key: option, value: flashcard.options[option] });
    }
    optionsArray = shuffle(optionsArray);

    const optionLetters = ['A', 'B', 'C', 'D'];
    optionsArray.forEach((option, i) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.innerHTML = `<strong>${optionLetters[i]}</strong>: ${option.value}`;
        button.dataset.option = option.key;
        button.addEventListener('click', checkAnswer);
        optionsElement.appendChild(button);
    });

    questionTimeLeft = 30;
    questionTimeLeftElement.textContent = questionTimeLeft;
    startQuestionTimer();
}

function checkAnswer(event) {
    clearInterval(questionTimer);
    const selectedOption = event.target.dataset.option;
    const flashcard = shuffledFlashcards[currentCardIndex];
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.dataset.option === flashcard.answer) {
            button.classList.add('correct');
        } else if (button.dataset.option === selectedOption) {
            button.classList.add('incorrect');
        }
    });
    if (selectedOption !== flashcard.answer) {
        handleIncorrectAnswer();
    } else {
        score++;
        scoreElement.textContent = `Pontuação: ${score}`;
    }
    showAnswer();
}

function handleIncorrectAnswer() {
    lives--;
    updateLivesUI();
    if (lives === 0) {
        alert('Você perdeu todas as vidas. O jogo será reiniciado.');
        resetGame();
    }
}
function updateLivesUI() {
    const livesElements = document.querySelectorAll('.life');
    for (let i = 0; i < livesElements.length; i++) {
        if (i < lives) {
            livesElements[i].style.backgroundColor = 'red';
        } else {
            livesElements[i].style.backgroundColor = 'gray';
        }
    }
}
const maxErrors = 3;
function showAnswer() {
    const flashcard = shuffledFlashcards[currentCardIndex];
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        if (button.dataset.option === flashcard.answer) {
            button.classList.add('correct');
        }
    });
    if (questionContainer.style.display == 'block') {
        nextButton.style.display = 'block';
    }
    if (errors >= maxErrors) {
        alert('Você excedeu o limite de erros. O jogo será reiniciado.');
        resetGame();
    }
}

function nextFlashcard() {
    currentCardIndex++;
    if (currentCardIndex < shuffledFlashcards.length) {
        nextButton.style.display = 'none';
        showQuestion(currentCardIndex);
    } else {
        alert('Você completou todos os flashcards!');
        resetGame();
    }
}

function selectRandomQuestions() {
    const totalQuestions = flashcards.length;
    const selectedIndexes = [];
    
    while (selectedIndexes.length < 10) {
        const randomIndex = Math.floor(Math.random() * totalQuestions);
        if (!selectedIndexes.includes(randomIndex)) {
            selectedIndexes.push(randomIndex);
        }
    }
    
    const selectedQuestions = selectedIndexes.map(index => flashcards[index]);
    return selectedQuestions;
}

function startGame() {
    resetGame();
    shuffledFlashcards = shuffle(selectRandomQuestions());  
    startButton.style.display = 'none';
    flashcardContainer.style.display = 'block';
    questionContainer.style.display = 'none';
    scoreElement.style.display = 'none';
    nextButton.style.display ='none';
    showStudyFlashcards();
}

function startStudyTimer() {
    studyTimer = setInterval(() => {
        studyTimeLeft--;
        timeLeftElement.textContent = studyTimeLeft;
        if (studyTimeLeft <= 0) {
            clearInterval(studyTimer);
            startQuestions();
        }
    }, 1000);
}

function startQuestions() {
    flashcardContainer.style.display = 'none';
    questionContainer.style.display = 'block';
    scoreElement.style.display = 'block';
    showQuestion(currentCardIndex);
    const livesContainer = document.getElementById('lives');
    livesContainer.style.display = 'block';
}

function startQuestionTimer() {
    questionTimer = setInterval(() => {
        questionTimeLeft--;
        questionTimeLeftElement.textContent = questionTimeLeft;
        if (questionTimeLeft <= 0) {
            clearInterval(questionTimer);
            disableOptionsAndShowCorrectAnswer();
        }
    }, 1000);
}

function disableOptionsAndShowCorrectAnswer() {
    const flashcard = shuffledFlashcards[currentCardIndex];
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.dataset.option === flashcard.answer) {
            button.classList.add('correct');
        }
    });
    nextButton.style.display = 'block';
}

function resetGame() {
    errors = 0;
    currentCardIndex = 0;
    score = 0;
    studyTimeLeft = 20;
    questionTimeLeft = 30;
    scoreElement.textContent = 'Pontuação: ' + score;
    startButton.style.display = 'block';
    flashcardContainer.style.display = 'none';
    questionContainer.style.display = 'none';
   if (questionContainer.style.display !== 'block') {
        nextButton.style.display = 'none';
   }
    timerElement.style.display = 'block';
    questionTimerElement.style.display = 'block';
    timeLeftElement.textContent = studyTimeLeft;
    questionTimeLeftElement.textContent = questionTimeLeft;
    clearInterval(studyTimer);
    clearInterval(questionTimer);
    scoreElement.style.display = 'none';
    lives = 3;
    updateLivesUI();
    const livesContainer = document.getElementById('lives');
    livesContainer.style.display = 'none';
}

startButton.addEventListener('click', startGame);

startQuestionsButton.addEventListener('click', () => {
    clearInterval(studyTimer);
    startQuestions();
});

nextButton.addEventListener('click', nextFlashcard);