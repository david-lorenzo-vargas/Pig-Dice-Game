# Pig Dice Game

## Table of Contents
1. [Getting Started](#getting-started)
2. [Description](#description)
3. [Stack](#stack)
4. [Atomic approach](#atomic-approach)
5. [Alias](#alias)
6. [Testing](#testing)
7. [Accessibility](#accessibility)
8. [Responsiveness](#responsiveness)

## Getting Started

First, install node modules:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Required Node.js 18.17 or later.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

Roll the dice and score points.

Rules:
- If one of the dice scores 1 you lose all the points accumulated in your turn and the turn passes to the next player
- If you socre two 1 (snake eyes) you lose all the points accummulated and the turn passes to the next player
- Pass the turn to secure all the points accummulated in your turn
- The first player to score 100 points wins

There is a minimum of two players required but feel free to bring more friends by adding more players to the game

## Stack

<ul>
  <li>Next.js</li>
  <li>Typescript</li>
  <li>Tailwind</li>
  <li>Jest</li>
  <li>React Testing Library</li>
  <li>React Confetti</li>
</ul>

## Atomic approach

Atomic approach has been used for structuring and ordering the componets separated in 'Atoms', 'Molecules' and 'Organisms'.

## Alias

Alias added for improting utilities, types, icons and components.

`import UserIcon from "@icon/User";`
<br>
<br>

`import { User } from "@customTypes/types";`
<br>
<br>

`import { randomNumber } from "@util/randomNumber";`

## Testing

Jest and React Testing Library have been used for testing. Testing has been added to some components but, as further implementation, it would be necessary to add more unit and integration testing for other functionalities and components.

For running tests: `npm run test`

## Accessibility

Native HTML tags have been used as well as WAI-ARIA roles and aria labels for acceissibility. This would help web reading tools to navigate through the form.

An 94 overall scored achieved in Lighthouse tool

## Responsiveness

Responsive design working in mobile, tablet and desktop

### Mobile


### Tablet

### Desktop

