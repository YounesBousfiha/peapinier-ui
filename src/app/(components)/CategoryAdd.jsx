"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "../../../@/components/ui/dialog";
import {Button} from "../../components/ui/button";
import {Label} from "../../components/ui/label";
import {Input} from "../../../@/components/ui/input";
import { useState } from 'react';
import { toast } from "sonner";
import { categoryService } from '../../services/CategoryServices';

export default function DialogDemo() {

    const [name, setName] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        try {
            toast.loading('...Adding category');
            const res  = await categoryService.create(data);
            if(res) {
                toast.dismiss();
                toast.success('Category added successfully');
            }
            console.log(res);
        } catch (error) {
            toast.dismiss();
            console.error(error);
            toast.error('Error while adding category')
        }

    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add Category</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Add new Category to your collection
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input
                                id="name"
                                value={name}
                                name="name"
                                className="col-span-3"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button type="submit">Save</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
)
}