import React from "react";
const advices=[
    "Work Hard",
    "Set clear and achievable goals for your studies.",
    "Develop a consistent daily routine for learning and revision.",
    "Take short breaks during study sessions to stay focused.",
    "Stay organized by maintaining a planner or to-do list.",
    "Avoid procrastination by breaking tasks into smaller steps.",
    "Stay curious and actively seek to understand concepts, not just memorize.",
    "Ask questions whenever you feel stuck or confused.",
    "Use a variety of study methods, like flashcards, notes, and group discussions.",
    "Minimize distractions while studying by creating a dedicated workspace.",
    "Prioritize your health by eating nutritious food and staying hydrated.",
    "Get at least 7-8 hours of sleep every night for better concentration.",
    "Engage in physical activities to reduce stress and boost energy.",
    "Review your notes regularly to reinforce your understanding.",
    "Stay updated with the latest trends and developments in your field.",
    "Seek help from teachers, peers, or online resources when needed.",
    "Practice time management to balance academics and leisure activities.",
    "Take mock tests or quizzes to identify and improve weak areas.",
    "Celebrate small achievements to stay motivated.",
    "Build a support system of friends who share similar academic goals.",
    "Always believe in your potential and stay positive."
]



const RandomAdviceLS=({onSelectAdvice})=>{

    const getRandomAdvice=()=>{
        const randomIndex=Math.floor(Math.random()*advices.length);
        return advices[randomIndex];
    }
    const handleClick=()=>{
    // Math.random = hame koi v randm deta hai 0 to 1 ke bich
    // Math.floor= se hame floor vlaue milti hai jaise 5.8 =5,  5.4=5

    const advice = getRandomAdvice();
    onSelectAdvice(advice)

    }
    return(
        <>
        <button onClick={handleClick}>Generate Advice</button>
        </>
    )
}
export default RandomAdviceLS;