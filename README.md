# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements
 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Live Site URL: https://lambent-panda-7d80f4.netlify.app

## My process

### Built with

- Semantic HTML5 markup
- Material UI
- Grid Layout
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learnt how to change the width of the parent Stack that handles the width of the image when it scales to smaller devices. As well as the CardMedia component was able to adjust and change its borderRadius according to certain screen breakpoints.

To see how you can add code snippets, see below:

``` <Stack sx={{ width: { xs: "100%", md: "300px" }, height: "500px" }}>
              <CardMedia
                component="img"
                height="500"
                image={PerfumeDesktop}
                alt="Perfume"
                sx={{
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: { xs: 8, md: 0 },
                  borderBottomLeftRadius: { xs: 0, md: 8 },
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Stack>
```
```<Stack sx={{ p: 2 }}>
                <Button
                  variant="contained"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{
                    p: 1,
                    backgroundColor: Colors.secondary,
                    ":hover": {
                      bgcolor: Colors.secondary,
                      borderColor: Colors.secondary,
                    },
                  }}
                >
                  Add to Cart
                </Button>
              </Stack>
```


### Useful resources

- [Example resource 1]https://aguidehub.com/blog/2022-12-06-how-to-change-mui-button-color-on-hover-in-react-js/#:~:text=%E2%9D%A4%EF%B8%8F-,To%20change%20mui%20button%20color%20on%20hover%20in%20React%20js,mui%20button%20color%20on%20hover. - This helped me for changing the hover background color on the Add to Cart Button as it was set to the default MUI background color..

## Author

- Website - https://masimasinga.netlify.app/
- Frontend Mentor - [@MasiMasinga](https://www.frontendmentor.io/profile/MasiMasinga)

