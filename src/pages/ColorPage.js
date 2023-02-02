import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../store";

function ColorPage() {
  const dispatch = useDispatch();

  const color = useSelector((state) => state.color);

  const handleTextClick = (event) => {
    const classes = event.target.classList;
    dispatch(changeColor({ bgColor: classes[2], textColor: classes[3] }));
  };

  const combinations = [
    [
      {
        bgColor: "bg-slate-50",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-100",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-200",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-300",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-400",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-500",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-600",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-700",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-800",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
      {
        bgColor: "bg-slate-900",
        textLight: "text-slate-50",
        textDark: "text-slate-900",
      },
    ],
    [
      {
        bgColor: "bg-gray-50",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-100",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-200",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-300",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-400",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-500",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-600",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-700",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-800",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
      {
        bgColor: "bg-gray-900",
        textLight: "text-gray-50",
        textDark: "text-gray-900",
      },
    ],
    [
      {
        bgColor: "bg-zinc-50",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-100",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-200",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-300",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-400",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-500",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-600",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-700",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-800",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
      {
        bgColor: "bg-zinc-900",
        textLight: "text-zinc-50",
        textDark: "text-zinc-900",
      },
    ],
    [
      {
        bgColor: "bg-neutral-50",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-100",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-200",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-300",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-400",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-500",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-600",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-700",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-800",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
      {
        bgColor: "bg-neutral-900",
        textLight: "text-neutral-50",
        textDark: "text-neutral-900",
      },
    ],
    [
      {
        bgColor: "bg-stone-50",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-100",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-200",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-300",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-400",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-500",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-600",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-700",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-800",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
      {
        bgColor: "bg-stone-900",
        textLight: "text-stone-50",
        textDark: "text-stone-900",
      },
    ],
    [
      {
        bgColor: "bg-red-50",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-100",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-200",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-300",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-400",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-500",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-600",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-700",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-800",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
      {
        bgColor: "bg-red-900",
        textLight: "text-red-50",
        textDark: "text-red-900",
      },
    ],
    [
      {
        bgColor: "bg-orange-50",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-100",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-200",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-300",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-400",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-500",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-600",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-700",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-800",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
      {
        bgColor: "bg-orange-900",
        textLight: "text-orange-50",
        textDark: "text-orange-900",
      },
    ],
    [
      {
        bgColor: "bg-amber-50",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-100",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-200",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-300",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-400",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-500",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-600",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-700",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-800",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
      {
        bgColor: "bg-amber-900",
        textLight: "text-amber-50",
        textDark: "text-amber-900",
      },
    ],
    [
      {
        bgColor: "bg-yellow-50",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-100",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-200",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-300",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-400",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-500",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-600",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-700",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-800",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
      {
        bgColor: "bg-yellow-900",
        textLight: "text-yellow-50",
        textDark: "text-yellow-900",
      },
    ],
    [
      {
        bgColor: "bg-lime-50",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-100",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-200",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-300",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-400",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-500",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-600",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-700",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-800",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
      {
        bgColor: "bg-lime-900",
        textLight: "text-lime-50",
        textDark: "text-lime-900",
      },
    ],
    [
      {
        bgColor: "bg-green-50",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-100",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-200",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-300",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-400",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-500",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-600",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-700",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-800",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
      {
        bgColor: "bg-green-900",
        textLight: "text-green-50",
        textDark: "text-green-900",
      },
    ],
    [
      {
        bgColor: "bg-emerald-50",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-100",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-200",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-300",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-400",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-500",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-600",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-700",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-800",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
      {
        bgColor: "bg-emerald-900",
        textLight: "text-emerald-50",
        textDark: "text-emerald-900",
      },
    ],
    [
      {
        bgColor: "bg-teal-50",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-100",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-200",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-300",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-400",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-500",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-600",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-700",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-800",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
      {
        bgColor: "bg-teal-900",
        textLight: "text-teal-50",
        textDark: "text-teal-900",
      },
    ],
    [
      {
        bgColor: "bg-cyan-50",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-100",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-200",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-300",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-400",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-500",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-600",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-700",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-800",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
      {
        bgColor: "bg-cyan-900",
        textLight: "text-cyan-50",
        textDark: "text-cyan-900",
      },
    ],
    [
      {
        bgColor: "bg-sky-50",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-100",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-200",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-300",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-400",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-500",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-600",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-700",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-800",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
      {
        bgColor: "bg-sky-900",
        textLight: "text-sky-50",
        textDark: "text-sky-900",
      },
    ],
    [
      {
        bgColor: "bg-blue-50",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-100",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-200",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-300",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-400",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-500",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-600",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-700",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-800",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
      {
        bgColor: "bg-blue-900",
        textLight: "text-blue-50",
        textDark: "text-blue-900",
      },
    ],
    [
      {
        bgColor: "bg-indigo-50",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-100",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-200",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-300",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-400",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-500",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-600",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-700",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-800",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
      {
        bgColor: "bg-indigo-900",
        textLight: "text-indigo-50",
        textDark: "text-indigo-900",
      },
    ],
    [
      {
        bgColor: "bg-violet-50",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-100",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-200",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-300",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-400",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-500",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-600",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-700",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-800",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
      {
        bgColor: "bg-violet-900",
        textLight: "text-violet-50",
        textDark: "text-violet-900",
      },
    ],
    [
      {
        bgColor: "bg-purple-50",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-100",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-200",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-300",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-400",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-500",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-600",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-700",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-800",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
      {
        bgColor: "bg-purple-900",
        textLight: "text-purple-50",
        textDark: "text-purple-900",
      },
    ],
    [
      {
        bgColor: "bg-fuchsia-50",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-100",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-200",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-300",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-400",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-500",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-600",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-700",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-800",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
      {
        bgColor: "bg-fuchsia-900",
        textLight: "text-fuchsia-50",
        textDark: "text-fuchsia-900",
      },
    ],
    [
      {
        bgColor: "bg-pink-50",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-100",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-200",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-300",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-400",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-500",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-600",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-700",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-800",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
      {
        bgColor: "bg-pink-900",
        textLight: "text-pink-50",
        textDark: "text-pink-900",
      },
    ],
    [
      {
        bgColor: "bg-rose-50",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-100",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-200",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-300",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-400",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-500",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-600",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-700",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-800",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
      {
        bgColor: "bg-rose-900",
        textLight: "text-rose-50",
        textDark: "text-rose-900",
      },
    ],
  ];
  return (
    <div className="flex flex-col p-10 bg-white justify-center items-center shadow-inner">
      {combinations.map((combination, index) => {
        return (
          <div
            className="flex flex-row justify-around items-center"
            key={index}
          >
            {combination.map((item) => {
              return (
                <div
                  className="flex flex-row justify-center items-center w-fit h-fit"
                  key={`${item.bgColor}`}
                >
                  <div
                    className={`w-12 h-12 ${item.bgColor} ${
                      item.textLight
                    } mr-2 flex flex-row justify-center items-center font-bold text-2xl mb-2 cursor-pointer ${
                      color.bgColor === item.bgColor &&
                      color.textColor === item.textLight
                        ? "border-2 border-black"
                        : ""
                    }`}
                    onClick={handleTextClick}
                  >
                    T
                  </div>
                  <div
                    className={`w-12 h-12 ${item.bgColor} ${
                      item.textDark
                    } mr-2 flex flex-row justify-center items-center font-bold text-2xl mb-2 cursor-pointer ${
                      color.bgColor === item.bgColor &&
                      color.textColor === item.textDark
                        ? "border-2 border-black"
                        : ""
                    }`}
                    onClick={handleTextClick}
                  >
                    T
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default ColorPage;
