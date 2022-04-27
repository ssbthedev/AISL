# AISL

*2nd Place Winner at HackMCST VII*

## Inspiration

All three members of our team do not know ASL. Because of this, we recognized the need to bridge the gap between non-ASL users and ASL users. Communication is a key aspect of our society, so it is necessary that we are able to communicate with as many people we can, despite language barriers that may be present. We hope that we can encourage communication between all personnel.

## What it does

Using a computer's web camera, our AI system is able to detect a given sign. For now, our system only includes the alphabet rather than full-word signs due to lack of time in data training. Once a sign is accurately detected, a sentence begins to form at the bottom of the screen. After the user creates a full word, the word is audibly spoken.

## How we built it

We built our project using HTML, CSS, TensorFlow.js, and Speech Synthesis Utterance. HTML provided the frame work for our webpage and allowed us to display the web camera, probability statistics for each letter, and the sentence at the bottom. CSS allowed to make our website visually appealing. We used TensorFlow.js to create our machine learning and predict which letter was the most likely being shown. The js and Speech Synthesis allows our machine to speak full words and letters.

## Challenges we ran into

The main challenge we ran into with our code was an inadequate dataset to train our machine with. Since it takes a very long time to train our AI, we were limited as to how long we could train it for and how many images me could use. Due to time constraints, our machine contains a bias.

## Accomplishments that we're proud of

We are proud that we were even able to incorporate AI into our code. None of us had ever worked with AI or machine learning programs, so it was very hard to overcome and figure out the new code and functions. We're also proud of integrating speech and onscreen text with the AI.

## What's next for AISL

For our project, we hope to have better training data to recognize letters more accurately and, in the future, even recognize full words and motions through training with videos.
