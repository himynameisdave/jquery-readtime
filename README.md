##Readtime for jQuery
>A jQuery plugin that displays the estimated time to finish reading a particular article

![gif showing usage of jquery-readtime](http://i.imgur.com/QF346Ro.gif)

Based off of [a pen that I wrote](http://codepen.io/hi_mynameisdave/pen/QwGbzo). Despite the fact that [I rarely use jQuery](http://youmightnotneedjquery.com/) and almost never use plugins for it, I still thought this would be a fitting use of that script.

---

####Installation
To get it, you can clone this repo, just download the [plugin file](https://raw.githubusercontent.com/himynameisdave/jquery-readtime/master/jquery.readtime.min.js), or you could install it [using Bower](http://bower.io/#install-packages) like a normal person:

```bash
bower install jquery-readtime
```

By default, it's gonna throw that in your `.bower_components/` directory. It can be referenced as follows (be sure to [include jQuery](https://code.jquery.com/) before it though):

```html
<script type="text/javascript" src="bower_components/jquery-readtime/jquery.readtime.min.js"></script>
```

You will likely want to move it or just alter your `.bowerrc` file to change the location where Bower installs stuff so that you don't have to type out that big long path.

####Usage
Usage is dead simple. Just grab the element(s) you want to be injected with the number of minutes remaining and call `readTime()` on it:

```javascript
$("#your-element-selector").readTime();
```

####Assumptions
jQuery Readtime assumes that your document is going to be broken up into nice little paragraphs using `<p>` tags (as it should be if you're writing semantic markup). If it isn't the plugin will not function. Currently working on a fallback for this so that at least something will be displayed.

`.readTime()` accepts no paramaters. Don't feed it any.

It also only provides you with & updates the number of minutes. It **does not** provide any UI or even the word "mins" - that's all on you as the developer. It is done this way so that it can be as lightweight as possible & so that it can be injected into anyone's UI.

---

#####Under The Hood
So what is this plugin actually doing? It's simple:

1. It scans the page for `<p>` tags.
2. On page scroll, it checks what `<p>` tags haven't been scrolled past.
3. Calculates how many words are in the remaining paragraphs.
4. Based on the remaining words, it outputs how long it will take to finish reading the article.

---

*Written by [Dave Lunny](himynameisdave.github.io) in the beautiful year of 2015.*
