export function addScript(json: string) {
    const parsed = JSON.parse(json);
    parsed["scripts"] = { dev: "setso && vite --port 3000" };
    return JSON.stringify(parsed, null, 2);
}
