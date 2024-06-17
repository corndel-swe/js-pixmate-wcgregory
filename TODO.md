# Todo

The todos in this section are suggestions - you just feel free to get creative!

## Drawings

- [x] Play with rectangle

- [x] Draw a triangle

- [x] Draw an inverted triangle

- [x] Draw a triangle sandwich

- [x] Draw some diagonals

- [x] Draw a checkerboard

### Rectangle

1. Run `node drawings/rectangle.js` and marvel at the wonder!

1. Take a look a `rectangle.js` and hack around to see how it works.

1. If you make something interesting, save it in a new file!

To make a 2D shape, you are using something called a "nested loop" - that is a
loop inside a loop. The outer loop iterates through the rows, and the inner loop
iterates through each row itself.

Could you make `rectangle.js` into a function which accepts `width` and `height`
to make it more versatile?

### Triangle

Can you draw this?

```txt
*
**
***
****
*****
```

Can you make it a function with the number of rows as a paramter?

### Inverted triangle

How about this?

```txt
*****
****
***
**
*
```

### Triangle sandwich

And this?

```txt
*
**
***
****
*****
****
***
**
*
```

### Diagonal

These guys?

```txt
*
 *
  *
   *
    *
```

and

```txt
    *
   *
  *
 *
*
```

### Checkerboard

A bit trickier...

```txt
* * * * *
 * * * *
* * * * *
 * * * *
* * * * *
```

You'll need some conditional logic here.

### Keep going!

Draw whatever you like. Something useful. Something pretty. Get creative! Use
colour, pattern, functions, conditions... there are no rules.

## Animate

Play with `animations/loading.js`:

- [x] Make `loading.js` into a function to adjust the length of the loading bar

- [x] Add some colour to `loading.js`

- [x] Add a message to each frame in `loading.js` saying the current %
      completion

Ideas for new animations:

- [ ] Make a loading spinner with the symbols `-`, `\`, `|`, `/`

- [ ] Make two arrows crash into eachother and explode `--> <--`

- [ ] Make a twinkling night sky using `Math.random()`

Anything else you can think of! Feel free to hack around with `animate.js` to
change how it works.

> [!TIP]
>
> To make a 2D animation, you can put `\n` into a string to render a line break.
