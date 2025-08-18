## 🚧 Under Construction Page
This is an aesthetic "Under Construction" page designed to inform visitors that a website is currently being developed. It features a prominent "Under Construction" message, a dynamic GIF, and a live countdown timer to build anticipation for the site's launch.

![Screen recording](assets/desktop.gif)

## [Live Demo](https://this-site-is-now-under-construction.netlify.app)

## Features
Clear Messaging: "Under Construction" banner with a friendly message.

Engaging GIF: A visual element to keep visitors engaged.

Live Countdown: A real-time countdown timer showing days, hours, minutes, and seconds until a specified launch date (defaulted to 7 days from page load).

Responsive Design: Optimized for various screen sizes using Tailwind CSS.

Aesthetic Styling: Dark theme with subtle gradients, rounded corners, and modern typography.



### Technologies Used
HTML5: For the page structure.

CSS3: For styling, including custom properties and animations.

Tailwind CSS: A utility-first CSS framework for rapid styling.

JavaScript (ES6+): For the countdown logic and dynamic content updates.

Google Fonts: For custom typography (Inter font).



### Setup and Usage
To run this project locally, follow these simple steps:

1. Clone or Download:

If you're familiar with Git, clone this repository:
```
git clone https://github.com/Angkon-Kar/Under-Construction-Page
```

Otherwise, download the project files as a ZIP and extract them.

2. Open in Browser: Simply open the index.html file in your preferred web browser.



### Example command (if you have a local web server, otherwise just open the file)
open index.html

Customizing the Countdown
The countdown date is set in script.js. To change the launch date:

Open script.js.

Locate the line:
```
countdownDate.setDate(countdownDate.getDate() + 7); // Set to 7 days from now
```

You can modify this line to set a specific date or a different duration. For example:

To set a specific date ```(e.g., December 31, 2025, 10:00:00 AM):```


```const countdownDate = new Date("Dec 31, 2025 10:00:00").getTime();```

To set it for 30 days from now:
```
countdownDate.setDate(countdownDate.getDate() + 30);
```
