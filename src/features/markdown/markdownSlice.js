import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: `# Markdown Previewer

  ## GitHub Flavor (markdown converted to html)
  ### Here are some examples
  
  Code goes between a pair of single backticks:
 \`<div></div>\`

  Multi-line code goes between a pair of three backticks:
  
  \`\`\`
  // This multi-line code example doubles as an explanation 
  // of current markdown settings. As you can see 
  // gfm (GitHub Flavor) and breaks (carriage returns as
  // <br>) are set to true:

  marked.setOptions({
    breaks: true,
    gfm: true
  });

  \`\`\`
  
 
  Bold text goes between a pair of double asterisks:
    **Bold Text Here**

  Italic text goes between a pair of underscores:
    _Bold Text Here_


  Cross out text goes between a pair of double tildes:
  ~~some crossed-out text here~~
  
  Here is a [link](https://www.linkedin.com/in/stephen-jurgensen)
  
  And here is a block quote:
  > It is my belief that nearly any invented quotation, played with confidence, stands a good chance to deceive.
  >   — Mark Twain
  
  Here is a table (The Johari Window):
  
   // | Self-Unknown | Self-Known
  ------------ | ------------- | -------------
  **Public-Unknown** | Unknown | Façade
  **Public-Known** | Blind-spot | Open
  
  - Here is a nested list (made with - and double spaces).
    - Item 
    - Item
       - Subitem
       - Subitem
          - Subsubitem
          - Subsubitem
  
  1. Here is a numbered list
  1. Made with '1.' at the beginning of each line
  1. Item number three
  
  This is an image freeCodeCamp's Logo: 
  ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
  `,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const markdownSlice = createSlice({
  name: 'markdown',
  initialState,
  reducers: {
    updateMarkdown: (state, action) => {
      state.value = action.payload;
    }
  },
});

export const { increment, decrement, incrementByAmount, updateMarkdown } = markdownSlice.actions;

export const selectCount = (state) => state.markdown.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

export default markdownSlice.reducer;
