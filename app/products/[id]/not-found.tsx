import Link from "next/link";

const UserNotFoundPage = () => {
  return (
    <div>
      <h2>User Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/products">Return to product</Link>
    </div>
  );
};

export default UserNotFoundPage;
