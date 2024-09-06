"use client";
import { PlayerTable } from "@/components/application/PlayerTable";
import { useEffect, useState } from "react";
import { showDeleteAlert } from "@/lib/utils";
import Spinner from "@/components/application/Spinner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";
import Link from "next/link";

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

  const fetchPlayers = async () => {
    const response = await fetch("http://localhost:3001/player/");
    const data = await response.json();
    setPlayers(data);
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const handleDeleteAndRefresh = async (id: number) => {
    await showDeleteAlert(id, fetchPlayers);
  };

  const router = useRouter();

  return (
    <div>
      <div className="container mx-auto w-full flex justify-between items-center py-6 gap-4 mt-28 border-b border-border/40">
        <h1 className="text-3xl font-bold">Jogadores</h1>
        <div className="flex justify-center items-center">
          <Link href="/jogador/novo">
            <Button variant="default" aria-label="add_player">
              <PlusIcon className="mr-2 h-4 w-4" />
              Adicionar jogador
            </Button>
          </Link>
        </div>
      </div>
      <PlayerTable
        players={players}
        handleDeleteAndRefresh={handleDeleteAndRefresh}
      />
    </div>
  );
}
