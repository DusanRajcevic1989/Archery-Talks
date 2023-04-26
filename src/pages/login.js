import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.email}</p>
        <Image
          src={session.user.image}
          width={50}
          height={50}
          alt=""
          style={{ borderRadius: "50px" }}
        />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
}
