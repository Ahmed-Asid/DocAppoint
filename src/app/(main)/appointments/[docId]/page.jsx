
import Image from "next/image";
import {
    FaLocationDot,
    FaUserDoctor,
    FaBriefcase,
    FaBuilding,
    FaStar,
} from "react-icons/fa6";

import { getDocByID } from "@/data/data";
import { Button, Card, Modal } from "@heroui/react";
import { BookAppointment } from "./BookAppointment";
import { bookAppointment } from "@/lib/actions";

const DoctorDetailsPage = async ({ params }) => {

    const { docId } = await params;
    const doc = await getDocByID(docId);

    return (
        <section className="min-h-screen bg-base-200/40 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <Card className="shadow-sm border border-base-200 bg-base-100 rounded-3xl p-6 md:p-10">
                    <Card.Content className="flex flex-col md:flex-row gap-10 items-center md:items-start">

                        <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 relative rounded-full overflow-hidden border-4 border-primary/20 bg-base-200 shadow-inner">
                            <Image
                                src={doc.image}
                                alt={doc.name}
                                fill
                                className="object-cover object-top"
                                priority
                            />
                        </div>

                        <div className="flex flex-col grow w-full text-center md:text-left">
                            <h1 className="text-3xl font-extrabold  mb-2">{doc.name}</h1>

                            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                                <div className="badge badge-primary gap-1 py-3 px-4 font-bold text-xs uppercase tracking-wider">
                                    <FaUserDoctor /> {doc.specialty}
                                </div>
                                <div className="badge badge-neutral gap-1 py-3 px-4 font-bold text-xs uppercase tracking-wider">
                                    <FaBriefcase /> {doc.experience} Exp
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 items-center md:items-start mb-8 p-6 bg-base-200/50 rounded-2xl border border-base-200">
                                <div className="flex flex-col md:flex-row gap-3 w-full items-center md:items-start">
                                    <div className="flex items-center gap-3">
                                        <FaBuilding className="text-gray-300 text-lg" />
                                        <span className="leading-tight"><strong>Hospital:</strong><br />{doc.hospital}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <FaLocationDot className="text-gray-300 text-lg" />
                                        <span className="leading-tight"><strong>Chamber:</strong><br />{doc.location}</span>
                                    </div>
                                </div>
                                <div className="text-gray-600 w-full col-span-2">
                                    {doc.description}
                                </div>
                                <div className="px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <FaStar className="text-warning text-sm" />
                                    <span className="font-bold text-sm ">{doc.rating}</span>
                                    <span className="text-xs text-gray-600">({doc.reviews})</span>
                                </div>
                                <div className="flex items-center gap-3 sm:col-span-2 mt-2 pt-4 border-t border-base-200">
                                    <span className="text-gray-600 font-medium">Visiting Fee:</span>
                                    <span className="text-2xl font-extrabold text-success">৳{doc.fee}</span>
                                </div>
                            </div>

                            <div className="mx-auto md:mx-0">
                                <Modal>
                                    <Button variant="secondary">Book Appointment</Button>
                                    <BookAppointment docName={doc.name} availability={doc.availability} formAction={bookAppointment}></BookAppointment>
                                </Modal>
                            </div>

                        </div>
                    </Card.Content>
                </Card>



            </div>
        </section>
    );
};

export default DoctorDetailsPage;