
export default function Link({ to, children }) {
    function preventReload(event) {
        event.preventDefault();

        window.location.pathname = to;

        // triggers the custom event for the window object
        const navigationEvent = new Event("navigate");
        window.dispatchEvent(navigationEvent);
    }

    return (
        <a href={to} onClick={preventReload}>
            {children}
        </a>
    )
}