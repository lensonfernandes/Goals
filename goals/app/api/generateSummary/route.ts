import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  console.log("Line 7", todos);

  //talk AI

  console.log("==========================================================");

  // const generateMeta = async (title) => {
  //   const description = await openai.createChatCompletion({
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       {
  //         role: "user",
  //         content: `Come up with a description of ${title}`,
  //       },
  //     ],
  //     max_tokens: 100,
  //   });
  //    console.log("HERE" , description.data.choices)
  // };

  // generateMeta("test");

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo-0613",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content: `When responding welcome the user as Explorer Kid and say welcome to GOALS  Limit the response to 200 characters`,
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos Count how many todos are in each category such as To do in progress and done, then tell the user to have a fruitful day  the dat:

     `,
      },
    ],
  });

 

  const { data } = response;

  console.log("DATA IS: ", data);
  //console.log(data.choices[0].message);

  //return NextResponse.json(data.choices[0].message);
  return NextResponse.json({
    message: "success",
  })
}

// ${JSON.stringify(
//   todos
// )}
