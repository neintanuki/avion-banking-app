import style from "./styles/ErrorMsg.module.css";

export default function ErrorMsg({ msg }) {
    if (msg) {
        return (
            <span className={style.errorMsg}>
                { msg }
            </span>
        )
    } else {
        return null
    }
}