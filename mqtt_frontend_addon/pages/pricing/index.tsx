import { title } from "@/components/common/primitives";
import DefaultLayout from "@/layouts/default";
import OccupancyCard from "@/components/common/SensorCard";

export default function DocsPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Pricing</h1>
          <div className="flex flex-col items-start gap-1.5">
            <OccupancyCard />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
