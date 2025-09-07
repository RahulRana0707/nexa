"use client";
import {
  useMutation,
  useQuery,
  Authenticated,
  Unauthenticated,
} from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { UserButton } from "@clerk/nextjs";

export default function Page() {
  const users = useQuery(api.users.getMany);
  const addUser = useMutation(api.users.add);
  return (
    <>
      <div>
        <Authenticated>
          <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
              <Button
                onClick={() => {
                  addUser({ name: "Rahul Rana Bhau" });
                }}
              >
                Add Rahul Bhau
              </Button>
              <UserButton />
              <h1 className="text-2xl font-bold">Hello World from App</h1>
              {JSON.stringify(users)}
            </div>
          </div>
        </Authenticated>
        <Unauthenticated>
          <div className="flex items-center justify-center min-h-svh">
            <div className="flex flex-col items-center justify-center gap-4">
              <h1 className="text-2xl font-bold">Please Sign In</h1>
            </div>
          </div>
        </Unauthenticated>
      </div>
    </>
  );
}
