export type FinancialItem = {
  label: string;
  amount: number;
  notes?: string;
};

export type CostGroup = {
  category: string;
  items: FinancialItem[];
};

export const revenue: FinancialItem[] = [
  {
    label: "Shopify Sales",
    amount: 343.14,
    notes: "Customer pays shipping"
  },
  {
    label: "Slice Sales",
    amount: 355.52,
    notes: "HZIP pays shipping"
  }
];

export const costGroups: CostGroup[] = [
  {
    category: "Production",
    items: [
      { label: "Calendar Prints", amount: 315.74 },
      { label: "Inbound Shipping (to @colfaxxx)", amount: 39.72 },
      { label: "Acrylic Stands (50 pcs)", amount: 291.43 },
      {
        label: "Prototypes (R&D)",
        amount: 0,
        notes: "Redacted per request"
      }
    ]
  },
  {
    category: "Shipping",
    items: [
      {
        label: "Slice International",
        amount: 245,
        notes: "Business expense (@colfaxxx's CC)"
      },
      {
        label: "Slice Domestic",
        amount: 60,
        notes: "Business expense (@colfaxxx's CC)"
      },
      {
        label: "Shopify Fulfillment",
        amount: 68.98,
        notes: "Business expense (@kompreni's CC)"
      }
    ]
  }
];

export function getTotalRevenue(): number {
  return revenue.reduce((sum, item) => sum + item.amount, 0);
}

export function getCostSegments(): FinancialItem[] {
  return costGroups.map((group) => ({
    label: group.category,
    amount: group.items.reduce((sum, item) => sum + item.amount, 0)
  }));
}

export function getAllCostItems(): Array<FinancialItem & { category: string }> {
  return costGroups.flatMap((group) =>
    group.items.map((item) => ({
      ...item,
      category: group.category
    }))
  );
}

export function getTotalCosts(): number {
  return getAllCostItems().reduce((sum, item) => sum + item.amount, 0);
}

export const breakEvenGoal = getTotalCosts();

export function getBreakEvenProgress(): number {
  if (breakEvenGoal <= 0) {
    return 0;
  }

  return Math.min(Math.max(getTotalRevenue() / breakEvenGoal, 0), 1);
}
