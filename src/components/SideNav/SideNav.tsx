import React from 'react'
import Emoji from '../../assets/MyEmoji_20240724_182829_0.png'
import PersonalDetails from './PersonalDetails.tsx'
import { UserDetails } from '../../data/UserDetails.ts'
import { UserDetailsType } from '../../types/UserDetailsType.ts'

const SideNav = () => {
  return (
    <div className="bg-content-background h-full p-5 rounded-lg">
      <div className="flex flex-col items-center gap-2">
        <div className="bg-nav-background rounded-lg">
          <img src={Emoji} className="w-40 h-40" />
        </div>
        <h1 className="font-bold">M Ome Venkata Nagarjuna</h1>
        <p className="bg-nav-background rounded-lg pt-1 pb-1 pl-4 pr-4 font-normal text-xs">
          Web Developer
        </p>
      </div>
      <hr className="mt-9 mb-9 bg-nav-background" />
      {UserDetails.map((detail: UserDetailsType) => (
        <div key={detail.id} className="flex m-3">
          <div className="border border-border-color rounded-lg p-2 h-fit w-fit shadow-md bg-border-background">
            <img src={detail.emoji} />
          </div>
          <div className="pl-5 ">
            <p className="text-xs font-bold">{detail.source}</p>
            <p className="text-sm text-cap-text">{detail.value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SideNav
