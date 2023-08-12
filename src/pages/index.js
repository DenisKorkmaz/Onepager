import Header from "@/components/Header";
import ImageContent from "@/components/ImageContent";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <Header />
      <ImageContent />

      <div className="flex flex-col items-start max-w-full">
        <h2 className="mb-4 text-[#4B4B4B] font-inter text-2xl font-normal">Our Products</h2>

        <div className="flex flex-row space-x-4 mb-2"> 
          <ProductCard
            h3Text="Product G"
            pText="A diam dolor gravida eu et nibh morbi at nullam. Enim urna quis vitae arcu donec purus. Faucibus iaculis at duis pulvinar eget. Ipsum ut cras magna."
            bgColor="#004587"
          />
          <ProductCard
            h3Text="Product F"
            pText="Nec eget dui pulvinar ut at neque duis. Integer ligula donec vel risus malesuada sed id faucibus. Sed cursus morbi egestas tincidunt metus ipsum."
            bgColor="#009CC4"
          />
          <ProductCard
            h3Text="Product A"
            pText="Tellus tellus nibh duis scelerisque nibh consequat. Volutpat consectetur maecenas volutpat odio. Vulputate nisl morbi et scelerisque cras. Non et."
            bgColor="#FBB900"
          />
        </div>

        <div className="flex justify-end w-full pt-2"> 
          <button
            className="font-inter font-semibold text-[#4B4B4B] text-base underline mb-[40px]"
            style={{ fontSize: '15px', lineHeight: '24px' }}
          >
            Show all
          </button>
        </div>
      </div>
    </div>
  );
}
