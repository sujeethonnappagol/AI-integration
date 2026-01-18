
let url = "https://openrouter.ai/api/v1/chat/completions";
const faqs = [
  {
    question: "Who is this 2-day GenAI Mastermind for?",
    answer: "This program is for developers, founders, and professionals who want practical, real-world GenAI skills."
  },
  {
    question: "Do I need prior AI or ML experience?",
    answer: "No. Basic programming knowledge is sufficient to follow the sessions."
  },
  {
    question: "What will I learn in these 2 days?",
    answer: "You will learn GenAI fundamentals, prompt engineering, LLM usage, and how to build real applications."
  },
  {
    question: "Is this live or recorded?",
    answer: "This is a completely live, interactive 2-day session."
  },
  {
    question: "Will there be hands-on coding?",
    answer: "Yes. We will build and demo multiple GenAI use cases live."
  },
  {
    question: "Which tools and models will be used?",
    answer: "We will use popular LLMs, APIs, and modern GenAI tooling used in production."
  },
  {
    question: "Will I get recordings after the sessions?",
    answer: "Yes. Session recordings will be shared after the mastermind."
  },
  {
    question: "Can beginners attend this?",
    answer: "Yes. Concepts will be explained from the ground up with practical examples."
  },
  {
    question: "Will this help in getting a job or freelancing?",
    answer: "Yes. The focus is on industry-relevant skills and real-world project thinking."
  },
  {
    question: "Is there any certificate provided?",
    answer: "Yes. A participation certificate will be provided after completion."
  }
];
let history = [
    {
        role: 'system',
        content:`You are an assitant to help learners for queries related to 2 days live genai mastermind
        only answer the questions on the basis of faqs available ${JSON.stringify(faqs)}
        if the user asks anything apart from the faq do not answer it at any cost. and reply that u can only help with GenAI Faqs
        `
    }
]
async function chat(message){
    history.push({role: "user", content: message});
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": "Bearer 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",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "openai/gpt-4o-mini",
            messages: history
        })
    });
    const data = await res.json();
    const reply = data.choices[0].message.content;
    history.push({role: "assistant", content: reply});
    console.log(reply);
}