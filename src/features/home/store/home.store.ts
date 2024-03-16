import { create } from 'zustand'
import {
  GlobeAltIcon,
  GlobeAmericasIcon,
  PuzzlePieceIcon,
  WrenchIcon
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Explore Our Services Further',
    description:
      'Browse our range of services to see how we can meet your specific needs.',
    icon: WrenchIcon
  },
  {
    name: 'Dive Deeper into Our Solutions',
    description:
      'Explore detailed information about our solutions and how they can benefit you.',
    icon: GlobeAltIcon
  },
  {
    name: 'Learn More About Our Company',
    description: 'Get to know our company story, values, and mission.',
    icon: PuzzlePieceIcon
  },
  {
    name: 'Discover Our Products and Offerings',
    description:
      'Check out our diverse product lineup and find the perfect fit for your requirements.',
    icon: GlobeAmericasIcon
  }
]

const stats = [
  { name: '+91-9625265924', value: 'Phone' },
  { name: 'info@baha.co.in', value: 'Email' },
  { name: 'D332, Desai Grandeur, Whitefield, 560066', value: 'Location' },
  { name: 'India', value: 'Country' }
]

const seasonalTreks = [
  {
    image: 'assets/summer.jpg',
    title: 'Summer',
    description:
      'Summer is the hottest of the four temperate seasons, falling after spring and before autumn.'
  },
  {
    image: 'assets/winter.jpg',
    title: 'Winter',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.'
  },
  {
    image: 'assets/spring.jpg',
    title: 'Spring',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.'
  }
]

type HomeManagementState = {
  features: typeof features
  stats: typeof stats
  seasonalTreks: typeof seasonalTreks
}

const useHomeStore = create<HomeManagementState>(() => ({
  features: features,
  stats: stats,
  seasonalTreks: seasonalTreks
}))

export default useHomeStore
