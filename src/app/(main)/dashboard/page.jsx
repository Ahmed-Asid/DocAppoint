
import DashBoardTabs from "./DashboardTabs";
import MyAppointments from "./MyAppointments";

export const metadata = {
    title: 'Dashboard',
    description: 'Your booked appointments',
};

const Dashboard = async () => {

    return (
        <main className="w-full min-h-screen mx-auto px-4 sm:px-6 lg:px-8 mb-5">
            <DashBoardTabs />
            <MyAppointments />
        </main>
    );
};

export default Dashboard;