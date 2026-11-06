import type { Route } from "./+types/home";
import { Landing } from "../landing/Landing";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Austin Lothenbach - Senior Support Engineer" },
    { name: "description", content: "Welcome to my web page!" },
  ];
}

export default function Home() {
  return <Landing />;
}
