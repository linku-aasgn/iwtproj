document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('nameInput');
    const questionInput = document.getElementById('questionInput');
    const postQuestionBtn = document.getElementById('postQuestionBtn');
    const questionsContainer = document.getElementById('questionsContainer');

    // Predefined questions to display initially
    const predefinedQuestions = [
        { userName: "John Doe", questionText: "How do I improve my coding skills?" },
        { userName: "Jane Smith", questionText: "What are the best resources for learning React?" },
        { userName: "Alex Johnson", questionText: "How to get started with backend development?" },
        { userName: "Emily Brown", questionText: "Can someone suggest good project ideas for beginners?" },
        { userName: "Michael Davis", questionText: "What's the difference between frontend and backend development?" }
    ];

    // Load predefined questions on page load
    predefinedQuestions.forEach(question => {
        createQuestionElement(question.userName, question.questionText);
    });

    // Event listener for posting new questions
    postQuestionBtn.addEventListener('click', function () {
        const userName = nameInput.value.trim();
        const questionText = questionInput.value.trim();
        
        if (userName !== "" && questionText !== "") {
            createQuestionElement(userName, questionText);
            nameInput.value = "";
            questionInput.value = "";
        } else {
            alert("Please enter both your name and question.");
        }
    });

    // Function to create a question element with thumb and reply features
    function createQuestionElement(userName, questionText) {
        // Create the main question list item
        const questionItem = document.createElement('li');
        questionItem.classList.add('question-item');
        
        // User's question and name
        const questionContent = document.createElement('div');
        questionContent.innerHTML = `<span class="user-name">${userName}</span>: ${questionText}`;

        // Container for actions (thumb and reply buttons)
        const actionsContainer = document.createElement('div');
        actionsContainer.classList.add('question-actions');

        // Thumb (Like) Button
        const thumbButton = document.createElement('button');
        thumbButton.classList.add('thumb-btn');
        thumbButton.innerHTML = '👍 <span class="like-count">0</span>'; // Thumb emoji with like count
        thumbButton.dataset.likes = 0;

        // Reply Button
        const replyButton = document.createElement('button');
        replyButton.classList.add('reply-btn');
        replyButton.textContent = 'Reply';

        // Replies container
        const repliesList = document.createElement('ul');
        repliesList.classList.add('replies');

        // Append buttons to actions container
        actionsContainer.appendChild(thumbButton);
        actionsContainer.appendChild(replyButton);

        // Append content to the main question item
        questionItem.appendChild(questionContent);
        questionItem.appendChild(actionsContainer);
        questionItem.appendChild(repliesList);

        // Append the question item to the main list container
        questionsContainer.appendChild(questionItem);

        // Add event listeners to the thumb and reply buttons
        thumbButton.addEventListener('click', function () {
            incrementThumbs(thumbButton);
        });

        replyButton.addEventListener('click', function () {
            addReply(repliesList);
        });
    }

    // Function to handle the thumb button functionality
    function incrementThumbs(button) {
        let currentLikes = parseInt(button.dataset.likes);
        currentLikes++;
        button.dataset.likes = currentLikes;
        const likeCountSpan = button.querySelector('.like-count');
        likeCountSpan.textContent = currentLikes;

        // Change the color of the button to red if likes are 1 or more
        if (currentLikes >= 1) {
            button.classList.add('liked');
        }
    }

    // Function to handle the reply button functionality
    function addReply(repliesList) {
        const replyText = prompt("Enter your reply:");
        if (replyText) {
            const replyItem = document.createElement('li');
            replyItem.textContent = `Reply: ${replyText}`;
            repliesList.appendChild(replyItem);
        }
    }
});
