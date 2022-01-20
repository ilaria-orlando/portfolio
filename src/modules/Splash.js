import placeholder from "../assets/placeholder.png";

const Splash = () => {
    return (
        <div className="splash">
            <div className="middle">
                <img src={placeholder} className="splashArt" alt="splash art" />
                <h1>Front end webdev</h1>
                <p className="splashText">
                    Heyo, I specialize in creative front end solutions. Take a look around, you might see something you like.
                </p>
            </div>
        </div>
    )
};

export default Splash;