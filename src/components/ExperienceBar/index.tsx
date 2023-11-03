import React, { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import * as S from "./styled"

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext)
  const percentToNextLevel = Math.round((currentExperience * 100) / experienceToNextLevel)

  return (
    <S.ExperienceBarContainer>
      <S.ExperienceBarYourXp>
        0 xp
      </S.ExperienceBarYourXp>
      <S.ExperienceBarProgress>
        <S.ExperienceBarProgressPercent style={{ width: `${percentToNextLevel}%` }} />
        <S.ExperienceBarCurrentXp style={{ left: `${percentToNextLevel}%` }}>
          {currentExperience} xp
        </S.ExperienceBarCurrentXp>
      </S.ExperienceBarProgress>
      <S.ExperienceBarFinalXp>
        {experienceToNextLevel} xp
      </S.ExperienceBarFinalXp>
    </S.ExperienceBarContainer>
  )
}