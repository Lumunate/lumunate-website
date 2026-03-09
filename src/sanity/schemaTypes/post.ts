import { defineField, defineType } from 'sanity'

export const post = defineType({
    name: 'post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Post Title',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category (Tag)',
            type: 'string',
            options: {
                list: [
                    { title: 'AI/ML', value: 'ai-ml' },
                    { title: 'Web Development', value: 'web-dev' },
                    { title: 'Design', value: 'design' },
                    { title: 'Innovation', value: 'innovation' },
                    // Add any other tags you have in your CATEGORIES data here
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'mainImage',
            type: 'image',
            title: 'Main Image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
            title: 'Published at',
            initialValue: () => new Date().toISOString(),
        }),
        defineField({
            name: 'body',
            type: 'array',
            title: 'Body',
            of: [{ type: 'block' }],
        }),
    ],
})