import Spinner from "@/components/application/Spinner";

export default function Loading() {
  return (
    <div className="container mx-auto w-full flex justify-center items-center py-6 gap-4 mt-28">
      <Spinner />
    </div>
  );
}
