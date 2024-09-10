"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { Edit2, Trash2 } from "lucide-react";
import Link from "next/link";
import { Player } from "@/types/Player";

export function PlayerTable({
  players,
  onDelete,
}: {
  players: Player[];
  onDelete: (id: number) => Promise<void>;
}) {
  return (
    <div>
      {players.length > 0 ? (
        <div className="container mx-auto w-full flex justify-between items-center py-6 gap-4 mt-28 border-b border-border/40">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Data de Criação</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {players?.map((player) => (
                <TableRow key={player?.id}>
                  <TableCell className="font-medium">{player?.id}</TableCell>
                  <TableCell>{player?.name}</TableCell>
                  <TableCell>{player?.team?.name}</TableCell>
                  <TableCell>
                    {new Date(player?.createdAt).toLocaleDateString("pt-BR", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </TableCell>
                  <TableCell className="text-right flex justify-end">
                    <Link href={`/jogador/${player?.id}`}>
                      <Button variant="ghost" aria-label="edit_player">
                        <Edit2 className=" h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      aria-label="delete_player"
                      onClick={() => onDelete(player?.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-muted-foreground">
            Não existe nenhum jogador cadastrado
          </p>
        </div>
      )}
    </div>
  );
}
