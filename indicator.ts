import { chroma, R } from "./deps.ts";

const calcLog = (base: number) => (x: number) => Math.log(x) / Math.log(base);

export type IndicatorConfig = {
	colors: string[];
	range: readonly number[];
};

export const Indicator = (cfg: IndicatorConfig) => {
	const worst = Math.min(...cfg.range);
	const best = Math.max(...cfg.range);
    const diff = best - worst;

	const scale = chroma.scale(cfg.colors);
	const log = calcLog(best);
	const norm = (n: number) => log(best - n) / log(diff)
	return R.pipe(norm, n => 1 - n, scale, (c) => c.hex());
};
