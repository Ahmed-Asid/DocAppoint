'use client'

import { Card, Button, Modal, Surface, TextField, Label, Input } from "@heroui/react";
import DashBoardTabs from "../DashboardTabs";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { Stethoscope } from "@gravity-ui/icons";

const ProfilePage = () => {

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log("user", user)


    return (
        <div className="w-full">
            <DashBoardTabs />
            <div className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <Card className="max-w-xl mx-auto">
                    {
                        isPending ? <div>Loading...</div> :
                            <div>
                                <h2 className="text-2xl font-medium text-center">User Information</h2>
                                <hr className="my-5" />
                                <div className="p-5 flex justify-around">

                                    <div className="flex flex-col items-center">
                                        <div className="relative w-40 h-40">
                                            <Image
                                                src={user.image}
                                                fill
                                                sizes={160}
                                                className="rounded-full border-2 border-blue-300 hover:scale-110 transition-transform delay-100"
                                                alt={user.name}
                                            />
                                        </div>

                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex gap-2 items-center">
                                            <FaUser size={32} />
                                            <div>
                                                <p className="text-sm text-default-500">
                                                    Name
                                                </p>
                                                <p className="font-medium capitalize">
                                                    {user.name}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex gap-2 items-center">
                                            <FiMail size={32} />
                                            <div>
                                                <p className="text-sm text-default-500">
                                                    Email Address
                                                </p>
                                                <p className="font-medium">
                                                    {user.email}
                                                </p>
                                            </div>
                                        </div>



                                        <div className="flex justify-end mt-8">
                                            <Modal>
                                                <Button color="primary" className="flex gap-2">
                                                    <FaEdit />
                                                    Update Profile
                                                </Button>
                                                <Modal.Backdrop>
                                                    <Modal.Container placement="auto">
                                                        <Modal.Dialog className="sm:max-w-md">
                                                            <Modal.CloseTrigger />
                                                            <Modal.Header>
                                                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                                                    <Stethoscope className="size-5" />
                                                                </Modal.Icon>
                                                                <Modal.Heading>Update your profile information.</Modal.Heading>

                                                            </Modal.Header>
                                                            <Modal.Body className="p-6">
                                                                <Surface variant="default">
                                                                    <form className="flex flex-col gap-4">

                                                                        <TextField className="w-full" type="text" variant="secondary">
                                                                            <Label>Name</Label>
                                                                            <Input name="name" value={user.name} />
                                                                        </TextField>

                                                                        <TextField className="w-full" type="url" variant="secondary">
                                                                            <Label>Image</Label>
                                                                            <Input name="image" value={user.image} />
                                                                        </TextField>

                                                                        <Modal.Footer>
                                                                            <Button slot="close" variant="secondary">
                                                                                Cancel
                                                                            </Button>
                                                                            <Button type="submit" slot="close" className="flex gap-2"><FaEdit /> Update Profile</Button>
                                                                        </Modal.Footer>
                                                                    </form>
                                                                </Surface>
                                                            </Modal.Body>
                                                        </Modal.Dialog>
                                                    </Modal.Container>
                                                </Modal.Backdrop>
                                            </Modal>
                                        </div>
                                    </div>


                                </div>

                            </div>
                    }
                </Card>
            </div>
        </div>
    );
};

export default ProfilePage;