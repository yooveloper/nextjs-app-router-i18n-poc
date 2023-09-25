
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import PlayfolioContainer from "@/ui/playfolioPage/PlayfolioContainer";

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <PlayfolioContainer />
      </PageLayout.Contents>
    </>
  )
}
