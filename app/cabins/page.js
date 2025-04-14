import Counter from "@/app/_components/Counter";

import { supabase } from '@/app/_lib/supabase';
import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600;


export const metadata = {
  title: "Rooms",
};

export default async function Page({searchParams}) {
  // CHANGE
  console.log(searchParams);
  const filter = searchParams?.capacity ?? "all";
  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Rooms
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        
      </p>

<div className="flex justify-end mb-8">
      <Filter />
</div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter = {filter}/>
        <ReservationReminder />
      </Suspense>
      
    </div>
  );
}
