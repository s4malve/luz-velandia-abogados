import Head from 'next/head'
import CardArea from '../components/CardArea'

import BaseHead from '../components/Head/BaseHead'
import Header from '../components/Header'
import FAQCard from '../components/FAQ/Card'
import FAQHeader from '../components/FAQ/Header'
import HightlightIcon from '../components/HighlightIcon'
import Questions from '../components/FAQ/Questions'
import Footer from '../components/Footer'

import Group from '../components/Icons/Group'

import { sections } from '../lib/constants'
import { circuit, civil, family } from '../data/questions'

const FAQ = () => {
  return (
    <>
      <Head>
        <BaseHead description="" permalink="" title="" />
      </Head>
      <Header
        cover="/assets/faq/cover.jpg"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsam natus aperiam, rem recusandae nam expedita atque aspernatur saepe. Nam."
        title="Preguntas Frecuentes"
        coverPosition="bg-center"
      />
      <main className="grid grid-cols-1 grid-rows-[auto_1fr] lg:grid-rows-1 lg:grid-cols-[auto_1fr] wrapper content-container gap-6">
        <aside className="grid grid-cols-[repeat(auto-fill,minmax(358px,1fr))] lg:flex lg:flex-col lg:justify-start grid-rows-[auto] gap-4 lg:max-w-[358px] justify-between">
          {sections.map(({ color, name, description, tablet, title }, i) => (
            <a href={`#${name}`} key={i}>
              <CardArea
                orientation="flex-row"
                color={color}
                description={description}
                tablet={tablet}
                title={title}
              />
            </a>
          ))}
        </aside>
        <article className="flex flex-col w-full gap-y-8">
          <FAQCard id="familia">
            <FAQHeader
              title="Familia"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
            >
              <HightlightIcon Icon={Group} className="bg-golden-promise" />
            </FAQHeader>
            <Questions question={family} />
          </FAQCard>
          <FAQCard id="civil">
            <FAQHeader
              title="Civil"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
            >
              <HightlightIcon Icon={Group} className="bg-expressionism-green" />
            </FAQHeader>
            <Questions question={civil} />
          </FAQCard>
          <FAQCard id="circuito">
            <FAQHeader
              title="Circuito"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit"
            >
              <HightlightIcon Icon={Group} className="bg-spinel-red" />
            </FAQHeader>
            <Questions question={circuit} />
          </FAQCard>
        </article>
      </main>
      <Footer />
    </>
  )
}

export default FAQ
