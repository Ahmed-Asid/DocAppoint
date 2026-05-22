"use client";

import { Stethoscope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useState } from "react";

export function BookAppointment({ docName, availability }) {

    const todayStr = new Date().toISOString().split("T")[0];

    const [bookingDate, setBookingDate] = useState("");
    const [selectedSlot, setSelectedSlot] = useState("");


    const handleOnSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newUser = Object.fromEntries(formData.entries());
        console.log(newUser);
    }

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
                            <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>

                                <TextField className="w-full" name="docName" type="text" variant="secondary">
                                    <Label>Doctors Name</Label>
                                    <Input readOnly value={docName} />
                                </TextField>

                                <TextField className="w-full" name="name" type="text" variant="secondary">
                                    <Label>Name</Label>
                                    <Input placeholder="Enter your name" required />
                                </TextField>

                                <TextField className="w-full" name="email" type="email" variant="secondary">
                                    <Label>Email</Label>
                                    <Input placeholder="Enter your email" required />
                                </TextField>

                                <TextField className="w-full" name="phone" type="tel" variant="secondary">
                                    <Label>Phone</Label>
                                    <Input placeholder="Enter your phone number" required />
                                </TextField>

                                <TextField className="w-full" name="gender" variant="secondary">
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

                                <TextField className="w-full" name="date" variant="secondary">
                                    <Label>Appointment Date</Label>
                                    <Input
                                        type="date"
                                        min={todayStr}
                                        value={bookingDate}
                                        onChange={(e) => setBookingDate(e.target.value)}
                                        required
                                    />
                                </TextField>

                                <TextField className="w-full" name="timeSlot" variant="secondary">
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
                                    <Button type="submit">Confirm Appointment</Button>
                                </Modal.Footer>
                            </form>
                        </Surface>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    );
}