---
date: 2017-06-03
title: "Frontend Performance Check-list For Production"
category: "web,frontend"
published: true
---

![](https://cdn-images-1.medium.com/max/2000/1*wUvfjzzeWo-ppk9h7p9fXQ.png)

front End Performance Check-list For Production

Inweb development and exactly front-end web, we spend more time searching for the best design and content to our pages, it’s good but we miss to optimize our web pages.

In this article I will share with you my chick-list that I use to optimize my web pages after development. So feel free to leave a comment if you think I miss something.

This checklist contains optimization for SEO and also pages load time and some best practices.

> let’s start !!!!

- **Don’t miss favicon**: Favicons are like your site’s little ID. Whether you have a favicon.ico file or not in your website’s root folder, the browsers will request it. And if you do not have the file, the response will be a 404 Not Found. So be careful and don’t give a negative impression at the first interaction with the browser. To solve all problems you can generate favicon and manifest file for your website with [this online tool](http://realfavicongenerator.net/).
- **Use social media meta tags**: Meta tags are so important for social media and google ranking. you can generate all your social meta tags (Facebook, twitter, google …) with this [online meta tags generator](https://megatags.co/).
- **Compress your Images**: loading images can increase your page loading time to 70%. So use SVG image if you can. and optimize it after production. you can try this [online image compressor](http://compresspng.com/).
- **CSS Optimization** :

**_autoprefixer for cross-platform CSS_**: we all write CSS rules for our favorite browser, for me, I use Chrome in development. but you need to prefix all these rules to support all kind of browser. Autoprefixer will use the data based on current browser popularity and property support to apply prefixes for you. you can use it with command line.

npm install -g postcss-cli autoprefixer
postcss \*.css use autoprefixer -d build

Or with webpack configuration or with this [online tool](https://autoprefixer.github.io/).

**_Purifycss_**: an amazing tool that can help you to delete all unused CSS code in your project. purifycss takes content (HTML/JS/PHP/etc) and CSS, and returns only the used CSS, and it’s very useful if your application is using a CSS framework like Bootstrap.

To install purify-css:

npm install -g purify-css

How to use it:

purifycss src/css/main.css src/css/bootstrap.css src/js/main.js — min — info — out src/dist/index.css

Get More infos from [purify-css github page](https://github.com/purifycss/purifycss).

**_minify CSS_** : minify your CSS files you can minify with purifycss or minify all assets [online](http://csscompressor.com/)[.](http://csscompressor.com/)

- **Check performance with PageSpeed Insights**: PageSpeed Insights measures the performance of your page for mobile and desktop devices. It fetches the url twice, once with a mobile user-agent, and once with a desktop user-agent. PageSpeed Insights checks to see if a page has applied common performance best practices and provides a score, which ranges from 0 to 100 points.And give you some pieces of advice to increase your score.
- **GZIP compression**: Enabling compression is one of the fastest ways to improve your site’s performance. Go forth, set it up GZIP in your server, and let your users enjoy the benefits. this is a look of how much bandwidth I save in my own website.

![](https://cdn-images-1.medium.com/max/800/0*Eau58XENFKoZ1F8a.)

checkgzipcompression.com

You can check your Gzip compression too, [here](https://checkgzipcompression.com/)[.](https://checkgzipcompression.com./)

- **USE CDN** : from Webopaedia, “A content delivery network (CDN) is a system of distributed servers (network) that deliver web pages and other Web content to users based on the geographic locations of them, the origin of the web page and a content delivery server.” to be simple, it’s a kind of caching system in servers around the world , you can try free [CloudFlare](https://www.cloudflare.com/)plan for you website here.
- **Track frontFnd errors with Sentry**: [Sentry](https://sentry.io/) is an awesome tool for frontend developer. It automatically reports uncaught JavaScript exceptions triggered from a browser environment and provides a rich API for reporting your own errors. you can see all the errors stack in real-time. Get notified via Email, SMS or Slack. Sentry can prompt users feedback when frontend errors happen.
- **USE Google Tag Manager**: In short, [Google Tag Manager](https://www.google.com/analytics/tag-manager/) is a complete solution for analytics with the new version Google Universal Analytics.in another hand, Google Tag Manager can manage all your javascript snippets that send information to third-parties in your web pages like facebook and twitter widgets. it helps you to save loading time and manage all javascript snippets in one place.

Thanks for reading! feel free to leave a comment if you think I miss something.

If you think other people should read this, press the 💚 button, tweet and share the post. Remember to follow me on Medium so you can get notified about my future posts.
