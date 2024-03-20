import { z, defineCollection, reference } from 'astro:content'

const skillCategory = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
  }),
})

const skill = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    icon: z.string().optional(),
    color: z.string().optional(),
    colorText: z.string().optional(),
    level: z.number().min(0).max(100).optional(),
    // category: reference('skillCategory'),
  }),
})

const client = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    logo: z.string().optional(),
    description: z.string().optional(),
    website: z.string().optional(),
  }),
})

const work = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      product: z.string().optional(),
      date: z.date().optional(),
      description: z.string().optional(),
      thumbnail: image().optional(),
      images: z.array(z.string()).optional(),
      videos: z.array(z.string()).optional(),
      website: z.string().optional(),
      skills: z.array(reference('skill')).optional(),
      //   url: z.string().optional(),
      github: z.string().optional(),
      status: z.enum(['active', 'inactive']).optional(),
      client: reference('client').optional(),
      users: z.string().optional(),
    }),
})

export const collections = {
  client,
  skillCategory,
  skill,
  work,
}
