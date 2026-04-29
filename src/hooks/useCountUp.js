import { useEffect, useState } from "https://esm.sh/react@18";

export function useCountUp(ref, targets) {
  const [counts, setCounts] = useState(targets.map(() => 0));
  const serializedTargets = JSON.stringify(targets);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return undefined;
    }

    let started = false;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || started) {
            return;
          }

          started = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (timestamp) => {
            const progress = Math.min((timestamp - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);

            setCounts(targets.map((target) => Math.round(target * eased)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(targets);
            }
          };

          requestAnimationFrame(animate);
          observer.disconnect();
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [ref, serializedTargets]);

  return counts;
}
