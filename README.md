
#TaskManager Application Development Report

#Objective:

The objective of this assignment was to create a simple task manager application using React and Expo that allows users to add new tasks and mark tasks as completed. The application demonstrates the correct way to update arrays and objects within the React state.

#Design Choices:
#1. State Management with useState Hook:
Choice: The useState hook was chosen for state management to store the list of tasks.
Reason: useState is simple and efficient for managing state in functional components.

#2. Task Data Structure:
Choice: Each task is represented as an object with the following properties: id, title, and completed.
Reason: This structure allows for easy management and updating of task properties. The unique id helps in identifying and updating specific tasks.
#3. Adding Tasks:
Choice: A function addTask was implemented to add new tasks. Each new task is given a unique id based on the current timestamp, a title, and an initial completed status of false.
Reason: Using the timestamp ensures unique ids, and initializing the completed status to false is straightforward for new tasks.
#4. Toggling Task Completion:
Choice: A function toggleTaskCompletion was implemented to toggle the completed status of a task. This function uses the map method to immutably update the task array.
Reason: The map method provides a clean way to update specific items in an array without mutating the original state.
#5. Rendering Tasks:
Choice: The tasks are rendered using a combination of Text and Button components inside a View. Each task displays its title and a button to toggle its completion status.
Reason: This approach provides a clear and user-friendly interface for managing tasks.

#Challenges Encountered:

#1. Expo CLI Deprecation:
Challenge: The global Expo CLI was deprecated, causing issues with Node.js versions and CLI commands.
Solution: The project was initialized using the local Expo CLI bundled within the project directory by using npx create-expo-app and npx expo start.
#2. Node.js Version Compatibility:
Challenge: Some packages required Node.js version 18 or higher, while others had issues with newer versions.
Solution: Managed Node.js versions using nvm to switch to a compatible version (LTS 18) for the project.
#3. State Update Immutability:
Challenge: Ensuring that the state updates for the tasks were done immutably to avoid potential bugs.
Solution: Used the spread operator and array methods like map to create new arrays and objects rather than mutating the existing state directly.

#Conclusion:
The TaskManager application was successfully developed using React and Expo, meeting the requirements of adding tasks and toggling their completion status while maintaining state immutability. The project provided valuable experience in managing state and using modern JavaScript features like the spread operator.
