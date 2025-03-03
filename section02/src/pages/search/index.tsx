import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Search() {
  const router = useRouter();

  const { q } = router.query;

  return (
    <>
      {q}
      {/* <div>
        <input type="text" placeholder="검색어를 입력하세요" />
        <button>검색</button>
      </div> */}
    </>
  );
}

Search.getLayout = function getLayout(page: ReactNode) {
  return <SearchableLayout>{page}</SearchableLayout>;
};
