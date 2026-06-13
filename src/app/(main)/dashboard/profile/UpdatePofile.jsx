"use client";

import { Stethoscope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function UpdateProfile({ user, updateProfile, refetch }) {

    const formAction = async (formData) => {

        const updatedData = Object.fromEntries(formData.entries());
        console.log("hello", updatedData)
        await updateProfile(updatedData, user.id)
        await refetch();

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
                        <Modal.Heading>Update your profile.</Modal.Heading>
                    </Modal.Header>
                    <Modal.Body className="p-6">
                        <Surface variant="default">
                            <form className="flex flex-col gap-4" action={formAction}>

                                <TextField defaultValue={user.name} className="w-full" type="text" variant="secondary">
                                    <Label>Name</Label>
                                    <Input name="name" required />
                                </TextField>

                                <TextField defaultValue={user.image} className="w-full" type="url" variant="secondary">
                                    <Label>Image</Label>
                                    <Input name="image" required />
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