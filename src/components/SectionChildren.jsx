import './SectionChildren.css';

function SectionChildren({ children }) {
    return (
        <section className="main__section">
            { children }
        </section>
    );
}

export { SectionChildren};