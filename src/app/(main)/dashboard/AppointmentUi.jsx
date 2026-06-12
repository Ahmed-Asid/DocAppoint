'use client'

import { FiMail } from "react-icons/fi";
import { Button, Card, Chip, Modal } from "@heroui/react";
import { FaCalendarCheck, FaClock, FaPenToSquare, FaPhone, FaTrashCan, FaUser, FaUserDoctor } from "react-icons/fa6";
import { UpdateAppointment } from "./UpdateAppointmentModal";

const AppointmentUi = ({ appointment, deleteAppointment, updateAppointment }) => {

    const handleDelete = async (id) => {
        await deleteAppointment(id)
    }

    return (
        <Card
            key={appointment._id}
            className="bg-base-100 rounded-3xl overflow-hidden border border-base-200/60 shadow-sm hover:shadow-xl transition-all duration-300"
        >
            <Card.Content className="p-6 flex flex-col h-full">

                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-wider uppercase mb-1">
                            <FaUserDoctor className="text-sm" />
                            <span>Appointment With</span>
                        </div>
                        <h2 className="text-xl font-bold text-base-content line-clamp-1">
                            {appointment.docName}
                        </h2>
                    </div>
                    <Chip color="success" variant="flat" size="sm" className="font-bold shadow-sm">
                        Scheduled
                    </Chip>
                </div>

                <div className="bg-base-200/50 rounded-2xl p-4 space-y-3 mb-6 border border-base-200">
                    <div className="text-sm text-base-content/90 flex items-center gap-3">
                        <FaCalendarCheck className="text-primary w-4 h-4 shrink-0" />
                        <span className="font-semibold">{appointment.date}</span>
                    </div>
                    <div className="text-sm text-base-content/90 flex items-center gap-3">
                        <FaClock className="text-primary w-4 h-4 shrink-0" />
                        <span className="font-medium">{appointment.doctor_schedule}</span>
                    </div>
                </div>

                <div className="space-y-2 mb-6 grow">
                    <div className="text-sm text-base-content/70 flex items-center gap-3">
                        <FaUser className="text-base-content/40 w-4 h-4 shrink-0" />
                        <span>
                            Patient: <span className="font-medium capitalize text-base-content">{appointment.name}</span>
                            <span className="text-xs ml-1 opacity-70">({appointment.gender})</span>
                        </span>
                    </div>
                    <div className="text-sm text-base-content/70 flex items-center gap-3">
                        <FaPhone className="text-base-content/40 w-4 h-4 shrink-0" />
                        <span>Phone: <span className="font-medium text-base-content">{appointment.phone}</span></span>
                    </div>
                    <div className="text-sm text-base-content/70 flex items-center gap-3">
                        <FiMail className="text-base-content/40 w-4 h-4 shrink-0" />
                        <span>Email: <span className="font-medium text-base-content">{appointment.email}</span></span>
                    </div>
                </div>

                <div className="mt-auto pt-4 border-t border-base-200 flex gap-3">
                    <Modal>
                        <Button
                            color="primary"
                            variant="secondary"
                            radius="xl"
                            className="w-full font-bold shadow-sm hover:shadow-md transition-all text-sm flex-1"
                            startContent={<FaPenToSquare className="text-xs" />}
                        >
                            Update
                        </Button>
                        <UpdateAppointment appointment={appointment} updateAppointment={updateAppointment} ></UpdateAppointment>
                    </Modal>
                    <Button
                        onClick={() => handleDelete(appointment._id)}
                        color="danger"
                        variant="flat"
                        radius="xl"
                        className="w-full font-bold shadow-sm hover:shadow-md transition-all text-sm flex-1"
                        startContent={<FaTrashCan className="text-xs" />}
                    >
                        Delete
                    </Button>
                </div>

            </Card.Content>
        </Card>
    );
};

export default AppointmentUi;