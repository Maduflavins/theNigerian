const correctAnswers = ["A", "B", "A", "A"]
const form = document.querySelector(".quiz-form")
const result = document.querySelector(".result")
form.addEventListener("submit", e => {
    e.preventDefault();

    userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    // calculate the score

    let score = 0;

    userAnswer.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += 25;
        }
    })

    // show result
    scrollTo(0,0);
    
    result.classList.remove('d-none');

    // Animate score
    let output = 0;

    timer = setInterval(()=>{
        result.querySelector('span').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer)
        }else{
            output++;
        }
    }, 25)

});