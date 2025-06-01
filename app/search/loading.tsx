import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container px-4 py-8 mx-auto">
      <Skeleton className="h-12 w-1/3 mx-auto mb-8" />

      <div className="max-w-2xl mx-auto mb-8">
        <Skeleton className="h-10 w-full" />
      </div>

      <Skeleton className="h-6 w-1/2 mx-auto mb-6" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] w-full rounded-lg" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
      </div>
    </div>
  )
}
