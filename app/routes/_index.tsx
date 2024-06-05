import type { MetaFunction } from "@remix-run/node";
import { useMemo } from "react";
import { Cursor } from "~/components/cursor";

export const meta: MetaFunction = () => {
  return [
    { title: "Cursor Animation" },
    { name: "description", content: "EPYC cursor animation" },
  ];
};

export default function Index() {
  const listOfCursors = useMemo(() => {
    return Array(100)
      .fill(0)
      .map((_, i) => {
        return <Cursor key={i} />;
      });
  }, []);

  return (
    <div className="h-screen flex items-center p-40 flex-wrap max-w-[1520px]">
      {listOfCursors}
    </div>
  );
}
