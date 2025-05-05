"use client";
import useSticky from "@/hooks/use-sticky";

type IProps = {
  children: React.ReactNode;
  top_cls?: string;
};
export default function StickyWrapper({children,top_cls="tg-header__area transparent-header"}: IProps) {
  const { sticky, isStickyVisible } = useSticky();
  return (
    <div
      id="sticky-header"
      className={`${top_cls} ${sticky ? "tg-sticky-menu" : ""} ${isStickyVisible ? "sticky-menu__show" : ""}`}
    >
      {children}
    </div>
  );
}
