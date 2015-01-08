##Readtime for jQuery
>A jQuery plugin that displays the estimated time to finish reading a particular article

Based off of [a pen I wrote](http://codepen.io/hi_mynameisdave/pen/QwGbzo). Despite the fact that I rarely use jQuery and almost never use plugins for it, I still thought this would be a fitting use of that script.

####Usage
Usage is dead simple. Just grab the element(s) you want to be injected with the number of minutes remaining and call `readTime()` on it:

```javascript
$("#your-element-selector").readTime();
```

`.readTime()` accepts no paramaters. Don't feed it any.

####Assumptions
jQuery Readtime assumes that your document is going to be broken up into nice little paragraphs using `<p>` tags (as it should be if you're writing semantic markup). If it isn't the plugin will not function. Currently working on a fallback for this so that at least something will be displayed.

---

#####Under The Hood
So what is this plugin actually doing? It's simple:

1. It scans the page for `<p>` tags.
2. On page scroll, it checks what `<p>` tags haven't been scrolled past.
3. Calculates how many words are in the remaining paragraphs.
4. Based on the remaining words, it outputs how long it will take to finish reading the article.

---

*Written by [Dave Lunny](himynameisdave.github.io) in the beautiful year of 2015.*
