import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "Update profile",
};

export default function Page() {
  // CHANGE
  const countryFlag = "pt.jpg";
  const nationality = "portugal";
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        Zaktualizuj profil
      </h2>

      <p className="text-lg mb-8 text-primary-200">
        Lorem ipsum lorem ipsum
      </p>

      <UpdateProfileForm >
          <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          />
        </UpdateProfileForm>

    </div>
  );
}
