
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import MercenaryContainer from "@/ui/mercenaryPage/MercenaryContainer";

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <MercenaryContainer />
      </PageLayout.Contents>
    </>
  )
}
