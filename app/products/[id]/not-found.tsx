import Link from "next/link";

const UserNotFoundPage = () => {
  return (
    <div>
      <h2>User Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/users">Return to Contact</Link>
    </div>
  );
};

export default UserNotFoundPage;
