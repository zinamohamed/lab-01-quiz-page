# lab-01-quiz-page

Outcomes:
  - There should be an alert
  - There should be a confirm so the user can opt out
  - There should be a first name prompt and last name prompt
  - The user should be able to see their results after taking the quiz

HTML:
  - Some info, presented nicely with an image.
  - A button
  - A secret, empty div


1) Get DOM Elements
  - button
  - secret div

2) Add event listeners
  - button

3) Respond to user input
  - launch an alert
  - launch a confirmation
    -if user says no, nothing else happens
    - if user says yes, launch the series of prompts
  - launch a first name prompt
    - store that output
  - launch a last name prompt
    - store that output to display later
  - launch quiz prompts with specific questions
    - How do we evaluate Yes/No
    - What counts as a yes?
    - write a countsAsYes function
  - Make a results string
  - Display results string
    - inject stuff ino the 'textContent' of our secret results div