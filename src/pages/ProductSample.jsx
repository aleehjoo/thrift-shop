const ProductSample = () => {
    return (
        <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center px-8 py-16 gap-12 bg-black text-white">

            {/* Left side - Product Info */}
            <div className="flex-1 space-y-6">
                <h1 className="text-4xl font-bold">Insert Product Name Here</h1>

                <p className="text-lg">Insert short description here. This should give a brief idea of the product.</p>

                <div className="space-y-2">
                    <p><span className="font-semibold">Category:</span> Insert category here</p>
                    <p><span className="font-semibold">Size:</span> Insert size here</p>
                    <p><span className="font-semibold">Condition:</span> Insert condition here</p>
                    <p><span className="font-semibold">Price:</span> Insert price here</p>
                </div>

                <button className="bg-white text-black px-6 py-3 rounded-md hover:opacity-80 transition">
                    Insert CTA (e.g., "Add to Cart")
                </button>
            </div>

            {/* Right side - Image placeholder */}
            <div className="flex-1 flex items-center justify-center">
                <div className="bg-white w-72 h-96 sm:w-96 sm:h-[500px] rounded-md shadow-lg flex items-center justify-center text-black">
                    Insert Image Here
                </div>
            </div>
        </section>
    );
};

export default ProductSample;
