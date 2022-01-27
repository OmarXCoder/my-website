export default function SiteContainer({ children, className }) {
    return <div className={`container px-6 max-w-6xl mx-auto ${className}`}>{children}</div>;
}
