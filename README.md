# HEB Coding Challenge

The following was a coding challenge I was tasked with for a software developer position at HEB. 

A similar version of this code can be found on [StackBlitz](https://stackblitz.com/edit/heb-code-challenge?file=src/App.js).

> To run in your local dev environment, [Node.js](https://nodejs.org/en/download/) will need to be installed. Once Node is installed follow the following commands:
>   1. In your terminal, run `npm install` to install all dependencies.
>   2. To run tests, while also in your terminal, run `npm test`
>   3. To start a development environment, run `npm start` and navigate to `localhost:8080` in any browser.

The task was to develop a UI that would perform the following:
1. Interface with a pre-existing API and fetch a collection of books
2. Filter out any books that were not between $5 and $20
3. Sort the books in ascending order (lowest to highest) in regard to price

These tasks were completed. However, I felt there was much to be desired before I placed the code on my github, so I added the following:
1. Dynamic filtering based on price minimums and maximums
2. Dynamic filtering based on the number of items shown
3. Dynamic sorting based on preferences of 
    - Price: Lowest to Highest
    - Price: Highest to Lowest
    - Rating: Lowest to Highest
    - Rating: Highest to Lowest
4. Converted the ratings to stars for quick reference for the user
5. Added links to each item leading to Amazon

The tasks that I will implement next will be the following:
1. Implement testing through jest - (still need to complete component testing)
2. Add statistics that will show the three lowest or highest prices as well as the three best rated products
3. Make UI mobile friendly
4. Implement smooth-scroll for lowest/highest prices and best rating
5. Rewrite in TypeScript
![HEB CODE CHALLENGE PREVIEW](./public/heb-preview.png)
