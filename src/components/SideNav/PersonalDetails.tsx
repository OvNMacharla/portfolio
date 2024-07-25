import React from 'react'
import { Detail } from '../../types/UserDetailsType'

interface DetailProps {
  detail: Detail
}
const PersonalDetails = ({ detail }) => (
  <div className="flex m-3">
    <div className="border border-border-color rounded-lg p-2 h-fit w-fit shadow-md bg-border-background">
      <img src={detail.emoji} />
    </div>
    <div className="pl-5 ">
      <p className="text-xs font-bold text-cap-text">{detail.source}</p>
      <p className="text-sm">{detail.value}</p>
    </div>
  </div>
)

export default PersonalDetails
