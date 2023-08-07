# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [View on Netlify](https://fem-newsletter-signup-seanhillweb.netlify.app/)
- Project URL: [View on Github](https://github.com/seanhillweb/frontend-mentor-newsletter-sign-up-form)

## My process

### Built with

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

### What I learned

This was my initial foray into using React Hook Forms. Previously, I would have used Formik; however, I wanted to learn a new tool and took this challenge as an opportunity to learn. Going forward, I'm very much interested in continuing to use React Hook Forms.

Checking format and providing error messaging is easy. Here is a highlight of the input element:

```js
<input
  id="email"
  type="email"
  name="email"
  className={`rounded-lg px-4 py-3 border-grey hover:border-slate focus:border-slate focus:ring-transparent hover:cursor-pointer ${
    errors.email
      ? "text-tomato bg-tomato bg-opacity-10 border-tomato hover:border-tomato focus:border-tomato"
      : ""
  }`}
  placeholder="email@company.com"
  aria-invalid={errors.email ? "true" : "false"}
  {...register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  })}
/>
```

### Useful resources

- [React Hook Form Example](https://www.freecodecamp.org/news/how-to-build-forms-in-react/) - This helped me build an initial skeleton for the email input and form. This seems like a flexible pattern, and can make other forms much easier to build.

## Author

- Website - [Sean Hill](https://www.seanhillweb.com)
- Frontend Mentor - [@seanhillweb](https://www.frontendmentor.io/profile/seanhillweb)
