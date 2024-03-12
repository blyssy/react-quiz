const data = [
  {
    question: "What does CSS stand for?",
    incorrectAnswers: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question:
      "Where in an HTML document is the correct place to refer to an external style sheet?",
    incorrectAnswers: [
      "You can't refer to an external style sheet",
      "In the <body> section",
      "At the end of the document",
    ],
    correctAnswer: "In the <head> section",
  },
  {
    question: "Which HTML tag is used to define an internal style sheet?",
    incorrectAnswers: ["<headStyle>", "<script>", "<css>"],
    correctAnswer: "<style>",
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    incorrectAnswers: ["font", "class", "styles"],
    correctAnswer: "style",
  },
  {
    question: "Which is the correct CSS syntax?",
    incorrectAnswers: [
      "{body;color:black;}",
      "body:color=black;",
      "{body:color=black;}",
    ],
    correctAnswer: "body {color: black;}",
  },
  {
    question: "How do you insert a comment in a CSS file?",
    incorrectAnswers: [
      "// this is a comment",
      "<-- comment -->",
      "'this is a comment",
    ],
    correctAnswer: "/* this is a comment */",
  },
  {
    question: "Which property is used to change the background color?",
    incorrectAnswers: ["bgcolor", "color", "background"],
    correctAnswer: "background-color",
  },
  {
    question: "How do you display hyperlinks without an underline?",
    incorrectAnswers: [
      "a {text-decoration:now;}",
      "a {decoration:no-underline;}",
      "a {underline:none;}",
    ],
    correctAnswer: "a {text-decoration:none;}",
  },
  {
    question: "Which property is used to change the font of an element?",
    incorrectAnswers: ["font-group", "font-style", "font-weight"],
    correctAnswer: "font-family",
  },
  {
    question:
      "How do you make each word in a text start with a capital letter?",
    incorrectAnswers: [
      "text-transform:camelcase",
      "text-style:capitalize",
      "transform:capitalize",
    ],
    correctAnswer: "text-transform:capitalize",
  },
];

export default data;
