"use client";

import { Stethoscope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { toast } from "react-toastify";

export function UpdateAppointment({ appointment, updateAppointment }) {

    const onSubmit = async (formData) => {
        const formdata = Object.fromEntries(formData.entries());
        console.log(formData)
        const result = await updateAppointment(formdata, appointment._id)
        if (result.success) {
            toast.success(result.message);
        } else {
            toast.error(result.message);
        }
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
                        <Modal.Heading>Update your appointment information.</Modal.Heading>

                    </Modal.Header>
                    <Modal.Body className="p-6">
                        <Surface variant="default">
                            <form className="flex flex-col gap-4" action={onSubmit}>

                                <TextField className="w-full" type="text" variant="secondary">
                                    <Label>Doctor's Name</Label>
                                    <Input name="docName" readOnly value={appointment.docName} />
                                </TextField>

                                <TextField defaultValue={appointment.name} className="w-full" type="text" variant="secondary">
                                    <Label>Name</Label>
                                    <Input name="name" required />
                                </TextField>

                                <TextField defaultValue={appointment.email} className="w-full" type="email" variant="secondary">
                                    <Label>Email</Label>
                                    <Input name="email" required />
                                </TextField>

                                <TextField defaultValue={appointment.phone} className="w-full" type="tel" variant="secondary">
                                    <Label>Phone</Label>
                                    <Input name="phone" required />
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

                                <Modal.Footer>
                                    <Button slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button type="submit" slot="close">Save</Button>
                                </Modal.Footer>
                            </form>
                        </Surface>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal.Container>
        </Modal.Backdrop>
    );
}