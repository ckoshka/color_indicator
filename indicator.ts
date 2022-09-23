import { R, chroma } from "./deps.ts";

const calcLog = (base: number) => (x: number) =>
	Math.log(x) / Math.log(base);

export type IndicatorConfig = {
    colors: string[];
    range: readonly number[]
}

export const Indicator = (cfg: IndicatorConfig) => {
    const worst = Math.min(...cfg.range);
    const best = Math.max(...cfg.range);
    const scale = chroma.scale(cfg.colors);
    const log = calcLog(worst);
    const norm = (n: number) => log(best) / log(n);
    return R.pipe(norm, scale, c => c.hex())
}