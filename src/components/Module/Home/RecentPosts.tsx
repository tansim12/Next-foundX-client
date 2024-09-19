import { getResentPost } from "@/src/services/getResentPost";
import { IPost } from "@/src/types";
import Card from "../../ui/Card";

const RecentPosts = async () => {
  const { data: posts } = await getResentPost();
console.log(posts?.length);

  return (
    <>
      <div className="my-20 text-center">RecentPosts</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {posts?.map((post: IPost) => <Card key={post?._id} post={post} />)}
      </div>
    </>
  );
};

export default RecentPosts;
