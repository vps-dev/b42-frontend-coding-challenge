# B42 Frontend Coding Challenge

## General
Fork this repository and submit your completed version via Github again.

## What to build
Build the frontend for a workout.
Look here for a gross template of how it should look: [B42 Frontend Coding Challenge Template](https://www.figma.com/file/yI7Dzf1Y8yvgvjyqzjA41G/B42-Frontend-Coding-Challenge?node-id=0%3A1)

Take this layout only as a clue, the final design is completely up to you.
You also see in this prototype, which screens are connected with another screen. If you click on the playbutton in the right upper corner, you can also click through this prototype.

The backend you can use is available here:
[B42 Coding Challenge Backend](https://b42-challenge.azurewebsites.net )

It contains a GrahpiQL playground, so you can play around with the queries and mutations to get familiar with them.
> The first time it can took a while to load the page, because the underlying service gets paused if not used! 

## Requirements
- Load workouts dynamically from backend and display them on the overview page
- Show overview page of the workout before starting the workout
- Allow user to go through the workout
- After a workout is finished execute `finishWorkout` mutation
- Optional - Show on overview page, which workout is finished

### Technological-wise
- React Native
- Typescript
- GraphQL via Apollo Client
- Use functional components with hooks instead of class components
