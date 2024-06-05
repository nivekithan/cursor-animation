import type { MetaFunction } from "@remix-run/node";
import { useMemo } from "react";
import { Cursor } from "~/components/cursor";
import { ProxmityCursor } from "~/components/proxmityCursor";

export const meta: MetaFunction = () => {
  return [
    { title: "Cursor Animation" },
    { name: "description", content: "EPYC cursor animation" },
  ];
};

export default function Index() {
  const listOfNormalCursors = useMemo(() => {
    return Array(100)
      .fill(0)
      .map((_, i) => {
        return <Cursor key={i} />;
      });
  }, []);

  const listOfProxmityCursors = useMemo(() => {
    return Array(100)
      .fill(0)
      .map((_, i) => {
        return <ProxmityCursor key={i} />;
      });
  }, []);

  return (
    <div>
      <div className="h-[600px] flex items-center p-40 flex-wrap max-w-[1520px]">
        {listOfNormalCursors}
      </div>
      <div className="h-[600px] flex items-center p-40 flex-wrap max-w-[1520px]">
        {listOfProxmityCursors}
      </div>
    </div>
  );
}
