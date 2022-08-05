---
layout: post
title: Introducing Simple.css Version 2 🎉
description: I've been hacking on Simple.css recently, and all the changes have accumulated into a new major version. Say hello to Simple.css version 2.
image: /assets/images/simple-css-feature.webp
---
I started off wanting to make a few small tweaks to Simple.css, but that list has grown recently since we [hit the front page of Hacker News](https://news.ycombinator.com/item?id=29929438). I decided to take the snag list I had and completely re-do Simple.css in way that I should have in the first place.

## So what's changed on v2.0?
Well, a lot to be honest. Here's an (incomplete) list as I can't remember everything I changed off the top of my head:

* Simple.css now uses CSS Grid instead of the old school `display:block;` method - this improves responsiveness and stops the need for hacks when it comes to full width content
* I've gone through the entire stylesheet to both clean it up and simplify it
* [Added a blog](/hello-world) to this site
* Lots of small UI/UX tweaks that generally improve things

## Will these changes break my site?
In short, I don't know. They shouldn't as I've made no changes that require the structure of your HTML to change, but you never know.

If these changes have broken your site, firstly, I'm sorry - it's all in the name of maturing the project. Secondly, I've published version 1.x of the Simple.css stylesheet separately, so you can continue to use that in your project, if you like.

To do that, simply change the `stylesheet` reference in your `head` section to **one** of the following:

```
// Our CDN
<link rel="stylesheet" href="https://cdn.simplecss.org/simple-v1.css">

OR

// NPM CDN
<link rel="stylesheet" href="https://unpkg.com/simpledotcss@2.0.0/simple-v1.css">
```

If you want to continue to use Simple.css in your project and get the latest and greatest version, there's nothing for you to do. Things should continue to chug along nicely. However, if you are having issues, please [submit an issue on GitHub](https://github.com/kevquirk/simple.css/issues) and I'll do my best to help.

## Thank you!

Finally, I just wanted to say thank you to all the people have contributed to Simple.css, and continue to do so. I never expected Simple.css to go anywhere - it was just a fun little personal project that I ended up publishing. So to see other people finding it useful and using it in the wild really warms my heart.

If you're not using Simple.css yet, check out the [getting started](https://github.com/kevquirk/simple.css/wiki/Getting-Started-With-Simple.css) page to...you know...*get started*. 🙃
