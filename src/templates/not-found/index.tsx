import Link from 'next/link'
import { Container } from '@/components/atoms/container'
import { Text } from '@/components/atoms/text'
import { BackGroundDiv } from '@/features/shared/components/BackGroundDiv'
import { ROUTES } from '@/features/shared/shared.interface'

export const NotFoundComponent = () => {
  return (
    <BackGroundDiv>
      <Container className="flex items-center justify-center gap-1 ml-auto flex-col h-[80vh]">
        <Container>
          <Text
            as="h2"
            className="text-4xl text-neutral-900 dark:text-gray-600"
          >
            404 Not Authorized
          </Text>
          <Text as="p" className="text-neutral-500">
            Need to login to find requested resource
          </Text>
          <Link href={ROUTES.HOME} className="text-neutral-500">
            Go Home <span aria-hidden="true">&rarr;</span>
          </Link>
        </Container>
      </Container>
    </BackGroundDiv>
  )
}
