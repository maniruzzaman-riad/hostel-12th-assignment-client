

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/h7fjzcq/banner-1.jpg)' }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5"><span className="text-3xl font-semibold text-orange-600">Uttara Hostel ,,,</span> Welcome to <span className="text-orange-500">Uttara Hostel</span> Management Hub Where Comfort Meets Convenience! Explore seamless hostel living with our user-friendly website. Manage bookings, track payments, and stay connected with our vibrant community. Your home away from home starts here!</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;