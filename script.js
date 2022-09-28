const posts = [
  {
    id: 6,
    title: "Dave wasn't exactly sure how he had ended up",
    body: "Dave wasn't exactly sure how he had ended up in this predicament. He ran through all the events that had lead to this current situation and it still didn't make sense. He wanted to spend some time to try and make sense of it all, but he had higher priorities at the moment. The first was how to get out of his current situation of being naked in a tree with snow falling all around and no way for him to get down.",
    userId: 47,
    tags: ["english", "classic", "american"],
    reactions: 3,
  },
  {
    id: 7,
    title: "This is important to remember.",
    body: "This is important to remember. Love isn't like pie. You don't need to divide it among all your friends and loved ones. No matter how much love you give, you can always give more. It doesn't run out, so don't try to hold back giving it as if it may one day run out. Give it freely and as much as you want.",
    userId: 12,
    tags: ["magical", "crime"],
    reactions: 0,
  },
  {
    id: 8,
    title: "One can cook on and with an open fire.",
    body: "One can cook on and with an open fire. These are some of the ways to cook with fire outside. Cooking meat using a spit is a great way to evenly cook meat. In order to keep meat from burning, it's best to slowly rotate it.",
    userId: 31,
    tags: ["american", "english"],
    reactions: 9,
  },
  {
    id: 9,
    title: "There are different types of secrets.",
    body: "There are different types of secrets. She had held onto plenty of them during her life, but this one was different. She found herself holding onto the worst type. It was the type of secret that could gnaw away at your insides if you didn't tell someone about it, but it could end up getting you killed if you did.",
    userId: 42,
    tags: ["american", "history", "magical"],
    reactions: 2,
  },
  {
    id: 10,
    title: "They rushed out the door.",
    body: "They rushed out the door, grabbing anything and everything they could think of they might need. There was no time to double-check to make sure they weren't leaving something important behind. Everything was thrown into the car and they sped off. Thirty minutes later they were safe and that was when it dawned on them that they had forgotten the most important thing of all.",
    userId: 1,
    tags: ["fiction", "magical", "history"],
    reactions: 4,
  },
  {
    id: 11,
    title: "It wasn't quite yet time to panic.",
    body: "It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. The reality was that it was time to panic and there wasn't time to salvage the situation, but he continued to delude himself into believing there was.",
    userId: 25,
    tags: ["mystery", "american", "history"],
    reactions: 5,
  },
  {
    id: 12,
    title: "She was aware that things could go wrong.",
    body: "She was aware that things could go wrong. In fact, she had trained her entire life in anticipation that things would go wrong one day. She had quiet confidence as she started to see that this was the day that all her training would be worthwhile and useful. At this point, she had no idea just how wrong everything would go that day.",
    userId: 26,
    tags: ["love", "english"],
    reactions: 7,
  },
  {
    id: 13,
    title: "She wanted rainbow hair.",
    body: "She wanted rainbow hair. That's what she told the hairdresser. It should be deep rainbow colors, too. She wasn't interested in pastel rainbow hair. She wanted it deep and vibrant so there was no doubt that she had done this on purpose.",
    userId: 44,
    tags: ["mystery", "classic", "french"],
    reactions: 0,
  },
  {
    id: 14,
    title: "The paper was blank.",
    body: "The paper was blank. It shouldn't have been. There should have been writing on the paper, at least a paragraph if not more. The fact that the writing wasn't there was frustrating. Actually, it was even more than frustrating. It was downright distressing.",
    userId: 1,
    tags: ["mystery", "english", "love"],
    reactions: 0,
  },
  {
    id: 15,
    title: "The trees, therefore, must be such old",
    body: "The trees, therefore, must be such old and primitive techniques that they thought nothing of them, deeming them so inconsequential that even savages like us would know of them and not be suspicious. At that, they probably didn't have too much time after they detected us orbiting and intending to land. And if that were true, there could be only one place where their civilization was hidden.",
    userId: 15,
    tags: ["fiction", "history", "crime"],
    reactions: 1,
  },
];

// write a program that returns only the posts that have more than or equal to 5 reactions

// const returnReactions = (posts) => {
//   for (let post = 0; post < posts.length; post++) {
//     if (post.reactions >= 5) {
//       return post;
//     }
//   }
// };

// console.log(returnReactions(posts));

// ES5

// posts [  ]
/* 
const array = [1, 2, 3, 4, 5, 6];

console.log(array[5]);

array[5] = "another type";

console.log(array[5]); */

// let arr = []; // array

// for (let i = 0; i < posts.length; i++) {
//   // {id: 6,title: "Dave wasn't exactly sure how he had ended up", reactions: 5 },

//   if (posts[i].reactions >= 5) {
//     let arrLength = arr.length;
//     arr[arrLength] = posts[i];
//   }
// }

// console.log(arr);

/* let arr = posts.filter(function (elem) {
  // posts[i] { }
  if (elem.reactions >= 5) {
    return true;
  }
});

console.log(arr); */

// write a program that returns the posts that have a history tag

let historyPosts = posts.filter(function (elem) {
  // elem.tags => tags: ["fiction", "history", "crime"]
  if (elem.tags.includes("history")) {
    return true;
  }
});

console.log(historyPosts);
