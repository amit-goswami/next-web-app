'use client'

import React from 'react'
import useHomeStore from '../../store/home.store'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { BestSeasonalTreksCarousel } from './components/BestSeasonalTreksCarousel'
import { IBestTreksList } from '../../home.interface'

type BestSeasonalTreksProps = {
  bestTreksList: IBestTreksList | null | undefined
}

export const BestSeasonalTreks = ({
  bestTreksList
}: BestSeasonalTreksProps) => {
  const { bestSeasonalTreks } = useHomeStore()
  return (
    <Container className="py-12 px-4" id="best-treks">
      <Container className="max-w-7xl mx-auto">
        <Container className="lg:text-center">
          <Text
            as="h2"
            className="font-heading text-center mb-4 rounded-full md:w-72 md:mx-auto text-xs font-semibold tracking-widest text-black uppercase title-font ring-2 ring-brand leading-7 dark:text-gray-600"
          >
            Best treks in coming months
          </Text>
        </Container>
      </Container>
      <BestSeasonalTreksCarousel
        bestSeasonalTreks={bestSeasonalTreks}
        bestTreksList={bestTreksList}
      />
    </Container>
  )
}
