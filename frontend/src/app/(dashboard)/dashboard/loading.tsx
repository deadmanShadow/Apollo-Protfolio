// src/components/DashboardLoader.tsx
import Loading from "@/components/Loader";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoader() {
  return (
    <div className="py-4">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl my-4 text-center text-muted-foreground">
          <Loading />
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="border rounded-2xl p-4 shadow-sm space-y-3 animate-pulse"
          >
            <Skeleton className="h-40 w-full rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}
