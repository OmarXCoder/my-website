export default function ServiceCard({ service, className }) {
    const classProp = className ?? '';

    return (
        <div
            className={`service-card rounded-lg bg-white py-12 px-6 text-center shadow-sm transition-all duration-300 ease-linear hover:bg-amber-400 hover:shadow md:py-8 md:px-4 lg:py-12 lg:px-6 ${classProp}`}
        >
            <div className="service-card__icon leading-none text-slate-700">
                <i className={`fa-2x fa-fw ${service.icon}`}></i>
            </div>
            <div className="my-6 flex flex-col items-center">
                <h5 className="service-card__heading mb-2 text-center text-lg font-semibold capitalize tracking-wider text-slate-700">
                    {service.heading}
                </h5>
                <div className="service-card__underline h-[2px] w-12 bg-amber-400"></div>
            </div>
            <p className="service-card__text leading-7 text-slate-400">{service.description}</p>
        </div>
    );
}
