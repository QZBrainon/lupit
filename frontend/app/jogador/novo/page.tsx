"use client";
import AddPlayerForm from "@/components/application/AddPlayerForm";
import { useEffect, useState } from "react";

interface Team {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function NewPlayerPage() {
  const [teams, setTeams] = useState<Team[]>([]);

  const fetchTeams = async () => {
    const response = await fetch("http://localhost:3001/team/");
    const data = await response.json();
    setTeams(data);
  };

  useEffect(() => {
    fetchTeams();
  }, []);

  return (
    <div className="container mx-auto w-full flex justify-center items-center py-6 gap-4 mt-28">
      <AddPlayerForm teams={teams} />
    </div>
  );
}
