import "../Main/Main.css";
import { useParams } from "react-router-dom";
import { useSystems } from "../../contexts/systemContext";

const GameSystemProfile = () => {
    const systems = useSystems();

    const { id } = useParams();

    const system = systems.find((system) => system.id === id);

    return (
        <main className="main">
            {systems.length > 0 && (
                <aside>
                    <div>
                        <img className="system-picture" src={system.image} alt={system.name} />
                    </div>
                    <div>
                    <h2>{system.name}</h2>
                    <p>Price: ${system.price}.00</p>
                    </div>
                </aside>
            )}
        </main>
    );
}

export default GameSystemProfile;