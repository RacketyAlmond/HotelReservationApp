"use server";

import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import supabase from "./supabase";
import { revalidatePath } from "next/cache";

export async function updateGuest(formData) {
    const session = await auth()
    if(!session) throw new Error("You must be logged in");
    const nationalID = formData.get('nationalID');
    const [nationality, countryFlag]=formData.get("nationality").split("%");
    if(!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
        throw new Error ("Please provide a valid national ID");

    const UpdateData ={nationality, countryFlag, nationalID};
    const { data, error } = await supabase
        .from('guests')
        .update(UpdateData)
        .eq('id', session.user.guestId);

    if (error) {
        throw new Error('Guest could not be updated');
    }
    revalidatePath('/account/profile');
}

export async function deleteReservation(bookingId) {


    const session = await auth();
    if(!session) throw new Error("You must be logged in");
    const guestBookings = await getBookings(session.user.guestId);
    const guestBookingIDs = guestBookings.map((booking) => booking.id);

    if(!guestBookingIDs.includes(bookingId))
        throw new Error("You are not allowed to delete this booking");

    const { error } = await supabase.from('bookings').delete().eq('id', bookingId);

    if (error) {
        console.error(error);
        throw new Error('Booking could not be deleted');
    }
    revalidatePath("/account/reservations")
}


export async function signInAction(){
    await signIn("google", {redirectTo: "/account"});
}
export async function signOutAction(){
    await signOut({redirectTo: "/"});
}
