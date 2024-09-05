"use client";
import { PlayerTable } from "@/components/application/PlayerTable";
import { useEffect, useState } from "react";
import { showDeleteAlert } from "@/lib/utils";
import Spinner from "@/components/application/Spinner";

export default function App() {
  type Player = {
    id: number;
    name: string;
    age: number;
    createdAt: Date;
    updatedAt: Date;
    teamId: number;
    team: {
      id: number;
      name: string;
      createdAt: Date;
      updatedAt: Date;
      players: Player[];
    };
  };
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPlayers = async () => {
    setIsLoading(true);
    const response = await fetch("http://localhost:3001/player/");
    const data = await response.json();
    setPlayers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleDeleteAndRefresh = async (id: number) => {
    await showDeleteAlert(id, fetchPlayers);
  };

  return isLoading ? (
    <div className="h-full w-screen flex justify-center items-center mt-48">
      <Spinner />
    </div>
  ) : (
    <div>
      <PlayerTable
        players={players}
        handleDeleteAndRefresh={handleDeleteAndRefresh}
      />
    </div>
  );
}
