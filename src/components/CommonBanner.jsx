const CommonBanner = ({ cover, title, description }) => {
    return (
        <div
            className="hero h-[500px] mb-10"
            style={{
                backgroundImage: `url(${cover})`,
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                    <p className="mb-5 text-xl">{description}</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default CommonBanner;
