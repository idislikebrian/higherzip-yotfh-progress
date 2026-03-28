export type FinancialItem = {
  label: string;
  amount: number;
  notes?: string;
};

export const calendarPrice = 44.44;

export type CostGroup = {
  category: string;
  items: FinancialItem[];
};

export const revenue: FinancialItem[] = [
  {
    label: "Shopify Sales",
    amount: 387.14, // was 343.14, +44.00 (Basil)
    notes: "Customer pays shipping"
  },
  {
    label: "Slice Sales",
    amount: 443.52, // was 355.52, +44.00 (mjc) +44.00 (Victor, placeholder)
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
        amount: 114.32, // was 60, +37.62 (apiip artist shipment) +8.35 (mjc) +8.35 (Victor, placeholder)
        notes: "Business expense (@colfaxxx's CC)"
      },
      {
        label: "Shopify Fulfillment",
        amount: 77.33, // was 68.98, +8.35 (Basil)
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

export function getProfitAfterBreakEven(): number {
  return Math.max(getTotalRevenue() - getTotalCosts(), 0);
}

export function getPerArtistProfitShare(artistCount: number): number {
  if (artistCount <= 0) {
    return 0;
  }

  return getProfitAfterBreakEven() / artistCount;
}

export function getRemainingAmountToBreakEven(): number {
  return Math.max(getTotalCosts() - getTotalRevenue(), 0);
}

export function getCalendarsNeededToBreakEven(unitPrice: number): number {
  if (unitPrice <= 0) {
    return 0;
  }

  const remaining = getRemainingAmountToBreakEven();

  return remaining > 0 ? Math.ceil(remaining / unitPrice) : 0;
}