import clsx from "clsx";

type Props = {
  title: string;
  state: string;
};
export function BlogPost({ title, state }: Props) {
  return (
    <div
      className={clsx(
        "shadow-lg rounded p-4 m-4 bg-slate-200 dark:bg-purple-400",
        state == "hot-pink" ? "bg-pink-500" : ""
      )}
      key={`Card-${title}`}
    >
      <p className={state == "hot-pink" ? "text-yellow-400" : ""}>{title}</p>
    </div>
  );
}
