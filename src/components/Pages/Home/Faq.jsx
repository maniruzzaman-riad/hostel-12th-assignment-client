import SectionTitle from "../../Sheard/SectionTitle";


const Faq = () => {
    return (
        <div>
            <SectionTitle title="Frequently Asked Questions"></SectionTitle>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <p className="mt-4 mb-8 dark:text-gray-400">Explore our FAQ section for quick answers on hostel facilities, booking procedures, and common queries.</p>
                    <div className="space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">What is our full booking procedures?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">To book a spot at our hostel, simply visit our website, choose your dates, and follow the easy booking process. Secure your stay hassle-free for a memorable hostel experience. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">what is our Hostel facilities?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Experience top-notch amenities at our hostel, including comfortable accommodations, Wi-Fi, communal spaces, and 24/7 security. Elevate your stay with us for a memorable and enjoyable hostel experience. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">What type facilities have in our silver Package?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Unlock comfort and affordability with our Silver Package. Enjoy well-appointed accommodations, essential amenities, and a budget-friendly option for a delightful stay at our hostel. Discover value without compromise. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">What type facilities have in our Gold Package?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Discover the perfect balance of comfort and value with our Gold Package. Enjoy upgraded accommodations, enhanced amenities, and a premium stay at our hostel. Elevate your experience without breaking the bank. </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">What type facilities have in our Platinum Package?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">Indulge in luxury with our Platinum Package. Experience premium accommodations, exclusive amenities, and personalized services for a truly exceptional stay. Elevate your hostel experience with the epitome of comfort and style. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;