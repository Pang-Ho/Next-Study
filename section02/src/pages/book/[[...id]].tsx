import { useRouter } from "next/router";

export default function Book() {
  const router = useRouter();
  console.log(router.query);
  const { id } = router.query;

  return (
    <>
      <h1>Book {id}</h1>
    </>
  );
}
