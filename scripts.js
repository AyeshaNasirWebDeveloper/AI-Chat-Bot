document.getElementById('sendButton').addEventListener('click', function () {
    let userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== '') {
        addMessage(userInput, 'user');
        showTypingIndicator();
        document.getElementById('userInput').value = '';
        setTimeout(() => {
            getBotResponse(userInput);
            removeTypingIndicator();
        }, 2000);
    }
});

document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('sendButton').click();
    }
});

function addMessage(text, sender) {
    let chat = document.getElementById('chat');
    let message = document.createElement('div');
    message.className = `message ${sender}`;

    let avatar = document.createElement('div');
    avatar.className = 'avatar';

    let img = document.createElement('img');
    img.src = sender === 'user' ? 'dp.jpg' : 'ai.jpg';
    img.alt = sender === 'user' ? 'User' : 'Bot';
    avatar.appendChild(img);

    let messageText = document.createElement('div');
    messageText.className = 'text';
    messageText.textContent = text;

    if (sender === 'user') {
        message.appendChild(messageText);
        message.appendChild(avatar);
    } else {
        message.appendChild(avatar);
        message.appendChild(messageText);
    }

    chat.appendChild(message);
    chat.scrollTop = chat.scrollHeight;
}

function showTypingIndicator() {
    let chat = document.getElementById('chat');
    let typingIndicator = document.createElement('div');
    typingIndicator.className = 'message bot typing';
    typingIndicator.id = 'typingIndicator';

    let avatar = document.createElement('div');
    avatar.className = 'avatar';

    let img = document.createElement('img');
    img.src = 'bot-icon.png';
    img.alt = 'Bot';
    avatar.appendChild(img);

    let dots = document.createElement('div');
    dots.className = 'text';
    dots.innerHTML = 'Typing <span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>';

    typingIndicator.appendChild(avatar);
    typingIndicator.appendChild(dots);
    chat.appendChild(typingIndicator);
    chat.scrollTop = chat.scrollHeight;
}

function removeTypingIndicator() {
    let typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! How can I assist you today?",
        "hey": "Hi there! Which university are you from?",
        "karachi university": "That's great! What do you study there?",
        "bba": "that's amazing! Do you like finance too?",
        "yeah": "Mine too! ",
        "no": "That's okay! What do you like to do in your free time?",
        "can you help me for studies?": "Sure! Which subjects and topics do you want to study?",
        "accounting": "Sure! Topic?",
        "finance": "Finance is a great subject. What do you want to know about it?",
        "marketing": "Marketing is a very interesting subject. What do you want to know about it",
        "management": "Management is a very important subject. What do you want to know about it",
        "business": "Business is a very interesting subject. What do you want to know about it",
        "maths": "Maths is a tough subject. Do you need help with a specific topic or question?",
        "accounting": "Sure! Which question do you wanna practice?",
        "can you help me prepare for the exams?": "Of course! Which exams and subjects do you wanna cover?",
        "i wanna know about assets": "An asset is typically any useful thing or something that holds value. Most people have personal assets, like cash, savings accounts, bonds, life insurance policies, jewelry, and collectibles. A person's skills and abilities can also be an asset.",
        "i wanna know about liabilities": "A liability is a debt or financial obligation that a person",
        "what is the difference between assets and liabilities?": "In its simplest form, your balance sheet can be divided into two categories: assets and liabilities. Assets are the items your company owns that can provide future economic benefit. Liabilities are what you owe other parties. In short, assets put money in your pocket, and liabilities take money out!",
        "what are 10 liabilities?": "Accounts payable, notes payable, accrued expenses, long-term debt, deferred revenue, unearned revenue, contingent liabilities, lease obligations, pension liabilities, and income taxes payable are the ten types of liabilities in accounting that provide information about a company's financial obligations",
        "can you please explain with examples and business perspective?": "An asset is anything that has current or future economic value to a business. Essentially, for businesses, assets include everything controlled and owned by the company that's currently valuable or could provide monetary benefit in the future. Examples include patents, machinery, and investments.",
        "hi": "Hello! What are you studying?",
        "what is your name?": "I'm Ayesha Nasir's AI chatbot created to help university students. What's your name?",
        "how are you?": "I'm just a bot, but I'm here to help! How are your studies going?",
        "what is your purpose": "My purpose is to assist students with their queries and provide them",
        "ayesha": "Such an amazing name. Nice to meet you dear!",
        "hira": "Such an amazing name. Nice to meet you dear!",
        "alishba": "Such an amazing name. Nice to meet you dear!",
        "afifa": "Such an amazing name. Nice to meet you dear!",
        "shanzay": "Such an amazing name. Nice to meet you dear!",
        "aisha": "Such an amazing name. Nice to meet you dear!",
        "what subjects do you like?": "I like discussing a variety of subjects! What about you?",
        "tell me about your studies": "Sure! Are you finding your courses interesting?",
        "favorite subject": "I enjoy discussing computer science and technology. What's your favorite subject?",
        "by": "Goodbye! Have a great day!",
        "bye": "Goodbye! Have a great day at university!"
    };

    let response = responses[input.toLowerCase()] || "I'm not sure how to respond to that. Can you please rephrase?";
    setTimeout(() => addMessage(response, 'bot'), 50);
}
