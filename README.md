# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](![alt text](image.png))

### Links

- Solution URL: (https://github.com/korcakSEA/fylo-dark-theme-landing-page-master.git)
- Live Site URL: (https://korcaksea.github.io/fylo-dark-theme-landing-page-master/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [SASS/SCSS](https://sass-lang.com/) - CSS pre-processor

### What I learned

There were two difficult parts for me in this project. The first was controlling the sections; since they had different background colors and widths, I implemented a wrapper class with fallback values. The second challenge was the footer navigation. While mobile and desktop were straightforward, the tablet view required a custom three-column grid that I managed using advanced CSS properties.

```css
  .wrapper {
    // Defined wrapper variables with fallback values
    --_inline-padding: var(--inline-padding, #{px-to-rem(48)});
    // Adjust inline padding for meduim screens and up
    @include respond-to(md) {
      --_inline-padding: var(--inline-padding, #{px-to-rem(108)});
    }
    // Defined max content width with a fallback value
    --_max-content-width: var(--max-content-width, #{px-to-rem(1280)});
    width: min(100% - var(--_inline-padding), var(--_max-content-width));
    margin-inline: auto;
  }
```

```css
&__nav {
  display: grid;
  margin-bottom: var(--spacing-600);

  @include respond-to(md) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-400);
    margin-bottom: 0;

    /* On Tablet, we need the ULs to not restrict the layout */
    ul {
      display: contents;
      /* 'display: contents' makes the <ul> "disappear" so the <li> elements
          become direct children of the grid! */
    }
  }
  @include respond-to(lg) {
    grid-template-columns: repeat(2, 1fr);
    ul {
      display: block;
    }
  }
}
```

## Author

- Website - (https://korcaksea.github.io/myPortfolio/)
- Frontend Mentor - [@korcakSEA](https://www.frontendmentor.io/profile/korcakSEA)
- LinkedIn - (https://www.linkedin.com/in/korhancakir/)
