import { requestor } from "./requestor";


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function main() {
  const posts = await requestor.get<Post>("https://jsonplaceholder.typicode.com/posts");
  console.log(posts);
}

main();