import { jost } from "../ui/fonts";

export default function Button({ text }: any) {
  return (
    <div>
      <button
        className={`${jost.className}  bg-main-yellow text-base
        rounded-xl flex justify-center items-center py-4 px-12 `}
      >
        {text}
      </button>
    </div>
  );
}
