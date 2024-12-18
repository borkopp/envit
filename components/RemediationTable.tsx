"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const remediationData = [
  {
    technology: "Soil dig & dump",
    inUseBy: "Construction companies",
    effectiveForRemoval: "YES",
    applicableHighlyContaminated: "YES",
    applicableAllSoils: "YES",
    applicableMultiContaminated: "YES",
    preservesSoil: "NO",
    noEmissions: "Soil deposition",
    cost: "100 – 700",
  },
  {
    technology: "Engineered solutions (soil capping)",
    inUseBy: "Construction companies",
    effectiveForRemoval: "YES",
    applicableHighlyContaminated: "YES",
    applicableAllSoils: "YES",
    applicableMultiContaminated: "YES",
    preservesSoil: "NO",
    noEmissions: "Leaching",
    cost: "30 – 200",
  },
  {
    technology: "Solidification & Stabilization",
    inUseBy: "Construction companies",
    effectiveForRemoval: "NO",
    applicableHighlyContaminated: "YES",
    applicableAllSoils: "NO",
    applicableMultiContaminated: "YES",
    preservesSoil: "NO",
    noEmissions: "YES but difficult to achieve",
    cost: "40 – 100",
  },
  {
    technology: "Classical soil washing (removal of fines)",
    inUseBy: "Remediation companies",
    effectiveForRemoval: "YES (up to 80%)",
    applicableHighlyContaminated: "YES, optionally",
    applicableAllSoils: "Only for light and sandy soils",
    applicableMultiContaminated: "YES",
    preservesSoil: "NO",
    noEmissions: "Deposition of contaminated fines",
    cost: "50 – 150",
  },
  {
    technology: "Immobilization by various additives",
    inUseBy: "Remediation companies",
    effectiveForRemoval: "NO (reduces Bio-metal accessibility)",
    applicableHighlyContaminated: "NO",
    applicableAllSoils: "Difficult for rich, heavy soils",
    applicableMultiContaminated: "Theoretically",
    preservesSoil: "YES",
    noEmissions: "YES",
    cost: "20 – 60 + repeatable periodical cost",
  },
  {
    technology: "Phytoremediation",
    inUseBy: "Remediation companies",
    effectiveForRemoval: "Not efficient for Pb, As, Cu.",
    applicableHighlyContaminated: "NO",
    applicableAllSoils: "YES",
    applicableMultiContaminated: "NO",
    preservesSoil: "YES",
    noEmissions: "Contaminated biomass",
    cost: "?",
  },
  {
    technology: "ReSoil®",
    inUseBy: "Remediation companies",
    effectiveForRemoval: "YES (up to 95 %)",
    applicableHighlyContaminated: "YES",
    applicableAllSoils: "YES",
    applicableMultiContaminated: "YES",
    preservesSoil: "YES",
    noEmissions: "YES",
    cost: "70 – 150",
  },
];

export function RemediationTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Available Technologies</TableHead>
            <TableHead>In use by</TableHead>
            <TableHead>Effective for heavy metal removal</TableHead>
            <TableHead>Applicable for highly contaminated soil</TableHead>
            <TableHead>Applicable for all soil types</TableHead>
            <TableHead>Applicable for multi-contaminated soil</TableHead>
            <TableHead>Preserves soil (Green & sustainable)</TableHead>
            <TableHead>NO problematic emissions</TableHead>
            <TableHead>Cost for end customer (€/m³)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {remediationData.map((row, index) => (
            <TableRow key={row.technology}>
              <TableCell className={cn(
                "font-bold",
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : ""
              )}>{row.technology}</TableCell>
              <TableCell className={cn(
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : ""
              )}>{row.inUseBy}</TableCell>
              <TableCell className={cn(
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : "",
                index !== remediationData.length - 1 && row.effectiveForRemoval.includes("YES") ? "bg-[#90EE90]/20" : "",
                index !== remediationData.length - 1 && row.effectiveForRemoval === "NO" ? "bg-[#FFB6B6]/20" : ""
              )}>{row.effectiveForRemoval}</TableCell>
              <TableCell className={cn(
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : "",
                index !== remediationData.length - 1 && row.applicableHighlyContaminated === "YES" ? "bg-[#90EE90]/20" : "",
                index !== remediationData.length - 1 && row.applicableHighlyContaminated === "NO" ? "bg-[#FFB6B6]/20" : ""
              )}>{row.applicableHighlyContaminated}</TableCell>
              <TableCell className={cn(
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : "",
                index !== remediationData.length - 1 && row.applicableAllSoils === "YES" ? "bg-[#90EE90]/20" : "",
                index !== remediationData.length - 1 && row.applicableAllSoils === "NO" ? "bg-[#FFB6B6]/20" : ""
              )}>{row.applicableAllSoils}</TableCell>
              <TableCell className={cn(
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : "",
                index !== remediationData.length - 1 && row.applicableMultiContaminated === "YES" ? "bg-[#90EE90]/20" : "",
                index !== remediationData.length - 1 && row.applicableMultiContaminated === "NO" ? "bg-[#FFB6B6]/20" : ""
              )}>{row.applicableMultiContaminated}</TableCell>
              <TableCell className={cn(
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : "",
                index !== remediationData.length - 1 && row.preservesSoil === "YES" ? "bg-[#90EE90]/20" : "",
                index !== remediationData.length - 1 && row.preservesSoil === "NO" ? "bg-[#FFB6B6]/20" : ""
              )}>{row.preservesSoil}</TableCell>
              <TableCell className={cn(
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : "",
                index !== remediationData.length - 1 && row.noEmissions === "YES" ? "bg-[#90EE90]/20" : "",
                index !== remediationData.length - 1 && row.noEmissions === "NO" ? "bg-[#FFB6B6]/20" : ""
              )}>{row.noEmissions}</TableCell>
              <TableCell className={cn(
                index === remediationData.length - 1 ? "bg-[#90EE90]/60" : ""
              )}>{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 