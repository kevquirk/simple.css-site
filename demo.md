---
title: Demo | Simple.css {}
header: Demo
description: A showcase of Simple.css formatting in action and how to use it.
permalink: /demo
layout: default
---

This page is a demonstration of the elements that can be formatted using Simple.css. Each section includes a code block on how to include it in your site's design.

This may be a little basic for some people, but I wanted to barrier for entry to be as low as possible for this project.

## Basic Typography

All the typography of Simple.css uses `rem` for sizing. This means that accessibility is maintained for those who change their browser font size. The `body` element has a size of `1.15rem`  which makes all the standard font sizes slightly larger. This equates to `18.4px` for paragraph text, instead of the standard `16px`.

The heading elements also have an increased top margin in order to break blocks of text up better.

# Heading 1 `2.8rem`

## Heading 2 `2.25rem`

### Heading 3 `1.8rem`

#### Heading 4 `1.44rem`

##### Heading 5 `1.15rem`

###### Heading 6 `.92rem`

```
<h2>This is a H2 header<h2>

<p>This is some paragraph text.</p>
```

### Links & Buttons

Links are formatted very simply on Simple.css (shock horror). They use the `accent` CSS variable and are underlined. There is a `:hover` effect that removes the underline. Here is an [example link]().

Buttons use the same `accent` CSS variable for their colour. When hovering, there is an opacity effect.

<button>I'm a button</button>

```
<a href="https://example.com">This is a hyperlink</a>

<button>I'm a button</button>
```

## Other typography elements

There are a number of other typography elements that you can use with Simple.css. Some of the common ones are:

* All the standard stuff, like **bold**, _italic_ and <u>underlined</u> text.
* <mark>Highlighting text</mark> using the `mark` element.
* Adding `inline code` using the `code` element.
* Displaying keyboard commands like <kbd>ALT+F4</kbd> using the `kbd` element.

```
<b>Bold text</b>
<i>Italic text</i>
<u>Underlined text</u>
<mark>Highlighted text</mark>
<code>Inline code</code>
<kbd>Alt+F4</kbd>
```

### Lists

We all love a good list, right? I know my wife does!

* Item 1
* Item 2
* Item 3

1. Do this thing
2. Do that thing
3. Do the other thing

```
# Bulleted list
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

# Numbered list
<ol>
  <li>Do this thing</li>
  <li>Do that thing</li>
  <li>Do the other thing</li>
</ol>
```
### Blockquotes

Sometimes you may want to quote someone else in your HTML. For this we use the `blockquote` element. Here's what a quote looks like with Simple.css:

> Friends don’t spy; true friendship is about privacy, too.
>
>
> <cite>– Stephen King</cite>

```
<blockquote>
  <p>Friends don’t spy; true friendship is about privacy, too.</p>
  <p><cite>– Stephen King</cite></p>
</blockquote>
```

### Code blocks

Code blocks are different from the inline `code` element. Code blocks are used when you want to display a block of code, like this:

```
body {
  color: var(--text);
  background: var(--bg);
  font-size: 1.15rem;
  line-height: 1.5;
  margin: 0;
}
```

```
<pre>
<code>
  body {
    color: var(--text);
    background: var(--bg);
    font-size: 1.15rem;
    line-height: 1.5;
    margin: 0;
  }
</code>
</pre>
```
## Navigation

The `nav` menu is deliberately designed to be extremely simple so that you can improve on it as you see fit. Or, just leave it as is to have a good looking, functional navigation menu.

There's no JavaScript of checkbox CSS hacks here. It's just a collection of simple "buttons" that wrap to the given width of the page:

<nav>
  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Blog</a>
  <a href="">Notes</a>
  <a href="">Guestbook</a>
  <a href="">Contact</a>
  <a href="">Link 1</a>
  <a href="">Link 2</a>
  <a href="">Link 3</a>
</nav>

To add a `nav` menu, just add the following to the `<header>` section of your site:

```
<nav>
  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Blog</a>
  <a href="">Notes</a>
  <a href="">Guestbook</a>
  <a href="">Contact</a>
</nav>
```

## Images

In Simple.css, images within the `main` element are always full width and have rounded edges to them. The `figcaption` element is also formatted in Simple.css. Here are examples of images with and without a caption:

![A dog at an iPad](/assets/images/dog-ipad.jpg)

<figure>
  <img alt="This is a goose (I think)" src="/assets/images/goose.jpg" />
  <figcaption>This is a goose (I think)</figcaption>
</figure>

## Accordions

Accordions are cool to play with. They're especially useful when it comes to things like FAQ pages. Many people invoke JavaScript, or `div` for life when they use accordions. I don't really understand why that is what it's available in plain old HTML:

<details>
  <summary>Spoiler alert!</summary>
  <p>You smell. 🙂</p>
</details>

```
<details>
  <summary>Spoiler alert!</summary>
  <p>You smell. 🙂</p>
</details>
```

## Tables

Like lists, sometimes you may need to add a table to your webpage. In Simple.css tables automatically highlight every other row to make reading easier. Table header text is also bold. Here's what they look like:

| Name  |  Number |
|---|---|
| Jackie  | 012345  |
| Lucy  | 112346  |
| David  | 493029  |
| Kerry  |  395499 |
|  Steve | 002458  |

```
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Jackie</td>
      <td>012345</td>
    </tr>
    <tr>
      <td>Lucy</td>
      <td>112346</td>
    </tr>
    <tr>
      <td>David</td>
      <td>493029</td>
    </tr>
    <tr>
      <td>Kerry</td>
      <td>395499</td>
    </tr>
    <tr>
      <td>Steve</td>
      <td>002458</td>
    </tr>
  </tbody>
</table>
```

## Forms

Forms are useful for all kinds of things on webpages. Contact forms, newsletter sign ups etc. Forms also look pretty good on Simple.css:

<form>
  <p><strong>This is just a test form. It doesn't do anything.</strong></p>
  <p>
  <select>
		<option selected="selected" value="1">Title</option>
		<option value="2">Mr</option>
    <option value="3">Miss</option>
    <option value="4">Mrs</option>
    <option value="5">Other</option>
	</select>
  </p>
  <p>
  <label>First name</label><br>
  <input type="text" name="first_name">
  </p>
  <p>
  <label>Surname</label><br>
  <input type="text" name="surname">
  </p>
  <p>
  <label>Email</label><br>
  <input type="email" name="email" required="">
  </p>
  <p>
  <label>Enquiry type:</label><br>
  <label><input checked="checked" name="type" type="radio" value="sales" /> Sales <label><br />
	<label><input name="type" type="radio" value="support" /> Support <label><br />
  <label><input name="type" type="radio" value="billing" /> Billing<label>
  </p>
  <p>
  <label>Message</label><br>
  <textarea rows="6"></textarea>
  </p>
  <p>
  <label>
  <input type="checkbox" id="checkbox" value="terms">
  I agree to the <a href="#">terms and conditions</a>
  </label>
  </p>

  <button>Send</button>
  <button type="reset">Reset</button>
  <button disabled="disabled">Disabled</button>
</form>

```HTML
<form>
  <p><strong>This is just a test form. It doesn't do anything.</strong></p>

  <p><select>
    <option selected="selected" value="1">Title</option>
    <option value="2">Mr</option>
    <option value="3">Miss</option>
    <option value="4">Mrs</option>
    <option value="5">Other</option>
  </select></p>

  <p>
  <label>First name</label><br>
  <input type="text" name="first_name">
  </p>

  <p>
  <label>Surname</label><br>
  <input type="text" name="surname">
  </p>

  <p>
  <label>Email</label><br>
  <input type="email" name="email" required="">
  </p>

  <p>
  <label>Enquiry type:</label><br>
  <input checked="checked" name="type" type="radio" value="sales" /> Sales <br />
  <input name="type" type="radio" value="support" /> Support <br />
  <input name="type" type="radio" value="billing" /> Billing
  </p>

  <p>
  <label>Message</label><br>
  <textarea rows="6"></textarea>
  </p>

  <p>
  <label>
  <input type="checkbox" id="checkbox" value="terms">
  I agree to the <a href="#">terms and conditions</a>
  </label>
  </p>

  <button>Send</button>
  <button type="reset">Reset</button>
  <button disabled="disabled">Disabled</button>
</form>
```
