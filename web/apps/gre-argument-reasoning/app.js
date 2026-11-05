/* Argument Reasoning Trainer: assumptions, strengthen, weaken, flaw, inference and paradox questions. */
(function () {
  'use strict';
  const GUIDE = [
    ['Assumption', 'Find the gap between the evidence and the conclusion. The assumption is what must be true to close it.'],
    ['Weaken', 'Look for another explanation of the evidence, or a reason the conclusion does not follow.'],
    ['Strengthen', 'Rule out another explanation, or show the link the argument relies on.'],
    ['Flaw', 'Name the reasoning error: cause from correlation, a biased sample, attacking the person, lack of proof as proof.'],
    ['Inference', 'Choose what must be true from the statements. Stay inside what is given.'],
    ['Paradox', 'Find the fact that lets both surprising statements be true at once.'],
    ['Evaluate', 'Choose the question whose answer would most change how strong the argument is.'],
  ];
  const App = {
    about: 'Some GRE reading questions give a short argument and ask you to find its assumption, or to strengthen or weaken it. This app has 24 original arguments covering seven question types, each with an explanation of the reasoning.',
    how: ['Read **Question types** to learn what each type asks.', 'In **Practice**, choose a type or mix them.', 'Before you read the choices, say in your own words what is wrong or missing in the argument.'],
    tabs: [
      SK.bankTab('practice', 'Practice', (ctx) => ctx.data.arguments, { sizes: [5, 10, 24] }),
      { id: 'types', label: 'Question types', render(el) { el.appendChild(SK.card('Question types', SK.table(['Type', 'What to look for'], GUIDE, false))); } },
    ],
    checks: {
      'every argument is valid and every type in the guide has questions': (data, assert) => {
        for (const it of data.arguments) assert.deepEqual(SK.validateItem(it), []);
        const topics = new Set(data.arguments.map((x) => x.topic));
        for (const [t] of GUIDE) assert.ok(topics.has(t), t);
      },
    },
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = App; else SK.start(App);
})();
