export interface Testimonial {
  quote: string
  name: string
  role: string
  stars: number
  image: string
}

export interface ProcessStep {
  num: string
  title: string
  desc: string
}

export interface FAQ {
  q: string
  a: string
}

export interface FeatureCard {
  icon: string
  title: string
  desc: string
}

export interface ServiceCard {
  num: string
  icon: string
  title: string
  desc: string
}

export interface ProjectCard {
  img: string
  title: string
  categories: string[]
}

export interface WhyChooseUsItem {
  icon: string
  title: string
  desc: string
}

export interface TeamMember {
  name: string
  role: string
  img: string
}

export interface Award {
  year: string
  img: string
  title: string
  desc: string
}

export interface BlogPost {
  img: string
  date: string
  title: string
}

export interface MarqueeItem {
  text: string
  star: string
}

export interface FormData {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

export interface ContactFormData {
  name: string
  email: string
  company: string
  budget: string
  message: string
}
