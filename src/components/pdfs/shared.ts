import { StyleSheet } from "@react-pdf/renderer";

// Shared PDF styles — black & white, ink-friendly, wide margins, US Letter
export function getStyles(fontSize: string) {
  const base = fontSize === "large" ? 13 : 11;
  const heading = fontSize === "large" ? 20 : 16;
  const sub = fontSize === "large" ? 11 : 9;

  return StyleSheet.create({
    page: {
      padding: 54, // ~0.75in margins
      fontFamily: "Helvetica",
      fontSize: base,
      color: "#000",
      backgroundColor: "#fff",
    },
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      borderBottomWidth: 1,
      borderBottomColor: "#000",
      paddingBottom: 8,
      marginBottom: 20,
    },
    title: {
      fontSize: heading,
      fontFamily: "Helvetica-Bold",
    },
    date: {
      fontSize: sub,
      color: "#444",
    },
    sectionTitle: {
      fontSize: base + 1,
      fontFamily: "Helvetica-Bold",
      marginTop: 16,
      marginBottom: 8,
    },
    line: {
      borderBottomWidth: 0.5,
      borderBottomColor: "#ccc",
      height: 24,
      marginBottom: 2,
    },
    lineThick: {
      borderBottomWidth: 0.5,
      borderBottomColor: "#ccc",
      height: 28,
      marginBottom: 2,
    },
    dottedLine: {
      borderBottomWidth: 0.5,
      borderBottomColor: "#ccc",
      borderBottomStyle: "dotted" as const,
      height: 24,
      marginBottom: 2,
    },
    row: {
      flexDirection: "row",
      gap: 16,
    },
    col: {
      flex: 1,
    },
    checkbox: {
      width: 12,
      height: 12,
      borderWidth: 1,
      borderColor: "#000",
      marginRight: 8,
      marginTop: 2,
    },
    checkboxRow: {
      flexDirection: "row",
      alignItems: "flex-start",
      marginBottom: 6,
    },
    label: {
      fontSize: sub,
      color: "#666",
      marginBottom: 4,
    },
    smallText: {
      fontSize: sub,
      color: "#444",
    },
  });
}
