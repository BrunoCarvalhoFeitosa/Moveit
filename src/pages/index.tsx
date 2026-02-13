import React from "react"
import Head from "next/head"
import { GetServerSideProps } from "next"
import { ChallengesProvider } from "../contexts/ChallengesContext"
import { CountdownProvider } from "../contexts/CountdownContext"
import { ExperienceBar } from "../components/ExperienceBar"
import { Profile } from "../components/Profile"
import { Countdown } from "../components/Countdown"
import { CompleteChallenges } from "../components/CompleteChallenges"
import { ChallengeBox } from "../components/ChallengeBox"
import * as S from "../../styles/styled"

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <React.Suspense fallback={null}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengesCompleted={props.challengesCompleted}  
      >
        <S.HomeWrapper>
          <Head>
            <title>Início | move.it</title>
          </Head>
          <ExperienceBar />
          <CountdownProvider>
            <S.HomeContent>
              <S.HomeLeftContent>
                <Profile />
                <CompleteChallenges />
                <Countdown />
              </S.HomeLeftContent>
              <S.HomeRightContent>
                <ChallengeBox />
              </S.HomeRightContent>
            </S.HomeContent>
          </CountdownProvider> 
        </S.HomeWrapper>
      </ChallengesProvider>
    </React.Suspense>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const {
    level,
    currentExperience,
    challengesCompleted
  } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}