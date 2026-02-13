import { Document, Page, View, Text } from "@react-pdf/renderer";
import { getStyles } from "./shared";

type Props = {
  title: string;
  date: string;
  fontSize: string;
  showNotes: boolean;
};

export default function WaitingPDF({ title, date, fontSize, showNotes }: Props) {
  const s = getStyles(fontSize);

  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        <View style={s.header}>
          <Text style={s.title}>{title || "Waiting On"}</Text>
          {date && <Text style={s.date}>{date}</Text>}
        </View>

        <View style={{ flexDirection: "row", marginBottom: 8 }}>
          <Text style={{ width: "35%", fontSize: 8, fontFamily: "Helvetica-Bold", color: "#666" }}>WHO</Text>
          <Text style={{ width: "40%", fontSize: 8, fontFamily: "Helvetica-Bold", color: "#666" }}>WHAT</Text>
          <Text style={{ width: "25%", fontSize: 8, fontFamily: "Helvetica-Bold", color: "#666" }}>BY WHEN</Text>
        </View>

        {Array.from({ length: 16 }).map((_, i) => (
          <View key={i} style={{ flexDirection: "row", borderBottomWidth: 0.5, borderBottomColor: "#ccc", height: 26 }}>
            <View style={{ width: "35%" }} />
            <View style={{ width: "40%", borderLeftWidth: 0.5, borderLeftColor: "#ccc" }} />
            <View style={{ width: "25%", borderLeftWidth: 0.5, borderLeftColor: "#ccc" }} />
          </View>
        ))}

        {showNotes && (
          <View>
            <Text style={s.sectionTitle}>Notes</Text>
            {Array.from({ length: 4 }).map((_, i) => (
              <View key={i} style={s.line} />
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
