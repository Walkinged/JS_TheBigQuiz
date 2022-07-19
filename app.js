const correctAnswers = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const res2 = document.querySelector('.result2');

form.addEventListener('submit', e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

  // check the answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]){
      score += 25;
    }
  });

  // show the result
  scrollTo(0,0);
  result.querySelector('span').textContent = `${score}%`;
  result.classList.remove('d-none');

  if(score > 75)
  {
    res2.classList.remove('d-none');
  }

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;
    if(output === score){
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);

});