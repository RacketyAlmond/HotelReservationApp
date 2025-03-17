import ReservationCard from "@/app/_components/ReservationCard";

export const metadata = {
  title: "Reservations",
};

export default function Page() {
  // CHANGE
  const bookings = [];

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Twoje rezerwacje
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          Nie masz jeszcze rezerwacji korepetycji. Poszukaj w {" "}
          <a className="underline text-accent-500" href="/cabins">
            Korepetycje &rarr;
          </a>
        </p>
      ) : (
        <ul className="space-y-6">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
