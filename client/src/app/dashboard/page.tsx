"use client";
import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard
        title="Clientes & Despesas"
        primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29/10/2023"
        details={[
          {
            title: "Crescimento de Clientes",
            amount: "175",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Despesas",
            amount: "10",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Dívidas & Pedidos"
        primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29/10/2023"
        details={[
          {
            title: "Dívidas",
            amount: "250",
            changePercentage: 131,
            IconComponent: TrendingUp,
          },
          {
            title: "Pedidos Recentes",
            amount: "147",
            changePercentage: -56,
            IconComponent: TrendingDown,
          },
        ]}
      />
      <StatCard
        title="Vendas & Descontos"
        primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
        dateRange="22 - 29/10/2023"
        details={[
          {
            title: "Vendas",
            amount: "R$1000.00",
            changePercentage: 20,
            IconComponent: TrendingUp,
          },
          {
            title: "Desconto",
            amount: "R$200.00",
            changePercentage: -10,
            IconComponent: TrendingDown,
          },
        ]}
      />
    </div>
  );
};

export default Dashboard;
