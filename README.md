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

### Starting the game

![Screenshot 2024-04-24 at 22 24 21](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/025d3cea-7a19-4d62-b691-90657b0c9279)

### Adding more players

![Screenshot 2024-04-25 at 17 34 08](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/c73b4383-209e-4dd1-9eae-ed0a2b6923b1)

### Rolling the dice

![Screenshot 2024-04-25 at 17 34 53](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/b296601f-e3b0-4ecd-8ad6-3e5e572c82f5)

### A one appeared you lost you tourn and the point accummulated in your turn

![Screenshot 2024-04-25 at 17 35 07](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/6dc940c9-c6a3-47c9-942d-45fc55c22cf4)

### Two ones (sname eyes) appeared you lost all your points and your turn

![Screenshot 2024-04-25 at 17 36 15](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/9c91b831-42a3-4ccc-91d0-50bf79473354)

### We have a winner

![Screenshot 2024-04-25 at 17 36 52](https://github.com/david-lorenzo-vargas/Pig-Dice-Game/assets/72414745/966c8158-22ae-43db-be4a-6664ba672660)

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

