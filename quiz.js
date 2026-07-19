/* ===========================================
   PhishShield v1.0
   Quiz Database
   One Quiz for Every Scenario
=========================================== */

const quizQuestions = [

    {
        id: 1,
        question: "What is the biggest warning sign in this PayPal email?",
        options: [
            "Misspelled sender domain",
            "Blue PayPal logo",
            "Formal greeting",
            "Company name"
        ],
        answer: 0,
        explanation: "Attackers often replace letters with similar-looking characters, such as 'paypa1' instead of 'paypal'."
    },

    {
        id: 2,
        question: "Before resetting a Microsoft password, what should you verify?",
        options: [
            "Sender's email domain",
            "Email color",
            "Logo size",
            "Font style"
        ],
        answer: 0,
        explanation: "Always verify the sender's domain before clicking password reset links."
    },

    {
        id: 3,
        question: "Why is this Gmail security alert suspicious?",
        options: [
            "It comes from an unofficial domain",
            "It has the Gmail logo",
            "It contains a greeting",
            "It has a subject line"
        ],
        answer: 0,
        explanation: "Google security notifications come only from official Google domains."
    },

    {
        id: 4,
        question: "Unexpected refund emails are commonly used to:",
        options: [
            "Steal your credentials",
            "Give free money",
            "Improve customer service",
            "Increase cashback"
        ],
        answer: 0,
        explanation: "Refund scams trick users into visiting phishing pages."
    },

    {
        id: 5,
        question: "Why is the SBI email suspicious?",
        options: [
            "It uses an unofficial .xyz domain",
            "It contains the SBI logo",
            "It has a greeting",
            "It mentions security"
        ],
        answer: 0,
        explanation: "Banks do not use random .xyz domains for customer communication."
    },

    {
        id: 6,
        question: "What is suspicious about this HDFC KYC email?",
        options: [
            "It creates urgency using an unofficial domain",
            "It contains a company logo",
            "It has proper grammar",
            "It mentions KYC"
        ],
        answer: 0,
        explanation: "Urgency combined with unofficial domains is a common phishing tactic."
    },

    {
        id: 7,
        question: "Why should you be cautious of copyright notices by email?",
        options: [
            "Attackers use fear to steal credentials",
            "Instagram always sends fake emails",
            "Copyright complaints never exist",
            "Appeals are illegal"
        ],
        answer: 0,
        explanation: "Fear and urgency are frequently used in phishing attacks."
    },

    {
        id: 8,
        question: "Unexpected job offers asking you to download files may contain:",
        options: [
            "Malware",
            "Extra salary",
            "Official contracts",
            "Company policies"
        ],
        answer: 0,
        explanation: "Unexpected attachments may install malware."
    },

    {
        id: 9,
        question: "The safest way to update your Netflix payment is to:",
        options: [
            "Visit Netflix directly using your browser",
            "Click every email link",
            "Use forwarded emails",
            "Trust every billing email"
        ],
        answer: 0,
        explanation: "Always visit the official website yourself."
    },

    {
        id: 10,
        question: "Why are fake courier emails so successful?",
        options: [
            "People are often expecting deliveries",
            "Shipping companies never send emails",
            "Tracking numbers are always fake",
            "Packages never require payment"
        ],
        answer: 0,
        explanation: "Attackers exploit people's expectations about deliveries."
    },

    {
        id: 11,
        question: "What is the main warning sign in the Facebook email?",
        options: [
            "Threat of account suspension",
            "Blue Facebook logo",
            "Formal greeting",
            "Profile picture"
        ],
        answer: 0,
        explanation: "Threatening users with account suspension is a common phishing technique."
    },

    {
        id: 12,
        question: "How can you verify an Apple ID security email?",
        options: [
            "Check that it comes from Apple's official domain",
            "Trust the Apple logo",
            "Trust the colors",
            "Trust any verification request"
        ],
        answer: 0,
        explanation: "Always verify the sender's official Apple domain."
    },

    {
        id: 13,
        question: "What makes fake file-sharing emails dangerous?",
        options: [
            "They trick users into opening malicious links",
            "They improve collaboration",
            "They increase storage",
            "They automatically encrypt files"
        ],
        answer: 0,
        explanation: "Fake document-sharing emails often lead to phishing websites."
    },

    {
        id: 14,
        question: "Winning a free iPhone unexpectedly is usually:",
        options: [
            "A phishing scam",
            "A guaranteed prize",
            "A shopping discount",
            "A bank reward"
        ],
        answer: 0,
        explanation: "Unexpected prizes are classic phishing bait."
    },

    {
        id: 15,
        question: "Why is WhatsApp verification by email suspicious?",
        options: [
            "WhatsApp normally doesn't verify accounts this way",
            "Emails are always fake",
            "Phone numbers cannot be verified",
            "WhatsApp has no security"
        ],
        answer: 0,
        explanation: "WhatsApp does not normally request account verification via email."
    },

    {
        id: 16,
        question: "What information do tax refund scams usually try to steal?",
        options: [
            "Banking information",
            "Favorite color",
            "Movie preferences",
            "Internet speed"
        ],
        answer: 0,
        explanation: "Tax refund scams often target bank account details."
    },

    {
        id: 17,
        question: "Which information should never be shared through email?",
        options: [
            "Your UPI PIN",
            "Your first name",
            "Your city",
            "Your browser"
        ],
        answer: 0,
        explanation: "No legitimate organization will ask for your UPI PIN through email."
    },

    {
        id: 18,
        question: "Gaming account phishing usually targets:",
        options: [
            "Login credentials",
            "Graphics settings",
            "Game scores",
            "Internet speed"
        ],
        answer: 0,
        explanation: "Attackers want your Steam username and password."
    },

    {
        id: 19,
        question: "Why are fake copyright notices effective?",
        options: [
            "They pressure creators into acting quickly",
            "They improve video quality",
            "They increase subscribers",
            "They remove advertisements"
        ],
        answer: 0,
        explanation: "Urgency prevents victims from carefully checking the email."
    },

    {
        id: 20,
        question: "What should you do if you receive a suspicious delivery email?",
        options: [
            "Visit the courier's official website manually",
            "Pay immediately",
            "Reply with your address",
            "Click every tracking link"
        ],
        answer: 0,
        explanation: "Always verify delivery information through the official courier website."
    }

];
