const container = document.querySelector('.container');
const adviceTemplate = document.getElementById('advice-template');
const skeletonTemplate = document.getElementById('skeleton-template');

const displaySkeleton = () => {
  const skeletonNode = skeletonTemplate.content.cloneNode(true);
  container.innerHTML = '';
  container.appendChild(skeletonNode);
};

const displayAdvice = (slip) => {
  const adviceNode = adviceTemplate.content.cloneNode(true);
  adviceNode.querySelector('.heading').innerText = `Advice #${slip.id}`;
  adviceNode.querySelector('.quote').innerText = slip.advice;
  container.innerHTML = '';
  container.appendChild(adviceNode);
};

const generateAdvice = () => {
  displaySkeleton();
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => displayAdvice(data.slip));
};

generateAdvice();