This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and the [`live app`](https://ao3-muter.netlify.app/) can be found here, deployed by [Netlify](https://app.netlify.com/).

## Part 1. The Problem

While [Archive of our Own](http://archiveofourown.org/) (dubbed 'ao3' going forward from here) has a wide array of tags for fics that you can exclude from your search results, there was no way to permanently exclude a tag from search results without manually filtering it out from every single search the user performed.

`What we had`:
```
-> user performs a search
-> from the search results, user selects tags to exclude
-> user may want to exclude several tags, which must be done individually
-> the above steps must be repeated for every search
```

`What we want`:
```
-> user mutes a tag from their profile/settings
-> user performs a search
-> search results already have works with the muted tag removed
-> the tag is muted once and does not need to be repeated for several individual searches
```
## Part 2. Our Tools

- ao3 has custom sitewide CSS functionality, where users can create their own CSS to adjust the site's aesthetic

- ao3 has previously given users a [CSS snippet](https://archiveofourown.org/admin_posts/22650#other_options) to mute users/works—this works, but I felt that the process was still rather menial and wanted to automate it slightly more, especially for those less adept at understanding CSS/the DOM. However, this does not work for muting tags.

- ao3 gives each work a class/id pertaining to that specific work or user, which makes it possible to target those classes/ids in CSS and set their displays to `none`

- the question: `is it possible to target a work based on the tags WITHIN the work's element?`

## Part 3. The Solution
TL;DR: `yes`.

Using the `:has()` pseudo-selector in CSS, the browser can check if the `<div>` for a work has the tag you are targetting as a child element within it. Tags are not identified with a class or id, but they can be identified by their `[href=^"<insert tag here>"]` value.

This app allows a user to input a tag's URL, and output formatted CSS which targets the href of the given tag, stripped from the URL. While users could manually insert the href into `.work.blurb.group:has(a[href=^"<tag here>"])`, I felt that it would be a much faster process to provide links and generate a code rather than having to select the href and insert it into a copy of the CSS selector every time.

## Part 4. Future Development
Unfortunately, the `:has()` pseudo-selector is currently (as of March 2, 2023) incompatible with Firefox, and older versions of some browsers. Please check [MDN's article on `:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) for more details on browser compatibility.

I am currently working to see if there is a workaround for the browser compatibility issue, and if users for Firefox/other incompatible browsers can have a way to mute tags as well.

Additionally, I'm hoping to combine the features to mute tags and mute fics so that users can input URLS into one generator and have it recognize the URL path type to output the formatted CSS for the recognized URL type.