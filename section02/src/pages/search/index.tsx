import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { ReactNode } from "react";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const books = await fetchBooks(context.query.q as string);

  return {
    props: {
      books,
    },
  };
};
export default function Search({
  books,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <div>
        {books.map((book) => (
          <BookItem key={book.id} {...book} />
        ))}
      </div>
    </>
  );
}

Search.getLayout = function getLayout(page: ReactNode) {
  return <SearchableLayout>{page}</SearchableLayout>;
};
