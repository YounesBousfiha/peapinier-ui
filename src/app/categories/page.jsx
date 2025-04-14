// page.jsx
import Layout from "../(components)/layout";
import { CategoryManagement } from "../(components)/categoryManagement";
import CategoryAdd from '../../app/(components)/CategoryAdd';
export default function CategoryPage() {
    return (
        <Layout>
            <div className="flex flex-col gap-6">
                <div>
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-bold tracking-tight">Category</h1>
                        <CategoryAdd />
                    </div>
                    <p className="text-muted-foreground">Manage your categories here</p>
                </div>

                <div className="w-full overflow-x-auto">
                    <CategoryManagement />
                </div>
            </div>
        </Layout>
    );
}

