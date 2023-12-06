import { CiBadgeDollar } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";
import SectionTitle from "../../Sheard/SectionTitle";

const Membership = () => {
    return (
        <section>
            <SectionTitle 
            title="Get Your Package"
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-dotted p-3 shadow-gray-700 bg-blue-500 rounded-tl-[100px] rounded-br-[100px]">
                    <div className="text-center relative">
                        <SlBadge className="mx-auto text-8xl text-black"/>
                        <h3 className="text-5xl text-black font-semibold my-5">Silver</h3>
                        <p className="text-black"><span className="text-3xl pb-6">250 $ /</span><small>Month</small></p>
                        <CiBadgeDollar className="absolute top-0 right-0 text-6xl text-orange-500"/>
                    </div>
                </div>
                <div className="border-2 border-dotted p-3 shadow-gray-700 bg-blue-600 rounded-tl-[100px] rounded-br-[100px]">
                    <div className="text-center relative">
                        <SlBadge className="mx-auto text-8xl text-black"/>
                        <h3 className="text-5xl text-black font-semibold my-5">Gold</h3>
                        <p className="text-black"><span className="text-3xl pb-6">290 $ /</span><small>Month</small></p>
                        <CiBadgeDollar className="absolute top-0 right-0 text-6xl text-orange-500"/>
                    </div>
                </div>
                <div className="border-2 border-dotted p-3 shadow-gray-700 bg-blue-700 rounded-tl-[100px] rounded-br-[100px]">
                    <div className="text-center relative">
                        <SlBadge className="mx-auto text-8xl text-black"/>
                        <h3 className="text-5xl text-black font-semibold my-5">Platinum</h3>
                        <p className="text-black"><span className="text-3xl pb-6">420 $ /</span><small>Month</small></p>
                        <CiBadgeDollar className="absolute top-0 right-0 text-6xl text-orange-500"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Membership;