---
id: irqrzcoksg68xkjmywfaeqe
title: Interview Questions
desc: ''
updated: 1690117541465
created: 1690100239733
---


# Entry Level Questions:

PROMPT: Some entry level python interview questions that may be posed to a senior developer 
Sure! Here are some entry-level Python questions that could be posed to a senior software developer:

1. What is Python, and what are some of its key features? [DONE]
  - it includes the obvious good things resulting from its terse syntax and dynamic typing nature
  - being interpretted at runtime is also apparently something

2. How do you define a function in Python? Can you provide an example? [DONE]

3. What is the difference between a list and a tuple in Python? [DONE]
  - its mutability.
  
4. How do you handle exceptions in Python? Can you demonstrate using a try-except block? [DONE]

5. Explain the difference between Python 2 and Python 3. [DONE]

6. How do you read and write data to a file in Python? [TODO]

7. What is the purpose of virtual environments in Python, and how do you create and use them? [DONE]
  - to create a separate isolated project specific env that does not cause conflict with system wide packages

8. Can you explain the concept of Python decorators and provide an example of how they are used? [DONE]
  - they are funcs that take as their input, other functions and methods and lets us do modify the dehaviour of the input function/method by running some code along with the input function in any required order.

9. What are lambda functions in Python? How are they different from regular functions? [DOING]

10. How do you iterate over elements in a list in Python? Can you demonstrate using a for loop? [DONE]

11. Explain the difference between "==" and "is" in Python. [DONE]
  - the "==" operators compares the values of the two objects and not their identity (memory address)
  -  the "is" operator is used for identity comparision, it checks if both of the compared objects refer to the same memory location.

12. How can you handle multi-threading in Python? What are the threading and multiprocessing modules used for? [DO LATER1]

13. What is a Python package, and how do you create and use one? [TODO]

14. Can you describe the use of the "map," "filter," and "reduce" functions in Python? [TODO]

15. How can you work with JSON data in Python? [TODO]

16. Do we have interfaces in python? [TODO]
  - not stright. We have 'abc' module standing for 'Abstract Base Class' that allows us to prepare abstract classes such that they enforce the abstract methods to be defined in classes subclassing them. 


# Intermediate Level Questions:
Certainly! Here's a list of intermediate-level Python questions that may be asked during a senior software developer interview:

1. Explain the differences between Python 2 and Python 3, and discuss the considerations when migrating from Python 2 to Python 3. [DONE]

2. Describe Python's Global Interpreter Lock (GIL) and its implications for multi-threaded programs. [TODO]

3. What are decorators in Python, and how are they used to modify the behavior of functions or methods? []

4. Discuss the differences between mutable and immutable data types in Python, and provide examples of each.

5. Explain the purpose of generator functions and the benefits of using them over regular functions.

6. Describe how exceptions are handled in Python, including the try-except-else-finally block.

7. Discuss the differences between shallow copy and deep copy in Python, and provide examples of when each should be used.

8. How can you profile Python code to identify performance bottlenecks?

9. Explain the concepts of duck typing and polymorphism in Python, and how they contribute to the language's flexibility.

10. Discuss the concept of context managers in Python, and how they are used with the `with` statement.

11. Explain the differences between `__getattr__`, `__getattribute__`, and `__setattr__` methods in Python.

12. How can you work with external modules and packages in Python, and how do you handle versioning of dependencies?

13. Discuss the use of Python's built-in data structures (e.g., dictionaries, sets) and the appropriate scenarios for each.

14. Explain how Python's built-in functions such as `map`, `filter`, and `reduce` can be used to process data efficiently.

15. Describe the concept of metaclasses in Python and provide an example of their usage.

16. How can you implement custom iterators and iterables in Python?

17. Discuss the use of the `asyncio` module for asynchronous programming in Python.

18. How can you optimize performance in Python using techniques like memoization and caching?

19. Explain the differences between list comprehensions and generator expressions, and when to use each.

20. Discuss the advantages and disadvantages of using Python as a language for web development, data science, and system administration.

Remember that the questions asked during an interview can vary based on the specific job role and the company's requirements. Being well-prepared for these topics will demonstrate your depth of understanding and experience with Python programming.
