def get_response(message):

    message = message.lower()

    if "internship" in message:
        return "Thank you for your interest in internships. NayePankh Foundation provides internship opportunities in technical and non-technical domains."

    elif "volunteer" in message:
        return "You can become a volunteer and participate in various social service activities organized by NayePankh Foundation."

    elif "donation" in message:
        return "Thank you for supporting NayePankh Foundation. Your contribution helps us continue our education and social welfare initiatives."

    elif "event" in message:
        return "NayePankh Foundation regularly conducts educational programs, awareness campaigns and community support events."

    elif "contact" in message:
        return "You can contact NayePankh Foundation through the Contact Us page available on the official website."

    elif "about" in message:
        return "NayePankh Foundation is a social organization working in education, healthcare, food distribution, awareness campaigns and volunteer development."

    elif "faq" in message:
        return "You can ask me about internships, volunteering, donations, events and contact information."

    elif "hello" in message or "hi" in message:
        return "Hello! Welcome to NayePankh Foundation. How can I help you today?"

    elif "thank" in message:
        return "You're welcome! Have a great day."

    else:
        return "Sorry, I couldn't understand your question. Please ask about internships, volunteering, donations, events or contact information."