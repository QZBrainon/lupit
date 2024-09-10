"use client";
import { PlayerTable } from "@/components/application/PlayerTable";
import { useEffect, useState } from "react";
import { showDeleteAlert } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import { Player } from "@/types/Player";

export default function App() {
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
      <PlayerTable players={players} onDelete={handleDeleteAndRefresh} />
    </div>
  );
}
