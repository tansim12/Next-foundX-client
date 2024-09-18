import LandingPage from "@/src/components/Module/Home/LandingPage";
import RecentPosts from "@/src/components/Module/Home/RecentPosts";
import Container from "@/src/components/ui/Conteinar";
import LoadingSpiner from "@/src/components/ui/LoadingSpiner";
import { Suspense } from "react";

const withCommonLayoutPage = () => {
  return (
    <div>
      <LandingPage />
      <Container>
        <Suspense fallback={<LoadingSpiner />}>
          <RecentPosts />
        </Suspense>
      </Container>
    </div>
  );
};

export default withCommonLayoutPage;
