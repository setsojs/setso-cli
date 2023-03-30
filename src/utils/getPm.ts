import wichPMRuns from "which-pm-runs";

export function getPm() {
    let pm = "npm";
    if (wichPMRuns() !== undefined) {
        pm = String(wichPMRuns()?.name);
    }
    return pm;
}
