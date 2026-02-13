import { Document, Page, View, Text } from "@react-pdf/renderer";
import { getStyles } from "./shared";

type Props = {
  title: string;
  date: string;
  fontSize: string;
  showFactors: boolean;
  showConclusion: boolean;
};

export default function DecisionPDF({ title, date, fontSize, showFactors, showConclusion }: Props) {
  const s = getStyles(fontSize);

  return (
    <Document>
      <Page size="LETTER" style={s.page}>
        <View style={s.header}>
          <Text style={s.title}>{title || "Decision"}</Text>
          {date && <Text style={s.date}>{date}</Text>}
        </View>

        <Text style={s.sectionTitle}>The Question</Text>
        <View style={s.lineThick} />
        <View style={s.lineThick} />

        <View style={{ flexDirection: "row", gap: 24, marginTop: 8 }}>
          <View style={{ flex: 1 }}>
            <Text style={s.sectionTitle}>Pros</Text>
            {Array.from({ length: 7 }).map((_, i) => (
              <View key={i} style={s.checkboxRow}>
                <View style={s.checkbox} />
                <View style={{ flex: 1, ...s.line }} />
              </View>
            ))}
          </View>
          <View style={{ flex: 1 }}>
            <Text style={s.sectionTitle}>Cons</Text>
            {Array.from({ length: 7 }).map((_, i) => (
              <View key={i} style={s.checkboxRow}>
                <View style={s.checkbox} />
                <View style={{ flex: 1, ...s.line }} />
              </View>
            ))}
          </View>
        </View>

        {showFactors && (
          <View>
            <Text style={s.sectionTitle}>Key Factors</Text>
            {Array.from({ length: 4 }).map((_, i) => (
              <View key={i} style={s.line} />
            ))}
          </View>
        )}

        {showConclusion && (
          <View>
            <Text style={s.sectionTitle}>Conclusion</Text>
            {Array.from({ length: 3 }).map((_, i) => (
              <View key={i} style={s.line} />
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
