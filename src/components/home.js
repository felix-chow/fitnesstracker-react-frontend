import AccountModal from "./modal/AccountModal";

const Home = ({user}) => {
    return (
        <div>
            <h1>Welcome to Fitness Trac.kr!</h1>
            { user && "Logged in as " + user.username }
            <AccountModal />
        </div>
    );
}

export default Home;