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

Main functionality of the game has been tested by adding unit test to the utilities.

For running tests: `npm run test`

## Accessibility

Native HTML tags have been used as well as WAI-ARIA roles and aria labels for acceissibility. This would help web reading tools to navigate through the form.

An 94 overall scored achieved in Lighthouse tool

![Screenshot 2024-04-24 at 22 12 05](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/cb361f10-b1ee-4584-9889-2af49f531a9a)

## Responsiveness

Responsive design working in mobile, tablet and desktop

### Mobile

![Screenshot 2024-04-24 at 22 26 37](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/02531bcc-6668-4836-bec4-31dfae82dc47)

### Tablet

![Screenshot 2024-04-24 at 22 24 57](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/314b5bb9-ac14-484d-b780-baf4e3c5643e)

![Screenshot 2024-04-24 at 22 24 42](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/97e20785-64ff-463d-a5a0-71b534542efb)

### Desktop

![Screenshot 2024-04-24 at 22 24 21](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/b2930cee-4424-49d0-94a9-170bfb19e1aa)

