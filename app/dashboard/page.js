"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Dashboard() {
  const { user, error, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!user && !isLoading) {
      router.push("/login");
    }
  }, [user, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (!user) return <div>Redirecting...</div>;

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard, {user.name}!</p>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
}
