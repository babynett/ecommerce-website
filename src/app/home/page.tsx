import ProductCards from "@/components/home/ProductCards";
import SideMenu from "@/components/home/SideMenu";
import { Card } from "@/components/ui/card";
import Home from "@/components/home/Home";
export default function HomePage() {
  return (
    <>
      <div className="flex gap-6 px-10">
        <div className="w-64 flex border border-accent rounded-md p-4 shadow-md">
          <SideMenu />
        </div>
        <div className="flex-1">
          {/* Put the boxes animation here */}
          <Home />
        </div>
      </div>{" "}
      <div title="Sale" className="grid gr  id-cols-2 p-10 gap-2">
        {["Banner 1", "Banner 2", "Banner 3"].map((banner) => (
          <Card className="rounded-3xl" key={banner}>
            {" "}
            {banner}
          </Card>
        ))}
      </div>
      <div className="px-10">
        {" "}
        <ProductCards />
      </div>
    </>
  );
}
