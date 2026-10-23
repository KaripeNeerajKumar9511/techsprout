import Link from 'next/link';
import { ArrowUpRight, BrainCircuit, Users, GraduationCap, TrendingUp, FlaskConical } from 'lucide-react';
import type { services } from '@/content/source-services';
type Service=typeof services[number];
const icons=[BrainCircuit,Users,GraduationCap,TrendingUp,FlaskConical];
export default function ServiceCard({service,index=0}:{service:Service;index?:number}){const Icon=icons[index%icons.length];return <article className="service-card"><span className="service-icon"><Icon size={24}/></span><span className="card-index">0{index+1}</span><h3>{service.cardTitle}</h3><p>{service.cardDesc}</p><Link className="text-link" href={`/services/${service.slug}`}>Learn more <ArrowUpRight size={16}/></Link></article>}
