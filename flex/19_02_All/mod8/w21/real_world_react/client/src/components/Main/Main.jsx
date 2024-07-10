import "./Main.css";
import { useUser } from "../../contexts/userContext";
import { useSystems } from "../../contexts/systemContext";
import SystemListItem from "../SystemListItem/SystemListItem";


const Main = () => {
    const { user } = useUser();
    const  systems  = useSystems();

    const filteredSystems = systems.filter((system) => system.user_id === user.id);
    
    return (
        <>
        <main className="main">
            <section>
                <h1>Profile</h1>
                <p>{user ? "Welcome to the App!": "Please login to continue!"}</p>
                {user && (
                    <div>
                        <h2>Your Systems</h2>
                        <ul>
                            {filteredSystems.map((system) => (
                                <SystemListItem key={system.id} {...system} />
                            ))}
                        </ul>
                    </div>
                )}
            </section>
            { user && (
                <aside>
                    <div>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                </aside>
            )}
        </main>
        </>
    )
}

export default Main