const initialState = {
  jokes: [
    {
      "id": 67,
      "type": "general",
      "setup": "Did You Watch The New Comic Book Movie?",
      "punchline": "It was very graphic!"
    },
    {
      "id": 306,
      "type": "general",
      "setup": "Where does Napoleon keep his armies?",
      "punchline": "In his sleevies."
    },
    {
      "id": 146,
      "type": "general",
      "setup": "How many tickles does it take to tickle an octopus?",
      "punchline": "Ten-tickles!"
    },
    {
      "id": 297,
      "type": "general",
      "setup": "Where did you learn to make ice cream?",
      "punchline": "Sunday school."
    },
    {
      "id": 367,
      "type": "general",
      "setup": "Why do trees seem suspicious on sunny days?",
      "punchline": "Dunno, they're just a bit shady."
    },
    {
      "id": 250,
      "type": "general",
      "setup": "What happens to a frog's car when it breaks down?",
      "punchline": "It gets toad."
    },
    {
      "id": 291,
      "type": "general",
      "setup": "What’s Forest Gump’s Facebook password?",
      "punchline": "1forest1"
    },
    {
      "id": 123,
      "type": "general",
      "setup": "How do you find Will Smith in the snow?",
      "punchline": " Look for fresh prints."
    },
    {
      "id": 262,
      "type": "general",
      "setup": "What is the tallest building in the world?",
      "punchline": "The library, it’s got the most stories!"
    },
    {
      "id": 313,
      "type": "general",
      "setup": "Why are fish so smart?",
      "punchline": "Because they live in schools!"
    }
  ],
  isLoading: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};