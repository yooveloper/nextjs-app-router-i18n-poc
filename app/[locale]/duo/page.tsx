
import Header from "@/components/Header";
import PageLayout from "@/components/PageLayout";
import DuoContainer from "@/ui/duoPage/DuoContainer";

export default function Page() {
  return (
    <>
      <PageLayout.TopFixed>
        <Header />
      </PageLayout.TopFixed>
      <PageLayout.Contents>
        <DuoContainer />
      </PageLayout.Contents>
    </>
  )
}
