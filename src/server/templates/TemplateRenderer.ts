import Handlebars from "handlebars";
import fs from "fs/promises";
import path from "path";

interface TemplateData {
    fields: { label: string; value: string }[];
    subject?: string;
    [key: string]: unknown;
}

/**
 * Compiles and renders Handlebars email templates.
 *
 * - Injects compiled content templates into the shared base layout.
 * - Caches compiled templates in memory to avoid repeated filesystem reads.
 * - Private constructor enforces static-only usage (no instantiation needed).
 */
class TemplateRenderer {
    private static readonly TEMPLATE_DIR = path.join(process.cwd(), "src/server/templates");
    private static readonly cache = new Map<string, Handlebars.TemplateDelegate>();

    private constructor() {}

    private static async compile(name: string): Promise<Handlebars.TemplateDelegate> {
        const cached = TemplateRenderer.cache.get(name);
        if (cached) return cached;

        const filePath = path.join(TemplateRenderer.TEMPLATE_DIR, `${name}.hbs`);
        const source = await fs.readFile(filePath, "utf-8");
        const compiled = Handlebars.compile(source);

        TemplateRenderer.cache.set(name, compiled);
        return compiled;
    }

    static async render(templateName: string, data: TemplateData): Promise<string> {
        const [contentTemplate, baseTemplate] = await Promise.all([
            TemplateRenderer.compile(templateName),
            TemplateRenderer.compile("base"),
        ]);

        const content = contentTemplate(data);

        return baseTemplate({
            ...data,
            content,
            year: new Date().getFullYear(),
        });
    }
}

export default TemplateRenderer;
