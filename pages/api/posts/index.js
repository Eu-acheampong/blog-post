import dbConnect from "../../../libs/dbConnect";
import Post from "../../../models/post.model";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const posts = await Post.find();
    res.status(200).json({ posts });

    // res.status(200).json({ msg: "GET" });
  } else if (req.method === "POST") {
    console.log(req.bod);
    const post = await Post.create(req.body);
    res.status(201).json({ post });
    // res.status(201).json({ msg: "POST" });
  } else {
    res
      .status(405)
      .json({ error: "METHOD not allowed only GET and POST is allowed" });
  }
}
// console.log(req.method);
