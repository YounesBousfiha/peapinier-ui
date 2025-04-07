import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { DollarSign, Users, ShoppingBag, Leaf } from "lucide-react";
import Layout from "../(components)/layout";

export default function DashboardPage() {
    const cards = [
        {
            title: "Total Revenue",
            value: "$24,231.00",
            icon: <DollarSign className="h-4 w-4 text-muted-foreground" />,
        },
        {
            title: "New Customers",
            value: "+573",
            icon: <Users className="h-4 w-4 text-muted-foreground" />,
        },
        {
            title: "Total Orders",
            value: "1,234",
            icon: <ShoppingBag className="h-4 w-4 text-muted-foreground" />,
        },
        {
            title: "Total Plants",
            value: "5,678",
            icon: <Leaf className="h-4 w-4 text-muted-foreground" />,
        },
    ];

    return (
        <Layout >
        <div className="p-6 space-y-8">
            <div className="flex flex-col gap-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                        Welcome back, Gardener!
                    </h1>
                    <p className="text-muted-foreground">
                        Here's an overview of your garden store activity
                    </p>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {cards.map((card, index) => (
                    <Card key={index}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {card.title}
                            </CardTitle>
                            {card.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{card.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
        </Layout>
    );
}