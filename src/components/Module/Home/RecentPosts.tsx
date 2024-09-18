import { getResentPost } from "@/src/services/getResentPost";

const RecentPosts = async () => {
  const { data: posts } = await getResentPost();
  console.log(posts);

  return (
    <>
      <div className="min-h-screen text-center">RecentPosts</div>
    </>
  );
};

export default RecentPosts;
