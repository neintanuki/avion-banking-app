export default function ErrorMsg({ msg }) {
    if (msg) {
        return (
            <span className="error-msg">
                { msg }
            </span>
        )
    } else {
        return null
    }
}