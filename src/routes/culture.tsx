import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/culture")({
  beforeLoad: () => {
    throw redirect({ to: "/traditions" });
  },
});
