import { DashboardAtom } from "../Atoms/DashboardAtom";
import { UserCircle } from "@phosphor-icons/react";

export const DashboardLink = () => {
  return (
    <div className='mr-4 flex items-center group'>
      <UserCircle className='text-2xl mr-1 group-hover:text-sky-700 cursor-pointer' />
      <DashboardAtom />
    </div>
  )
};