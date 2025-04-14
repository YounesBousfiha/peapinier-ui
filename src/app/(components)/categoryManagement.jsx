"use client"

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../@/components/ui/table"
import { useState, useEffect } from 'react';
import { categoryService } from '../../services/CategoryServices';
import Link from 'next/link';
import { toast } from "sonner";

export function CategoryManagement() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllCategories();
    }, []);

    const getAllCategories = async () => {
        try {
            const res = await categoryService.all();
            setData(res);
        } catch (error) {
            toast.error("Failed to fetch categories");
        }
    };

    const handleDelete = async (id) => {
        try {
            await categoryService.delete(id);
            toast.success("Category deleted successfully");
            getAllCategories(); // Refresh the list
        } catch (error) {
            toast.error("Failed to delete category");
        }
    };

    return (
        <div className="w-full">
            <Table>
                <TableCaption>Categories Management</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Name</TableHead>
                        <TableHead className="text-right w-[200px]">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((category) => (
                        <TableRow key={category.id}>
                            <TableCell>{category.name}</TableCell>
                            <TableCell className="text-right space-x-2">
                                <Link
                                    href={`/categories/edit/${category.id}`}
                                    className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(category.id)}
                                    className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}