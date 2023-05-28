const quotes = [

  {quote: "Bond. James Bond.", author: "James Bond series"},

  {quote: "My name is Bourne. Jason Bourne.", author: "Bourne series"},
  
  {quote: "Shaken, not stirred.", author: "James Bond series"},
  
  {quote: "If there's a mission, there's a man.", author: "Mission: Impossible series"},
  
  {quote: "We all dream of a happy ending, but that's not how it works.", author: "Spider-Man: Homecoming"},
  
  {quote: "Today, we make history.", author: "Captain America: The Winter Soldier"},
  
  {quote: "A winner never betrays. Only you do.", author: "The Spy Who Dumped Me"},
  
  {quote: "I'm just doing my best. Whether your queen wants it or not.", author: "Kingsman: The Secret Service"},
  
  {quote: "Your greatest enemy is yourself.", author: "Red Sparrow"},
  
  {quote: "To know everything is not to win but to be defeated.", author: "Tenet, Operation Surname: Lift"}
];

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const todayQoute = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQoute.quote;
author.innerText = todayQoute.author;
