import { FaCalendarTimes } from "react-icons/fa";
import { getAppointments } from "@/data/data";
import { Chip } from "@heroui/react";
import AppointmentUi from "./AppointmentUi";
import { deleteAppointment, updateAppointment } from "@/lib/actions";

const MyAppointments = async () => {

    const appointments = await getAppointments();
    console.log("appointments", appointments)

    return (
        <div className="w-full mt-10">

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-base-200 pb-8 mb-10 gap-4">
                    <div>
                        <h1 className="text-3xl font-extrabold text-base-content tracking-tight md:text-4xl">
                            My Appointments
                        </h1>
                        <p className="mt-2 text-base-content/70 text-lg">
                            Manage your appointments and consultation schedules.
                        </p>
                    </div>

                    <Chip
                        color="primary"
                        variant="flat"
                        size="lg"
                        className="font-bold px-4 py-2 text-sm border border-primary/20 w-fit"
                    >
                        {appointments.length} {appointments.length === 1 ? 'Appointment' : 'Appointments'}
                    </Chip>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {appointments.map((appointment) => <AppointmentUi key={appointment._id} appointment={appointment} deleteAppointment={deleteAppointment} updateAppointment={updateAppointment} />)}
                </div>

                {appointments.length === 0 && (
                    <div className="text-center py-20 bg-base-100 rounded-3xl border border-dashed border-base-300 shadow-sm">
                        <div className="text-5xl mb-4 flex justify-center text-base-content/30">
                            <FaCalendarTimes />
                        </div>
                        <h3 className="text-xl font-bold text-base-content">No appointments found</h3>
                        <p className="text-base-content/60 mt-1 max-w-md mx-auto">
                            You haven't scheduled any appointments yet.
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default MyAppointments;