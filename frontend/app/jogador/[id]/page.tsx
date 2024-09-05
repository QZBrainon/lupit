"use client";
import EditPlayerForm from "@/components/application/EditPlayerForm";
import { showNotFoundAlert, showNotFoundTeamsAlert } from "@/lib/utils";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Player {
  id?: number;
  name?: string;
  age?: number;
  teamId?: number;
}

interface Team {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default function EditPlayerPage() {
  const { id } = useParams();
  const [player, setPlayer] = useState<Player>();
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    if (id) {
      const fetchPlayerData = async () => {
        const response = await fetch(`http://localhost:3001/player/${id}`);
        if (response.ok) {
          const playerData = await response.json();
          setPlayer(playerData);
        } else if (response.status === 404) {
          showNotFoundAlert();
        }
      };
      const fetchTeamsData = async () => {
        const response = await fetch("http://localhost:3001/team/");
        if (response.ok) {
          const teamsData = await response.json();
          setTeams(teamsData);
        } else {
          showNotFoundTeamsAlert();
        }
      };
      fetchPlayerData();
      fetchTeamsData();
    }
  }, [id]);

  return (
    <div className="container mx-auto w-full flex justify-center items-center py-6 gap-4 mt-28">
      <EditPlayerForm player={player} teams={teams} />
    </div>
  );
}
