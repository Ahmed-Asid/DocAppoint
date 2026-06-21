"use client";

import { Stethoscope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

export function BookAppointment({ docName, availability, bookAppointment }) {

    const todayStr = new Date().toISOString().split("T")[0];

    const [bookingDate, setBookingDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("");

    const formAction = async (formData) => {
        const result = await bookAppointment(formData);

        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
    };

    return (

        <Modal.Backdrop>
            <Modal.Container placement="auto">
                <Modal.Dialog className="sm:max-w-md">
                    <Modal.CloseTrigger />
                    <Modal.Header>
                        <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                            <Stethoscope className="size-5" />
                        </Modal.Icon>
                        <Modal.Heading>Fill out the form below to confirm your appointment.</Modal.Heading>

                    </Modal.Header>
                    <Modal.Body className="p-6">
                        <Surface variant="default">
                            <form className="flex flex-col gap-4" action={formAction}>

                                <TextField className="w-full" type="text" variant="secondary">
                                    <Label>Doctors Name</Label>
                                    <Input name="docName" readOnly value={docName} />
                                </TextField>

                                <TextField className="w-full" type="text" variant="secondary">
                                    <Label>Name</Label>
                                    <Input name="name" placeholder="Enter your name" required />
                                </TextField>

                                <TextField className="w-full" type="email" variant="secondary">
                                    <Label>Email</Label>
                                    <Input name="email" placeholder="Enter your email" required />
                                </TextField>

                                <TextField className="w-full" type="tel" variant="secondary">
                                    <Label>Phone</Label>
                                    <Input name="phone" placeholder="Enter your phone number" required />
                                </TextField>

                                <TextField className="w-full" variant="secondary">
                                    <Label>Gender</Label>
                                    <div className="flex gap-3">
                                        <Label>
                                            <Input type="radio" name="gender" value="male" className="radio radio-primary radio-sm" defaultChecked />
                                            Male
                                        </Label>
                                        <Label>
                                            <Input type="radio" name="gender" value="female" className="radio radio-primary radio-sm" />
                                            Female
                                        </Label>
                                    </div>
                                </TextField>

                                <TextField className="w-full" variant="secondary">
                                    <Label>Appointment Date</Label>
                                    <Input
                                        name="date"
                                        type="date"
                                        min={todayStr}
                                        value={bookingDate}
                                        onChange={(e) => setBookingDate(e.target.value)}
                                        required
                                    />
                                </TextField>

                                <TextField className="w-full" variant="secondary">
                                    <Label>Select Available Shift</Label>
                                    <div className="flex flex-col gap-2 pt-1">
                                        {availability.map((slot, index) => (
                                            <label
                                                key={index}
                                                className={`flex items-center justify-between p-3 rounded-xl border text-sm font-medium cursor-pointer transition-all ${selectedSlot === slot
                                                    ? "border-primary bg-primary/5 text-primary"
                                                    : "border-base-200 hover:bg-base-200/40"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <input
                                                        type="radio"
                                                        name="doctor_schedule"
                                                        value={slot}
                                                        checked={selectedSlot === slot}
                                                        onChange={() => setSelectedSlot(slot)}
                                                        className="radio radio-primary radio-sm"
                                                        required
                                                    />
                                                    <span>{slot}</span>
                                                </div>
                                                <span className="text-xs opacity-60 font-normal">Available</span>
                                            </label>
                                        ))}
                                    </div>
                                </TextField>

                                <Modal.Footer>
                                    <Button slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button type="submit" slot="close">Confirm Appointment</Button>
                                </Modal.Footer>
                            </form>
                        </Surface>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    );
}