# Drop Zone
Diff technical interview question.

## Instructions
* There are no time restrictions.
* The exercise is open-book, feel free to use any resource available to you.
* Use the frameworks of your choice to build a solution that meets the requirements (example: jQuery, Bootstrap, Vue, etc).
   * If compilation is required to run the solution, include instructions.

You can work on this solution in one of two ways: by forking this repository, or sending your zip file.

### Forking
1. Fork the repository to your own account.
2. Build a web page that follows the technical requirements below.
3. Send a link to your repository so it can be cloned.

### Zip
1. Clone the repository to your local environment.
2. Build a web page that follows the technical requirements below.
3. Send a zip file of the finished solution.

## Requirements
### Option A
1. The solution matches the mock ups.
1. The countdown timer decrements in real time.
1. The timer begins at 13 days, 8 hours, 12 mins and 5 seconds when the page loads.

### Option B
1. The solution matches the mock ups.
1. The countdown timer decrements in real time.
1. The timer counts down to midnight to a configurable date.
   1. Declare a `date` variable that can take a date of format `MM/DD/YYYY`.

## Mockups
https://www.figma.com/file/OGZEMBBrVIM3n2CdBYsdEK/Drop-Zone?node-id=0%3A1


# =+=+=+=+=+=+=+=+=+=+=+=+=+=+=+

## Getting Started

First, install packages:

```bash
npm install
# or
yarn install
```

After installation, run in local:

```bash
npm run start
# or
yarn start
```

## Some comments:

Hello, I am Marco Antonio, and I am grateful to take an opportunity to take this project

After I read the "requirements" and I took the opportunity  that is "open book" to use the stack I like it, so here's the stack:

1) React with Plain JS
2) Bulma (Lately I was playing with this library, and I like it)
3) SCSS (I love SCSS so why not?)
4) Countdown React library to spend less time writing code in plain JS to wrap the component, and it fulfill the goal

This "challenge" was interesting to me, because I never thought to separate the digits in two "boxes/containers" I never
experienced it or designed it, it was very fun to experiment with many ideas and crazy ones, I am satisfied with my 
result, I think is almost the same mock from the Figma

I would like to share my opinion about this challenge and what I think that I can improve the prject:

1) I would rather to fetch the IRL decrement time from a server rather to local one because I think starting in a specific date is better to compare from a server/API (due to an unexpected change of date for example, rather to change this page for production we can calmly change the API one) to show the exact release date and of course for performance.
2) Mocking from the Figma without different screens dimension for positions and sizes it was kinda tricky, because I was not sure if the sizes is something that can satisfy to UX/UI team, so if I have the opportunity to talk with them to see what happens for specific screens, or if the time is out then what?, etc. I think it will be a great idea to have a meeting with them to fulfill the real goal.
3) I would like to add a loading page to show already a full DOM to avoid and empty page, considering that not all has the same Internet speed though.
