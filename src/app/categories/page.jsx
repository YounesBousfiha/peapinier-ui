import Layout from "../(components)/layout";


export default function CategoryPage() {
    return (
        <Layout>
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Category</h1>
                    <p className="text-muted-foreground">Manage your categories here</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {/* Add categories cards here */}
                </div>
            </div>
        </Layout>
    );
}