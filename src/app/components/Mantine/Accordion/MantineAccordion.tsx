'use client'
import React from 'react'
import { Accordion } from '@mantine/core'
import { Birds } from '@prisma/client'

export default function MantineAccordion({ data }: { data: Birds[] }) {
  return (
    <Accordion variant="contained" radius="md" defaultValue="Hooded Oriole">
      {data.map(b => {
        return (
          <Accordion.Item key={b.scientificName} value={b.commonName}>
            <Accordion.Control icon={'🐦‍⬛'}></Accordion.Control>
            <Accordion.Panel>{b.scientificName} - {b.mainColor}</Accordion.Panel>
          </Accordion.Item>
        )
      })}
    </Accordion>
  )
}
