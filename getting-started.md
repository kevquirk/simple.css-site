---
title: Getting Started | Simple.css {}
header: Getting Started
description: Instructions on how to get started with Simple.css.
permalink: /getting-started
layout: default
---

Ok, so you're starting a new project (or have an existing project), and you want to use Simple.css to theme your site. It's very simple to do and you should be able to set something up that looks like this site in just a few minutes.

There are a couple of ways in which you can use Simple.css:

1. Add the minified, CDN hosted version of Simple.css, so you always get the latest updates.
2. Host Simple.css yourself.

## Option 1 - the CDN hosted version

Whenever we push an update to the [Simple.css GitHub repository](https://github.com/kevquirk/simple.css), GitHub automatically minifies the CSS and publishes it to our CDN.

So all you need to do in order to use Simple.css in your project, is add the following line of code to the `<head>` section of your HTML:

```
<link rel="stylesheet" href="https://cdn.simplecss.org/simple.min.css">
```

Now, whenever I publish an update to Simple.css, you will automatically receive it.

## Option 2) - UNPKG.com - CDN for npm

Whenever we push a new version to [**npm**](https://www.npmjs.com/) a minified and unminified version of the CSS will be available in [**unpkg**](https://unpkg.com/).

So all you need to do in order to use Simple.css in your project, is add the following line of code to the `<head>` section of your HTML:

```
<link rel="stylesheet" href="https://unpkg.com/simple.css/simple.min.css">
```

## Option 3) - Install from npm

[npm](https://www.npmjs.com/) is a package registry installing JavaScript and other frontend packages, for NodeJS and browsers.  If you're using any sort of build process (webpack, gulp, browserify,etc), you can manage simple.css as dependency in your project's _package.json_.

To install with npm or Yarn
```
$ npm install @kevquirk/simple.css

# or

$ yarn add @kevquirk/simple.css
```

For example, using a bundler like **webpack**, you can consume simple.css using an `@import` in a CSS file
```
@import url('~simple.css/simple.min.css');
```


## Option 4 - Self-host Simple.css

Of course, you don't have to use the CDN delivery method. If you prefer, you can host Simple.css yourself; but you won't automatically receive updates to the CSS as it is released. You would need to re-download the source and update your project yourself.

Here's an example of how you would download the Simple.css source and host it yourself in a project...

### Step 1 - create a HTML file

The first thing you're you're going to need is a HTML file so you have something to actually format with Simple.css. Fire up your favourite text editor (my favourite is [Atom](https://atom.io)) and paste this basic HTML into it:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My New Website</title>
</head>
<body>
  <header>
    <h1>Hello, world</h1>
    <p>Welcome to my website!</p>
  </header>

  <main>
    <p>This is my new website and it's using Simple.css. It's really cool. If you want to use it too, you can <a href="https://simplecss.org">visit their site</a>.</p>
  </main>

  <footer>
    <p>Jane Smith's website.</p>
  </footer>
</body>
</html>
```

Save this file on your computer somewhere as `index.html`. If you then double-click on that file, it will open in your browser and should look something like this:

![Unformatted HTML example](/assets/images/unformatted-html.png)

Not very nice, I think you will agree. Let's add Simple.css and fix this, shall we?

### Step 2 - add Simple.css

All you need to do to add all the loveliness of Simple.css to your fantastic new site, is download the latest version of Simple.css [from Github](https://github.com/kevquirk/simple.css), copy the `simple.min.css` file to the same directory as the `index.html` you just made, then add the following to the `<head>` section of your HTML:

```
<link rel="stylesheet" href="simple.min.css">
```
Refresh your browser window and ta da! You now have Simple.css formatting on your site. 🎉

![Simple.css formatted HTML example](/assets/images/simple-css-formatted-html.png)

**That's it. You're done.**

You now have Simple.css formatting your site. All you need to do now is edit the `<header>` and `<footer>` sections to suit your needs. Any content within the main page needs to be added inside the `<main>` tags.

How easy was that! If you want to learn more about adding more styles elements and what's available with Simple.css, take a look at the [demo page](/demo).
