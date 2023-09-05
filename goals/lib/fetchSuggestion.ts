import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodosForAI(board);

 // console.log("todos line 6" , todos)

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });

 // console.log("res line16", res)
  // const GPTdata = await res.json();
  // const { content } = GPTdata;

  return  {};
};

export default fetchSuggestion;
