timeElement.classList.add('time');
        timeElement.textContent = getCurrentTime();
        
        messageElement.appendChild(senderElement);
        messageElement.appendChild(textElement);
        messageElement.appendChild(timeElement);
        
        chatMessages.appendChild(messageElement);
        
        // Scroll to bottom
        scrollToBottom();
    }
    
    // Function to add a system message
    function addSystemMessage(text) {
        const messageElement = document.createElement('div');
        messageElement.style.textAlign = 'center';
        messageElement.style.padding = '10px';
        messageElement.style.color = '#666';
        messageElement.style.fontSize = '0.85rem';
        messageElement.textContent = text;
        
        chatMessages.appendChild(messageElement);
        
        // Scroll to bottom
        scrollToBottom();
    }
    
    // Function to simulate bot response
    function simulateBotResponse() {
        const typingIndicator = document.createElement('div');
        typingIndicator.classList.add('message', 'received');
        typingIndicator.innerHTML = '<div class="sender">ChatBot</div><div>typing...</div>';
        chatMessages.appendChild(typingIndicator);
        scrollToBottom();
        
        // Random response time between 1 and 3 seconds
        const responseTime = Math.floor(Math.random() * 2000) + 1000;
        
        setTimeout(() => {
            // Remove typing indicator
            chatMessages.removeChild(typingIndicator);
            
            // Add bot response
            const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
            addMessage(randomResponse, 'ChatBot', false);
        }, responseTime);
    }
    
    // Helper function to get current time
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return ${hours}:${minutes};
    }
    
    // Helper function to scroll to bottom of chat
    function scrollToBottom() {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
});