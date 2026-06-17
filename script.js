function sendMessage() {

    let input = document.getElementById("user-input");
    let chatArea = document.getElementById("chat-area");

    let message = input.value.trim();

    if (message === "") {
        return;
    }

    // User Message
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerHTML = "<strong>You:</strong><br>" + message;

    chatArea.appendChild(userMessage);

    let text = message.toLowerCase();

    let reply = "";

    // Greeting
    if (text.includes("hello") || text.includes("hi")) {

        reply = "Hello! Welcome to NayePankh Foundation. How can I help you today?";

    }

    // Internship
    else if (text.includes("internship")) {

        reply = "NayePankh Foundation provides internship opportunities in technical and non-technical domains for students.";

    }

    // Volunteer
    else if (text.includes("volunteer")) {

        reply = "You can become a volunteer and participate in different social service activities organized by NayePankh Foundation.";

    }

    // Donation
    else if (text.includes("donation")) {

        reply = "Thank you for supporting NayePankh Foundation. You can donate through the official website.";

    }

    // Events
    else if (text.includes("event")) {

        reply = "NayePankh Foundation regularly organizes educational programs, awareness campaigns and community support events.";

    }

    // Contact
    else if (text.includes("contact")) {

        reply = "You can contact NayePankh Foundation through the Contact Us page available on the official website.";

    }

    // About
    else if (text.includes("about") || text.includes("what is nayepankh") || text.includes("nayepankh foundation")) {

        reply = "NayePankh Foundation is a non-profit organization working in education, healthcare, food distribution, awareness campaigns, internships and volunteer development.";

    }

    // Mission
    else if (text.includes("mission")) {

        reply = "The mission of NayePankh Foundation is to empower society through education, healthcare, skill development and community service.";

    }

    // Vision
    else if (text.includes("vision")) {

        reply = "The vision of NayePankh Foundation is to create a better society by providing equal opportunities, education and social support.";

    }

    // Services
    else if (text.includes("services") || text.includes("service")) {

        reply = "NayePankh Foundation works in education, healthcare, food distribution, awareness campaigns, internships and volunteer programs.";

    }

    // Join
    else if (text.includes("join")) {

        reply = "You can join NayePankh Foundation by applying for internships or registering as a volunteer through the official website.";

    }

    // Education
    else if (text.includes("education")) {

        reply = "The foundation supports students through educational programs, career guidance and learning initiatives.";

    }

    // Healthcare
    else if (text.includes("healthcare") || text.includes("health")) {

        reply = "NayePankh Foundation organizes healthcare initiatives and awareness programs for the community.";

    }

    // Food
    else if (text.includes("food")) {

        reply = "The foundation conducts food distribution activities to help people in need.";

    }

    // Awareness
    else if (text.includes("awareness")) {

        reply = "The foundation regularly conducts awareness campaigns on education, health and social development.";

    }

    // Certificate
    else if (text.includes("certificate")) {

        reply = "Internship certificates are provided after successfully completing the internship program.";

    }

    // Skills
    else if (text.includes("skill")) {

        reply = "The foundation helps students improve their technical, communication and professional skills.";

    }

    // Career
    else if (text.includes("career")) {

        reply = "NayePankh Foundation supports students through internships, skill development and career guidance.";

    }

    // FAQ
    else if (text.includes("faq")) {

        reply = "You can ask me about internships, volunteering, donations, services, education, healthcare, events and contact information.";

    }

    // Thank You
    else if (text.includes("thank")) {

        reply = "You're welcome! Have a great day.";

    }

    // Default
    else {

        reply = "Sorry, I couldn't understand your question. Please ask about internships, volunteering, donations, services, education, healthcare, events or contact information.";

    }

    // Bot Reply
    setTimeout(function () {

        let botMessage = document.createElement("div");
        botMessage.className = "bot-message";
        botMessage.innerHTML = "<strong>AI Assistant:</strong><br>" + reply;

        chatArea.appendChild(botMessage);

        chatArea.scrollTop = chatArea.scrollHeight;

    }, 500);

    input.value = "";

}


// Quick Buttons
function quickQuestion(question){

    document.getElementById("user-input").value = question;
    sendMessage();

}


// Clear Chat
function clearChat(){

    let chatArea = document.getElementById("chat-area");

    chatArea.innerHTML = `
    <div class="bot-message">

        <strong>AI Assistant:</strong><br><br>

        Hello! 👋<br><br>

        I am the <b>NayePankh AI Smart Assistant</b>.<br><br>

        I can help you with:<br><br>

        ✔ Internship Information<br>
        ✔ Volunteer Registration<br>
        ✔ Donation Information<br>
        ✔ Events & Activities<br>
        ✔ Education Programs<br>
        ✔ Healthcare Initiatives<br>
        ✔ Contact Details<br><br>

        Please choose an option below or type your question.

    </div>
    `;

}


// Press Enter to Send
document.getElementById("user-input").addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        sendMessage();

    }

});