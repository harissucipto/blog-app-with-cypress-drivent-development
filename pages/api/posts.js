import db from "../../db/mongoose";

const posts = async (req, res) => {
  if (req.method === "GET") {
    let posts;
    try {
      posts = await (await db()).models.Post.find({});
      res
        .status(200)
        .json({ posts: posts.map((post) => post.toObject({ getters: true })) });
    } catch (error) {
      console.log(error, "what is errror");
      res.status(500).send("error retrieving blog posts");
    }
  }
};

export default posts;
