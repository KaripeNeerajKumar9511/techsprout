import type {MetadataRoute} from 'next';
import {site} from '@/content/source-site';
import {products} from '@/content/source-products';
import {services} from '@/content/source-services';
import {posts} from '@/content/source-blog';
export default function sitemap():MetadataRoute.Sitemap{const now=new Date();const staticRoutes=['','/about-us','/services','/products','/careers','/blogs','/contact-us'].map(path=>({url:`${site.url}${path}`,lastModified:now,changeFrequency:(path===''?'weekly':'monthly') as 'weekly'|'monthly',priority:path===''?1:.7}));return [...staticRoutes,...services.map(s=>({url:`${site.url}/services/${s.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.65})),...products.map(p=>({url:`${site.url}/products/${p.slug}`,lastModified:now,changeFrequency:'monthly' as const,priority:.7})),...posts.map(p=>({url:`${site.url}/blogs/${p.slug}`,lastModified:now,changeFrequency:'yearly' as const,priority:.55}))]}
