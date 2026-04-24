export default async () => ({
    profile,
    template: await fetch(new URL("./index.html", import.meta.url)).then((r) =>
        r.text(),
    ),
});
