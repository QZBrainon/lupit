import AddPlayerForm from "@/components/application/AddPlayerForm";

export default async function NewPlayerPage() {
  const fetchTeams = async () => {
    const response = await fetch("http://localhost:3001/team/");
    const data = await response.json();
    return data;
  };

  const teams = await fetchTeams();

  return (
    <div className="container mx-auto w-full flex justify-center items-center py-6 gap-4 mt-28">
      <AddPlayerForm teams={teams} />
    </div>
  );
}
