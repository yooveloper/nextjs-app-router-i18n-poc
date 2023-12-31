import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import HomeContainer from "@/ui/homePage/HomeContainer";

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <HomeContainer />
      </PageLayout.Contents>
    </>
  )
}
