import { Helmet } from "react-helmet";


const Dashboard = () => {
    return (
        <div className="min-h-screen">
            <Helmet>
            <title>Dashboard</title>
        </Helmet>
        <h2 className="text-5xl font font-bold text-center my-5">DashBoard</h2>
        </div>
    );
};

export default Dashboard;