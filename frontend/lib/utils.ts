import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Swal from "sweetalert2";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const showSuccessAlert = () => {
  Swal.fire({
    title: "Sucesso!",
    text: "Jogador cadastrado com sucesso",
    icon: "success",
    confirmButtonText: "OK",
  });
};

export const showEditSuccessAlert = () => {
  Swal.fire({
    title: "Sucesso!",
    text: "Jogador editado com sucesso",
    icon: "success",
    confirmButtonText: "OK",
  });
};

export const showNotFoundAlert = () => {
  Swal.fire({
    title: "Erro!",
    text: "Não conseguimos encontrar o jogador, tente novamente mais tarde.",
    icon: "error",
    confirmButtonText: "OK",
  });
};

export const showNotFoundTeamsAlert = () => {
  Swal.fire({
    title: "Erro!",
    text: "Não conseguimos encontrar os times, tente novamente mais tarde.",
    icon: "error",
    confirmButtonText: "OK",
  });
};

export const showErrorAlert = () => {
  Swal.fire({
    title: "Erro!",
    text: "Não conseguimos cadastrar o jogador, tente novamente mais tarde.",
    icon: "error",
    confirmButtonText: "OK",
  });
};

export const showDeleteAlert = async (
  playerId: number,
  refreshFn: () => void
) => {
  const result = await Swal.fire({
    title: "Tem certeza?",
    text: "Remover o jogador é uma ação irreversível",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Excluir",
    cancelButtonText: "Cancelar",
    confirmButtonColor: "#d9480f",
  });

  if (result.isConfirmed) {
    try {
      const response = await fetch(`http://localhost:3001/player/${playerId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        await Swal.fire({
          title: "Excluído!",
          text: "O jogador foi excluído com sucesso.",
          icon: "success",
          confirmButtonText: "OK",
        });
        refreshFn();
      } else {
        await Swal.fire({
          title: "Erro!",
          text: "Não conseguimos excluir o jogador. Tente novamente mais tarde.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      await Swal.fire({
        title: "Erro!",
        text: "Não conseguimos excluir o jogador. Tente novamente mais tarde.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }
};
