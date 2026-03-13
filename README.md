EXERCISE 2	 
1. Why states containing an array or an object should be treated as read only?
 +   Because React uses immutability to detect changes. If you modify the array or object directly, React may not detect the change and the component will not re-render correctly.
2. Why do we need to create a new array when we want to add a created object to a state array?
 +   Creating a new array ensures the state is updated immutably. React can then detect the new reference and trigger a re-render.
3. What is the spread operator? How can you use it to clone the state array and add the new created object
 +   The spread operator copies elements from an array or object.
