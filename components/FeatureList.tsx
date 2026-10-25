type Item = readonly [string, string];

/** Shared titled feature / service list (long-form pages). */
export function FeatureList({ items }: { items: readonly Item[] }) {
  return (
    <ul className="mt-5 list-none space-y-5 border-t border-[#1c1e21]/10 pl-0 pt-5">
      {items.map(([title, text]) => (
        <li key={title} className="text-left">
          <p className="font-display text-[1.02rem] font-medium tracking-tight text-[#1c1e21] sm:text-[1.08rem]">
            {title}
          </p>
          <p className="mt-1.5 text-[0.92rem] leading-[1.55] text-[#555] sm:text-[0.98rem] sm:leading-[1.6]">
            {text}
          </p>
        </li>
      ))}
    </ul>
  );
}
