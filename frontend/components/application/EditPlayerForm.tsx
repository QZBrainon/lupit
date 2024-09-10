"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Controller, useForm } from "react-hook-form";
import { showEditSuccessAlert, showErrorAlert } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Player } from "@/types/Player";
import { Team } from "@/types/Team";

export default function EditPlayerForm({
  player,
  teams,
}: {
  player?: Player;
  teams?: Team[];
}) {
  const router = useRouter();

  const { register, handleSubmit, control, reset, formState } = useForm<Player>(
    {
      defaultValues: player,
    }
  );

  useEffect(() => {
    reset(player);
  }, [player, reset]);

  const onSubmit = async (data: Player) => {
    const response = await fetch(`http://localhost:3001/player/${data.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      showEditSuccessAlert();
      router.push("/");
    } else {
      showErrorAlert();
    }
  };

  return (
    <Card className="w-full max-w-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Editar jogador</CardTitle>
          <CardDescription>Altere as informações do jogador.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              placeholder="Enter name"
              {...register("name", { required: "Nome é obrigatório" })}
            />
            {formState.errors.name && (
              <p className="text-sm text-red-500">
                {formState.errors.name.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Idade</Label>
            <Input
              id="age"
              type="tel"
              inputMode="numeric"
              placeholder="Enter age"
              {...register("age", {
                required: "Idade é obrigatória",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Por favor, insira apenas números",
                },
              })}
            />
            {formState.errors.age && (
              <p className="text-sm text-red-500">
                {formState.errors.age.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="team">Time</Label>
            <Controller
              name="teamId"
              control={control}
              rules={{ required: "Time é obrigatório" }}
              render={({ field }) => (
                <Select
                  onValueChange={(value) => field.onChange(Number(value))}
                  value={field.value ? String(field.value) : ""}
                >
                  <SelectTrigger id="team">
                    <SelectValue placeholder="Select team" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams?.map((team) => (
                      <SelectItem key={team.id} value={String(team.id)}>
                        {team.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {formState.errors.teamId && (
              <p className="text-sm text-red-500">
                {formState.errors.teamId.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Save
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
