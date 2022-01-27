export default function SiteContainer({ children, className }) {
    return <div className={`container mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>{children}</div>;
}
