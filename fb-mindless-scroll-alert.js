// ==UserScript==
// @name         Facebook Mindless Scroll Alert
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Alert user after mindless scrolling on Facebook
// @author       ChatGPT Bhaiya
// @match        https://www.facebook.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=facebook.com
// @updateURL    https://raw.githubusercontent.com/cypherab01/Tampermonkey-Scripts/refs/heads/main/fb-mindless-scroll-alert.js
// @downloadURL  https://raw.githubusercontent.com/cypherab01/Tampermonkey-Scripts/refs/heads/main/fb-mindless-scroll-alert.js
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  let scrollDistance = 0; // Total distance scrolled
  let alertThreshold = 5000; // Distance in pixels before showing an alert
  let lastScrollTop = 0; // Tracks the last scroll position

  // Motivational messages
  const messages = [
    "Hey! Are you scrolling mindlessly?",
    "Take a break! Your time is valuable.",
    "Scrolling won't solve anything—go do something productive!",
    "How about doing something creative instead?",
    "The best way to predict your future is to create it.",
    "Scrolling won't make you happier—find something meaningful.",
    "Success comes to those who take action. Not scroll.",
    "Your time is precious. Use it wisely!",
    "What you do today determines your tomorrow.",
    "Every moment wasted is a moment you'll never get back.",
    "Discipline equals freedom. Stop scrolling!",
    "Why not spend this time on your goals?",
    "Hustle in silence and let success make the noise.",
    "Facebook isn't where dreams come true. Go chase them!",
    "Imagine where you'd be if you invested this time wisely.",
    "Do something today that your future self will thank you for.",
    "Nothing changes unless you do. Stop scrolling!",
    "Your dreams won't chase themselves. Take action!",
    "Social media won't pay your bills. Work on your passion!",
    "The clock is ticking—make your time count.",
    "Every scroll is a decision. Choose wisely.",
    "How much further would you be without distractions?",
    "Small steps today lead to big results tomorrow.",
    "Remember, you're in control of your time.",
    "Scrolling isn't self-care. Real self-care builds you up.",
    "Don't let social media dictate your day—own it!",
  ];

  // Function to show an alert
  function showAlert() {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
    scrollDistance = 0; // Reset the scroll distance after the alert
  }

  // Monitor scroll events
  window.addEventListener("scroll", () => {
    let currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    let scrolled = Math.abs(currentScrollTop - lastScrollTop);
    scrollDistance += scrolled; // Accumulate the total distance scrolled
    lastScrollTop = currentScrollTop;

    // If the scroll distance exceeds the threshold, show an alert
    if (scrollDistance >= alertThreshold) {
      showAlert();
    }
  });
})();
