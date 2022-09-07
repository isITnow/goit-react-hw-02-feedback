// import s from "./Section.module.css";

function Section({ title, children }) {
    return (
        <>
            <p>{title}</p>
            { children}
        </>
    )
}

export default Section