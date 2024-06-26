import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { ROUTES } from '@/features/shared/shared.interface'

export const PlanYourTrip = () => {
  return (
    <Container className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <Container className="flex flex-col h-full justify-center">
        <Text as="h3" className="text-5xl md:text-6xl font-bold">
          Choose Your <span className="text-brand">Destination</span> According
          to Your Plan
        </Text>
        <Text as="p" className="text-2xl py-6">
          Plan Your Trip with Us
        </Text>
        <Text as="p" className="pb-6">
          Deciding where to go on your next trekking adventure? We can help you,
          we have a variety of treks to choose from. Whether you are looking for
          a short and easy trek or a long and challenging trek, we have it all.
        </Text>
        <Container>
          <Link href={ROUTES.ALL_TREKS}>
            <Container className="rounded-full px-6 text-base font-semibold leading-7 text-gray-900 hover:bg-brand hover:bg-opacity-15 ring-2 ring-brand cursor-pointer w-fit dark:text-gray-600">
              Book Your Trip <Text aria-hidden="true">&rarr;</Text>
            </Container>
          </Link>
        </Container>
      </Container>
      <Container className="grid grid-cols-2 grid-rows-6 h-[80vh] relative">
        <Image
          className="row-span-3 object-cover w-full h-full p-2 dark:opacity-90"
          src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1368&q=80"
          alt="image"
          width={1920}
          height={1080}
          placeholder="empty"
        />
        <Image
          className="row-span-2 object-cover w-full h-full p-2 dark:opacity-90"
          src="https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
          alt="image"
          width={1920}
          height={1080}
          placeholder="empty"
        />
        <Image
          className="row-span-2 object-cover w-full h-full p-2 dark:opacity-90"
          src="https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1772&q=80"
          alt="image"
          width={1920}
          height={1080}
          placeholder="empty"
        />
        <Image
          className="row-span-3 object-cover w-full h-full p-2 dark:opacity-90"
          src="https://images.unsplash.com/photo-1468413253725-0d5181091126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="image"
          width={1920}
          height={1080}
          placeholder="empty"
        />
        <Image
          className="row-span-2 object-cover w-full h-full p-2 dark:opacity-90"
          src="https://images.unsplash.com/photo-1473186578172-c141e6798cf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1673&q=80"
          alt="image"
          width={1920}
          height={1080}
          placeholder="empty"
        />
        <Container className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-700 opacity-10 rounded-sm" />
      </Container>
    </Container>
  )
}
